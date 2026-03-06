"use server";

import { prisma } from "@/lib/prisma";
import { startOfDay, endOfDay, subDays } from "date-fns";
import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";

async function ensureAdmin() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        throw new Error("No autorizado");
    }
    // Optional: Check if user has ADMIN role in DB
    const dbUser = await prisma.user.findUnique({ where: { email: user.email! } });
    if (!dbUser || dbUser.role !== 'ADMIN') {
        throw new Error("No tienes permisos de administrador");
    }
    return { user, dbUser };
}

export async function getAdminMetricsAction() {
    await ensureAdmin();
    try {
        const today = new Date();
        const start = startOfDay(today);
        const end = endOfDay(today);
        const yesterdayStart = startOfDay(subDays(today, 1));
        const yesterdayEnd = endOfDay(subDays(today, 1));

        // 1. Ventas de hoy (POS)
        const todaySales = await prisma.sale.aggregate({
            where: {
                createdAt: { gte: start, lte: end },
            },
            _sum: { totalAmount: true },
            _count: { id: true },
        });

        // 1b. Pedidos Distribuidores hoy (Solo entregados)
        const todayDistOrders = await prisma.distributorOrder.aggregate({
            where: {
                createdAt: { gte: start, lte: end },
                status: "ENTREGADO"
            },
            _sum: { totalAmount: true }
        });

        // 2. Ventas de ayer para crecimiento
        const yesterdaySales = await prisma.sale.aggregate({
            where: {
                createdAt: { gte: yesterdayStart, lte: yesterdayEnd },
            },
            _sum: { totalAmount: true },
        });

        const yesterdayDistOrders = await prisma.distributorOrder.aggregate({
            where: {
                createdAt: { gte: yesterdayStart, lte: yesterdayEnd },
                status: "ENTREGADO"
            },
            _sum: { totalAmount: true }
        });

        // 3. Alertas de inventario
        const stockAlerts = await prisma.product.count({
            where: {
                stockQuantity: {
                    lte: prisma.product.fields.minimumStockAlert,
                },
            },
        });

        // 4. Datos para la gráfica (últimos 7 días)
        const last7Days = Array.from({ length: 7 }, (_, i) => {
            const date = subDays(today, i);
            return {
                start: startOfDay(date),
                end: endOfDay(date),
                label: date.toLocaleDateString("es-MX", { weekday: "short" }),
            };
        }).reverse();

        const chartData = await Promise.all(
            last7Days.map(async (day) => {
                const [posSum, distSum] = await Promise.all([
                    prisma.sale.aggregate({
                        where: { createdAt: { gte: day.start, lte: day.end } },
                        _sum: { totalAmount: true },
                    }),
                    prisma.distributorOrder.aggregate({
                        where: {
                            createdAt: { gte: day.start, lte: day.end },
                            status: "ENTREGADO"
                        },
                        _sum: { totalAmount: true }
                    })
                ]);

                return {
                    name: day.label,
                    revenue: Number(posSum._sum.totalAmount || 0) + Number(distSum._sum.totalAmount || 0),
                };
            })
        );

        const todayAmount = Number(todaySales._sum.totalAmount || 0) + Number(todayDistOrders._sum.totalAmount || 0);
        const yesterdayAmount = Number(yesterdaySales._sum.totalAmount || 0) + Number(yesterdayDistOrders._sum.totalAmount || 0);
        const growth = yesterdayAmount > 0
            ? ((todayAmount - yesterdayAmount) / yesterdayAmount) * 100
            : 100;

        const inventory = await prisma.product.findMany({
            where: { active: true },
            orderBy: { stockQuantity: "asc" },
            take: 10
        });

        // 5. Ventas por tipo de pago (POS) usando Raw SQL para evitar problemas de sincronización de Prisma
        const salesByType: any[] = await prisma.$queryRaw`
            SELECT "isCredit", SUM("totalAmount") as total
            FROM sales
            WHERE "createdAt" >= ${start} AND "createdAt" <= ${end}
            GROUP BY "isCredit"
        `;

        const cashPOS = Number(salesByType.find(s => s.isCredit === false)?.total || 0);
        const creditPOS = Number(salesByType.find(s => s.isCredit === true)?.total || 0);

        return {
            totalRevenue: todayAmount,
            cashRevenue: cashPOS + Number(todayDistOrders._sum.totalAmount || 0),
            creditRevenue: creditPOS,
            totalOrders: todaySales._count.id + (await prisma.distributorOrder.count({ where: { createdAt: { gte: start, lte: end } } })),
            activeDistributors: await prisma.distributor.count(),
            lowStockCount: stockAlerts,
            growth: Math.round(growth),
            chartData,
            inventory: inventory.map(p => ({
                id: p.id,
                name: p.name,
                stock: Number(p.stockQuantity),
                minStock: Number(p.minimumStockAlert),
                unit: p.unitType
            }))
        };
    } catch (error) {
        console.error("Error fetching admin metrics:", error);
        throw new Error("No se pudieron cargar las métricas.");
    }
}

