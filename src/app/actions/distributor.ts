"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function getDistributorProductsAction() {
    try {
        const products = await prisma.product.findMany({
            where: { active: true },
            orderBy: { name: "asc" },
        });

        return products.map((p: any) => ({
            id: p.id,
            name: p.name,
            price: Number(p.priceDistributor),
            stock: Number(p.stockQuantity),
            category: p.categoryName || '',
            unit: p.unitType,
        }));
    } catch (error) {
        throw new Error("No se pudieron cargar los productos para distribuidores.");
    }
}

export async function createDistributorOrderAction(data: {
    distributorId: string;
    businessId: string;
    items: { productId: string; quantity: number; price: number }[];
    total: number;
}) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("No autorizado");

    const { distributorId, businessId, items, total } = data;

    try {
        const order = await prisma.distributorOrder.create({
            data: {
                distributorId,
                businessId,
                totalAmount: total,
                status: "PENDIENTE",
                orderItems: {
                    create: items.map((item) => ({
                        productId: item.productId,
                        quantity: item.quantity,
                        unitPrice: item.price,
                        subtotal: item.quantity * item.price,
                    })),
                },
            },
        });

        revalidatePath("/admin");
        return { success: true, orderId: order.id };
    } catch (error) {
        console.error("Error creating distributor order:", error);
        return { success: false, error: "Error al procesar el pedido." };
    }
}

export async function getDistributorInfoAction() {
    try {
        const supabase = await createClient();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user?.email) return null;

        const distributor = await prisma.distributor.findFirst({
            where: { email: user.email },
            include: { business: true }
        });

        if (!distributor) return null;

        return {
            id: distributor.id,
            name: distributor.name,
            businessId: distributor.businessId,
        };
    } catch (error) {
        return null;
    }
}

export async function getMyOrdersAction(distributorId: string) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error("No autorizado");

    try {
        const orders = await prisma.distributorOrder.findMany({
            where: { distributorId },
            orderBy: { createdAt: "desc" },
            include: {
                orderItems: {
                    include: {
                        product: true
                    }
                }
            }
        });

        return orders.map((o: any) => ({
            ...o,
            totalAmount: Number(o.totalAmount),
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
        throw new Error("Error al obtener mis pedidos");
    }
}
