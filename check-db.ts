import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    try {
        const users = await prisma.user.findMany({
            select: {
                email: true,
                role: true,
                active: true
            }
        });
        console.log("USERS_IN_DB:", JSON.stringify(users, null, 2));

        const business = await prisma.business.findFirst();
        console.log("BUSINESS_FOUND:", !!business);
    } catch (err) {
        console.error("PRISMA_ERROR:", err);
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