export async function getInventoryAction() {
    await ensureAdmin();
    try {
        const products = await prisma.product.findMany({
            orderBy: { stockQuantity: "asc" },
        });
        return products.map((p: any) => ({
            id: p.id,
            name: p.name,
            stock: Number(p.stockQuantity),
            minStock: Number(p.minimumStockAlert),
            unit: p.unitType,
            category: p.category,
        }));
    } catch (error) {
        throw new Error("Error al obtener inventario");
    }
}

export async function getDistributorOrdersAction() {
    await ensureAdmin();
    try {
        const orders = await prisma.distributorOrder.findMany({
            include: {
                distributor: true,
                orderItems: {
                    include: {
                        product: true
                    }
                }
            },
            orderBy: { createdAt: "desc" }
        });

        return orders.map((o: any) => ({
            ...o,
            totalAmount: Number(o.totalAmount),
            distributor: {
                ...o.distributor,
                creditLimit: Number(o.distributor.creditLimit || 0),
            },
            orderItems: o.orderItems.map((oi: any) => ({
                ...oi,
                unitPrice: Number(oi.unitPrice),
                subtotal: Number(oi.subtotal),
                quantity: Number(oi.quantity),
                product: {
                    ...oi.product,
                    pricePublic: Number(oi.product.pricePublic),
                    priceDistributor: Number(oi.product.priceDistributor),
                    stockQuantity: Number(oi.product.stockQuantity),
                    minimumStockAlert: Number(oi.product.minimumStockAlert),
                }
            }))
        }));
    } catch (error) {
        throw new Error("Error al obtener pedidos de distribuidores");
    }
}

export async function updateOrderStatusAction(orderId: string, status: any) {
    await ensureAdmin();
    try {
        const result = await prisma.$transaction(async (tx: any) => {
            const oldOrder = await tx.distributorOrder.findUnique({
                where: { id: orderId },
                include: { orderItems: true }
            });

            if (!oldOrder) throw new Error("Pedido no encontrado");

            const updatedOrder = await tx.distributorOrder.update({
                where: { id: orderId },
                data: { status }
            });

            // Si el pedido pasa a ENTREGADO, descontamos stock
            if (status === "ENTREGADO" && oldOrder.status !== "ENTREGADO") {
                for (const item of oldOrder.orderItems) {
                    await tx.product.update({
                        where: { id: item.productId },
                        data: {
                            stockQuantity: {
                                decrement: item.quantity
                            }
                        }
                    });

                    await tx.inventoryMovement.create({
                        data: {
                            businessId: oldOrder.businessId,
                            productId: item.productId,
                            movementType: "venta_distribuidor",
                            quantity: item.quantity,
                            referenceId: orderId
                        }
                    });
                }
            }

            return updatedOrder;
        });

        revalidatePath("/admin");
        return { success: true };
    } catch (error) {
        console.error("Error updating order status:", error);
        return { success: false, error: "Error al actualizar estado e inventario" };
    }
}

