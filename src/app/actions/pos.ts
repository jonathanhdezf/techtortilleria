"use server";

import { prisma } from "@/lib/prisma";
import { OrderItem } from "@/types";
import { revalidatePath } from "next/cache";

export async function getProductsAction() {
    try {
        const products = await prisma.product.findMany({
            where: { active: true },
            orderBy: { name: "asc" },
        });

        // Convert Decimal to number for the client
        return products.map((p: any) => ({
            ...p,
            pricePublic: Number(p.pricePublic),
            priceDistributor: Number(p.priceDistributor),
            stockQuantity: Number(p.stockQuantity),
            minimumStockAlert: Number(p.minimumStockAlert),
        }));
    } catch (error) {
        console.error("Error fetching products:", error);
        throw new Error("No se pudieron cargar los productos.");
    }
}

export async function createSaleAction(data: {
    businessId: string;
    userId: string;
    items: OrderItem[];
    total: number;
    paymentMethod: string;
}) {
    const { businessId, userId, items, total, paymentMethod } = data;

    try {
        const result = await prisma.$transaction(async (tx: any) => {
            // 1. Crear la Venta
            const sale = await tx.sale.create({
                data: {
                    businessId,
                    userId,
                    totalAmount: total,
                    paymentMethod,
                    saleItems: {
                        create: items.map((item) => ({
                            productId: item.productId,
                            quantity: item.quantity,
                            unitPrice: item.priceAtTime,
                            subtotal: item.quantity * item.priceAtTime,
                        })),
                    },
                },
            });

            // 2. Actualizar Inventario para cada producto
            for (const item of items) {
                // Decrementar stock
                await tx.product.update({
                    where: { id: item.productId },
                    data: {
                        stockQuantity: {
                            decrement: item.quantity,
                        },
                    },
                });

                // Registrar movimiento de inventario
                await tx.inventoryMovement.create({
                    data: {
                        businessId,
                        productId: item.productId,
                        movementType: "venta",
                        quantity: item.quantity,
                        referenceId: sale.id,
                    },
                });
            }

            return sale;
        });

        revalidatePath("/admin");
        return { success: true, saleId: result.id };
    } catch (error) {
        console.error("Error creating sale:", error);
        return { success: false, error: "Error al procesar la venta." };
    }
}

export async function getPOSInitialData() {
    try {
        const business = await prisma.business.findFirst();
        const user = await prisma.user.findFirst({ where: { role: "ADMIN" } });

        return {
            businessId: business?.id || "default-business",
            userId: user?.id || "default-user",
        };
    } catch (error) {
        return { businessId: "default-business", userId: "default-user" };
    }
}
