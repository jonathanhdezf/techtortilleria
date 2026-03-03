export type Role = "ADMIN" | "CAJERO" | "DISTRIBUIDOR";

export interface User {
    id: string;
    name: string;
    role: Role;
    email: string;
}

export interface Product {
    id: string;
    name: string;
    unit: "kg" | "unidad" | "paquete";
    price: number;
    stock: number;
    category: "tortilla" | "maiz" | "derivado" | "otro";
    image?: string;
}

export interface OrderItem {
    productId: string;
    name: string;
    quantity: number;
    priceAtTime: number;
}

export interface Order {
    id: string;
    customerId?: string;
    distributorId?: string;
    items: OrderItem[];
    total: number;
    status: "PENDING" | "PREPARING" | "SHIPPING" | "DELIVERED" | "COMPLETED";
    type: "COUNTER" | "DISTRIBUTION";
    createdAt: string;
}

export interface InventoryMovement {
    id: string;
    productId: string;
    type: "IN" | "OUT";
    quantity: number;
    reason: string;
    createdAt: string;
}
