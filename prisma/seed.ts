import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL,
        },
    },
});

async function main() {
    console.log("Comenzando el sembrado de datos (seed)...");

    // 1. Crear el Negocio
    const business = await prisma.business.upsert({
        where: { id: "default-business" },
        update: {},
        create: {
            id: "default-business",
            name: "Tortillería La Tradición",
            email: "contacto@latradicion.com",
            phone: "555-123-4567",
            address: "Av. Principal 123, Ciudad de México",
        },
    });

    console.log(`Negocio creado: ${business.name}`);

    // 2. Crear Usuarios (Admin y Cajero)
    const admin = await prisma.user.upsert({
        where: { email: "admin@techtortilleria.com" },
        update: {},
        create: {
            businessId: business.id,
            name: "Administrador General",
            email: "admin@techtortilleria.com",
            passwordHash: "secret123", // En producción usar bcrypt
            role: "ADMIN",
        },
    });

    const cajero = await prisma.user.upsert({
        where: { email: "cajero2@techtortilleria.com" },
        update: {},
        create: {
            businessId: business.id,
            name: "Juan Cajero Dos",
            email: "cajero2@techtortilleria.com",
            passwordHash: "caja123",
            role: "CAJERO",
        },
    });

    // 2.5 Crear Distribuidor en BD y Usuario 
    const distribuidor = await prisma.distributor.upsert({
        where: { id: "distribuidor-1" },
        update: {},
        create: {
            id: "distribuidor-1",
            businessId: business.id,
            name: "Abarrotes Don Pepe",
            contactName: "Jose Perez",
            email: "distribuidor@techtortilleria.com",
            phone: "555-987-6543",
            creditLimit: 5000.00
        }
    });

    const distribuidorUser = await prisma.user.upsert({
        where: { email: "distribuidor@techtortilleria.com" },
        update: {},
        create: {
            businessId: business.id,
            name: "Jose Perez (Distribuidor)",
            email: "distribuidor@techtortilleria.com",
            passwordHash: "dist123",
            role: "DISTRIBUIDOR",
        },
    });

    console.log("Usuarios creados: Admin, Cajero y Distribuidor");

    // 3. Crear Productos
    const products = [
        {
            name: "Tortilla de Maíz (Kg)",
            description: "Tortilla fresca recién salida del comal",
            pricePublic: 22.0,
            priceDistributor: 18.0,
            unitType: "kg",
            stockQuantity: 500,
            minimumStockAlert: 50,
            category: "tortilla",
        },
        {
            name: "Masa Blanca (Kg)",
            description: "Masa de maíz nixtamalizado",
            pricePublic: 18.0,
            priceDistributor: 15.0,
            unitType: "kg",
            stockQuantity: 200,
            minimumStockAlert: 30,
            category: "maiz",
        },
        {
            name: "Totopos (Bolsa 500g)",
            description: "Totopos crujientes de maíz",
            pricePublic: 35.0,
            priceDistributor: 28.0,
            unitType: "pieza",
            stockQuantity: 100,
            minimumStockAlert: 20,
            category: "derivado",
        },
        {
            name: "Tostadas Caseras (Paquete)",
            description: "Tostadas horneadas de la casa",
            pricePublic: 45.0,
            priceDistributor: 38.0,
            unitType: "pieza",
            stockQuantity: 80,
            minimumStockAlert: 15,
            category: "derivado",
        },
    ];

    for (const p of products) {
        await prisma.product.create({
            data: {
                ...p,
                businessId: business.id,
            },
        });
    }

    console.log(`${products.length} productos cargados.`);
    console.log("Sembrado de datos completado con éxito.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
