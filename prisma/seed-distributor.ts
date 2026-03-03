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
    console.log("Creando distribuidor de prueba...");

    try {
        const business = await prisma.business.findFirst({ where: { id: "default-business" } });
        if (!business) {
            console.error("No se encontró el negocio 'default-business'.");
            const count = await prisma.business.count();
            console.log(`Negocios totales en DB: ${count}`);
            return;
        }
        console.log(`Negocio encontrado: ${business.id} - ${business.name}`);

        let distributor = await prisma.distributor.findFirst({
            where: { email: "tienda@abarrotes.com" },
        });

        if (!distributor) {
            distributor = await prisma.distributor.create({
                data: {
                    businessId: business.id,
                    name: "Abarrotes El Güero",
                    email: "tienda@abarrotes.com",
                    phone: "555-987-6543",
                    address: "Calle de las Tiendas 45, Col. Centro",
                    contactName: "Señor Güero",
                },
            });
        }

        console.log(`Distribuidor creado: ${distributor.name}`);
    } catch (error: any) {
        console.error("ERROR DETALLADO:");
        console.error(error);
        if (error.code) console.error("Código Prisma:", error.code);
        if (error.meta) console.error("Meta Prisma:", error.meta);
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