// ==========================================
// PRODUCTOS (CRUD)
// ==========================================

export async function getProductsFullAction() {
    await ensureAdmin();
    try {
        const products = await prisma.product.findMany({
            orderBy: { name: "asc" },
        });
        return products.map((p: any) => ({
            id: p.id,
            name: p.name,
            description: p.description,
            pricePublic: Number(p.pricePublic),
            priceDistributor: Number(p.priceDistributor),
            unitType: p.unitType,
            stockQuantity: Number(p.stockQuantity),
            minimumStockAlert: Number(p.minimumStockAlert),
            category: p.category,
            active: p.active,
            createdAt: p.createdAt,
            businessId: p.businessId,
        }));
    } catch (error) {
        throw new Error("Error al obtener productos");
    }
}

export async function createProductAction(data: {
    name: string;
    description?: string;
    pricePublic: number;
    priceDistributor: number;
    unitType: string;
    stockQuantity: number;
    minimumStockAlert: number;
    category?: string;
}) {
    await ensureAdmin();
    try {
        const business = await prisma.business.findFirst();
        if (!business) throw new Error("Business no encontrado");

        const product = await prisma.product.create({
            data: {
                businessId: business.id,
                name: data.name,
                description: data.description || null,
                pricePublic: data.pricePublic,
                priceDistributor: data.priceDistributor,
                unitType: data.unitType,
                stockQuantity: data.stockQuantity,
                minimumStockAlert: data.minimumStockAlert,
                category: data.category || null,
            },
        });

        revalidatePath("/admin");
        return { success: true, id: product.id };
    } catch (error) {
        console.error("Error al crear producto:", error);
        return { success: false, error: "Error al crear producto" };
    }
}

export async function updateProductAction(
    id: string,
    data: {
        name: string;
        description?: string;
        pricePublic: number;
        priceDistributor: number;
        unitType: string;
        minimumStockAlert: number;
        category?: string;
    }
) {
    await ensureAdmin();
    try {
        await prisma.product.update({
            where: { id },
            data: {
                name: data.name,
                description: data.description || null,
                pricePublic: data.pricePublic,
                priceDistributor: data.priceDistributor,
                unitType: data.unitType,
                minimumStockAlert: data.minimumStockAlert,
                category: data.category || null,
            },
        });

        revalidatePath("/admin");
        return { success: true };
    } catch (error) {
        return { success: false, error: "Error al actualizar producto" };
    }
}

export async function toggleProductActiveAction(id: string, active: boolean) {
    await ensureAdmin();
    try {
        await prisma.product.update({ where: { id }, data: { active } });
        revalidatePath("/admin");
        return { success: true };
    } catch (error) {
        return { success: false, error: "Error al actualizar estado" };
    }
}

// ==========================================
// INVENTARIO (MOVIMIENTOS)
// ==========================================

export async function getInventoryMovementsAction() {
    await ensureAdmin();
    try {
        const movements = await prisma.inventoryMovement.findMany({
            include: { product: true },
            orderBy: { createdAt: "desc" },
            take: 100,
        });
        return movements.map((m: any) => ({
            id: m.id,
            productId: m.productId,
            productName: m.product.name,
            movementType: m.movementType,
            quantity: Number(m.quantity),
            referenceId: m.referenceId,
            createdAt: m.createdAt,
        }));
    } catch (error) {
        throw new Error("Error al obtener movimientos");
    }
}

