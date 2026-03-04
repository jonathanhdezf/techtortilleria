import { PrismaClient } from "../generated/client_v2";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// export const prisma =
//     globalForPrisma.prisma ||
//     new PrismaClient({
//         log: ["query"],
//     });

export const prisma = new PrismaClient({
    log: ["query"],
});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
