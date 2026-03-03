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

        return {
            totalRevenue: todayAmount,
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
            openedAt: r.openedAt,
            closedAt: r.closedAt,
        }));
    } catch (error) {
        throw new Error("Error al obtener cortes de caja");
    }
}

export async function getSalesAction() {
    await ensureAdmin();
    try {
        const sales = await prisma.sale.findMany({
            include: {
                saleItems: {
                    include: {
                        product: true
                    }
                },
                user: true
            },
            orderBy: { createdAt: "desc" },
            take: 50 // Limit to latest 50 for performance
        });

        return sales.map((s: any) => ({
            ...s,
            totalAmount: Number(s.totalAmount),
            saleItems: s.saleItems.map((si: any) => ({
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
        }));
    } catch (error) {
        throw new Error("Error al obtener historial de ventas");
    }
}