export async function createInventoryMovementAction(data: {
    productId: string;
    movementType: string;
    quantity: number;
}) {
    await ensureAdmin();
    try {
        const business = await prisma.business.findFirst();
        if (!business) throw new Error("Business no encontrado");

        // Determine if this is an addition or subtraction to stock
        const isAddition = data.movementType === "entrada_produccion";
        const quantityValue = isAddition ? Math.abs(data.quantity) : -Math.abs(data.quantity);

        await prisma.$transaction(async (tx: any) => {
            await tx.inventoryMovement.create({
                data: {
                    businessId: business.id,
                    productId: data.productId,
                    movementType: data.movementType,
                    quantity: Math.abs(data.quantity),
                },
            });

            await tx.product.update({
                where: { id: data.productId },
                data: {
                    stockQuantity: {
                        increment: quantityValue,
                    },
                },
            });
        });

        revalidatePath("/admin");
        return { success: true };
    } catch (error) {
        console.error("Error al registrar movimiento:", error);
        return { success: false, error: "Error al registrar movimiento de inventario" };
    }
}

// ==========================================
// USUARIOS (PERSONAL)
// ==========================================

export async function getUsersAction() {
    await ensureAdmin();
    try {
        const users = await prisma.user.findMany({
            orderBy: { createdAt: "desc" },
        });
        return users.map((u: any) => ({
            id: u.id,
            name: u.name,
            email: u.email,
            role: u.role,
            active: u.active,
            createdAt: u.createdAt,
        }));
    } catch (error) {
        throw new Error("Error al obtener usuarios");
    }
}

export async function createUserAction(data: {
    name: string;
    email: string;
    password: string;
    role: string;
}) {
    await ensureAdmin();
    try {
        const business = await prisma.business.findFirst();
        if (!business) throw new Error("Business no encontrado");

        const existing = await prisma.user.findUnique({ where: { email: data.email } });
        if (existing) return { success: false, error: "El correo ya está registrado" };

        // 1. Registrar en Supabase Auth
        const supabase = await createClient();
        const { error: authError } = await supabase.auth.signUp({
            email: data.email,
            password: data.password,
            options: {
                data: {
                    name: data.name,
                    role: data.role
                }
            }
        });

        if (authError) {
            console.error("Supabase Auth Error:", authError);
            return { success: false, error: `Error en Autenticación: ${authError.message}` };
        }

        // 2. Registrar en Base de Datos Local
        await prisma.user.create({
            data: {
                businessId: business.id,
                name: data.name,
                email: data.email,
                passwordHash: data.password, // In production use bcrypt
                role: data.role as any,
            },
        });

        revalidatePath("/admin");
        return { success: true };
    } catch (error) {
        console.error("Create user error:", error);
        return { success: false, error: "Error al crear usuario" };
    }
}

export async function updateUserAction(id: string, data: {
    name: string;
    email: string;
    password?: string;
    role: string;
}) {
    await ensureAdmin();
    try {
        const updateData: any = {
            name: data.name,
            email: data.email,
            role: data.role as any,
        };

        if (data.password && data.password.trim() !== "") {
            updateData.passwordHash = data.password;
        }

        await prisma.user.update({
            where: { id },
            data: updateData
        });

        revalidatePath("/admin");
        return { success: true };
    } catch (error) {
        console.error("Update user error:", error);
        return { success: false, error: "Error al actualizar usuario" };
    }
}

export async function toggleUserActiveAction(id: string, active: boolean) {
    await ensureAdmin();
    try {
        await prisma.user.update({ where: { id }, data: { active } });
        revalidatePath("/admin");
        return { success: true };
    } catch (error) {
        return { success: false, error: "Error al actualizar estado del usuario" };
    }
}

// ==========================================
// REPORTES (CORTES DE CAJA)
// ==========================================

