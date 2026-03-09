const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
    const order = await prisma.distributorOrder.findFirst();
    if (order) {
        console.log('REAL_ID:' + order.id);
    } else {
        console.log('NO_ORDERS_FOUND');
    }
    await prisma.$disconnect();
}
main();