export async function getCashRegistersAction() {
    await ensureAdmin();
    try {
        const registers = await prisma.cashRegister.findMany({
            include: {
                openedBy: { select: { name: true, email: true } },
                closedBy: { select: { name: true, email: true } },
            },
            orderBy: { openedAt: "desc" },
            take: 50,
        });
        return registers.map((r: any) => ({
            id: r.id,
            openedBy: r.openedBy,
            closedBy: r.closedBy,
            openingAmount: Number(r.openingAmount),
            closingAmount: r.closingAmount !== null ? Number(r.closingAmount) : null,
            expectedAmount: r.expectedAmount !== null ? Number(r.expectedAmount) : null,
            discrepancyAmount: r.discrepancyAmount !== null ? Number(r.discrepancyAmount) : null,
            openedAt: r.openedAt,
            closedAt: r.closedAt,
        }));
    } catch (error) {
        throw new Error("Error al obtener cortes de caja");
    }
}

export async function getRegisterDetailsAction(registerId: string) {
    await ensureAdmin();
    try {
        // 1. Registro principal con usuarios
        const registers: any[] = await prisma.$queryRaw`
            SELECT r.*, 
                   uo.name as "openedByName", uo.email as "openedByEmail",
                   uc.name as "closedByName", uc.email as "closedByEmail"
            FROM cash_registers r
            LEFT JOIN users uo ON r."openedById" = uo.id
            LEFT JOIN users uc ON r."closedById" = uc.id
            WHERE r.id = ${registerId}
        `;

        if (registers.length === 0) throw new Error("Registro no encontrado");
        const registerData = registers[0];
        const endTime = registerData.closedAt || new Date();

        // 2. Ventas
        const sales: any[] = await prisma.$queryRaw`
            SELECT s.*, c.name as "customerName"
            FROM sales s
            LEFT JOIN customers c ON s."customerId" = c.id
            WHERE s."userId" = ${registerData.openedById}
            AND s."createdAt" >= ${registerData.openedAt}
            AND s."createdAt" <= ${endTime}
            ORDER BY s."createdAt" DESC
        `;

        // 3. Gastos
        const expenses: any[] = await prisma.$queryRaw`
            SELECT * FROM expenses 
            WHERE "cashRegisterId" = ${registerId}
            ORDER BY "createdAt" DESC
        `;

        // 4. Entradas Manuales
        const inflows: any[] = await prisma.$queryRaw`
            SELECT * FROM cash_inflows 
            WHERE "cashRegisterId" = ${registerId}
            ORDER BY "createdAt" DESC
        `;

        // 5. Abonos de clientes
        const abonos: any[] = await prisma.$queryRaw`
            SELECT t.id, t.amount, t."createdAt", t.description, c.name as "customerName"
            FROM credit_transactions t
            JOIN customers c ON t."customerId" = c.id
            WHERE t.type = 'abonos'
            AND t."createdAt" >= ${registerData.openedAt}
            AND t."createdAt" <= ${endTime}
            AND c."businessId" = ${registerData.businessId}
            ORDER BY t."createdAt" DESC
        `;

        return {
            register: {
                ...registerData,
                openingAmount: Number(registerData.openingAmount),
                closingAmount: registerData.closingAmount ? Number(registerData.closingAmount) : null,
                expectedAmount: registerData.expectedAmount ? Number(registerData.expectedAmount) : null,
                discrepancyAmount: registerData.discrepancyAmount ? Number(registerData.discrepancyAmount) : null,
                openedBy: { name: registerData.openedByName, email: registerData.openedByEmail },
                closedBy: registerData.closedByName ? { name: registerData.closedByName, email: registerData.closedByEmail } : null
            },
            sales: sales.map(s => ({ ...s, totalAmount: Number(s.totalAmount) })),
            expenses: expenses.map(e => ({ ...e, amount: Number(e.amount) })),
            inflows: inflows.map(i => ({ ...i, amount: Number(i.amount) })),
            abonos: abonos.map(a => ({ ...a, amount: Number(a.amount) }))
        };
    } catch (error) {
        console.error("Error fetching register details:", error);
        throw new Error("Error al obtener los detalles del corte");
    }
}

export async function getSalesAction(dateStr?: string) {
    await ensureAdmin();
    try {
        let dateFilter = "";
        if (dateStr) {
            // dateStr is expected in YYYY-MM-DD format from client
            dateFilter = `WHERE s."createdAt"::date = ${dateStr}::date`;
        }

        // Use raw SQL to join with customers as Prisma client might be out of sync
        const sales: any[] = await prisma.$queryRawUnsafe(`
            SELECT s.*, u.name as "userName", c.name as "customerName"
            FROM sales s
            LEFT JOIN users u ON s."userId" = u.id
            LEFT JOIN customers c ON s."customerId" = c.id
            ${dateFilter}
            ORDER BY s."createdAt" DESC
            LIMIT 200
        `);

        // We still need to fetch items for each sale. For simplicity in this large file:
        const enrichedSales = await Promise.all(sales.map(async (s) => {
            const items = await prisma.saleItem.findMany({
                where: { saleId: s.id },
                include: { product: true }
            });
            return {
                ...s,
                totalAmount: Number(s.totalAmount),
                user: { name: s.userName },
                customer: s.customerName ? { name: s.customerName } : null,
                saleItems: items.map((si: any) => ({
                    ...si,
                    unitPrice: Number(si.unitPrice),
                    subtotal: Number(si.subtotal),
                    quantity: Number(si.quantity),
                    product: {
                        ...si.product,
                        pricePublic: Number(si.product.pricePublic),
                        priceDistributor: Number(si.product.priceDistributor),
                        stockQuantity: Number(si.product.stockQuantity),
                        minimumStockAlert: Number(si.product.minimumStockAlert),
                    }
                }))
            };
        }));

        return enrichedSales;
    } catch (error) {
        console.error("Error fetching sales history:", error);
        throw new Error("Error al obtener historial de ventas");
    }
}

// ==========================================
// CLIENTES (CRUD)
// ==========================================

export async function getCustomersAction() {
    await ensureAdmin();
    try {
        const customers = await prisma.$queryRaw<any[]>`
            SELECT * FROM customers ORDER BY name ASC
        `;
        return customers.map(c => ({
            ...c,
            creditLimit: Number(c.creditLimit),
            currentDebt: Number(c.currentDebt)
        }));
    } catch (error) {
        throw new Error("Error al obtener clientes");
    }
}

export async function createCustomerAdminAction(data: {
    name: string;
    phone?: string;
    email?: string;
    address?: string;
    creditLimit: number;
}) {
    await ensureAdmin();
    try {
        const business = await prisma.business.findFirst();
        if (!business) throw new Error("Business no encontrado");

        await prisma.$executeRaw`
            INSERT INTO customers (id, "businessId", name, phone, email, address, "creditLimit", "currentDebt", active, "createdAt")
            VALUES (${crypto.randomUUID()}, ${business.id}, ${data.name}, ${data.phone || null}, ${data.email || null}, ${data.address || null}, ${data.creditLimit}, 0, true, ${new Date()})
        `;

        revalidatePath("/admin");
        return { success: true };
    } catch (error) {
        return { success: false, error: "Error al crear cliente" };
    }
}

export async function updateCustomerAction(id: string, data: {
    name: string;
    phone?: string;
    email?: string;
    address?: string;
    creditLimit: number;
}) {
    await ensureAdmin();
    try {
        await prisma.$executeRaw`
            UPDATE customers
            SET name = ${data.name}, phone = ${data.phone || null}, email = ${data.email || null}, address = ${data.address || null}, "creditLimit" = ${data.creditLimit}
            WHERE id = ${id}
        `;

        revalidatePath("/admin");
        return { success: true };
    } catch (error) {
        return { success: false, error: "Error al actualizar cliente" };
    }
}

export async function toggleCustomerActiveAction(id: string, active: boolean) {
    await ensureAdmin();
    try {
        await prisma.$executeRaw`
            UPDATE customers SET active = ${active} WHERE id = ${id}
        `;
        revalidatePath("/admin");
        return { success: true };
    } catch (error) {
        return { success: false, error: "Error al cambiar estado" };
    }
}
