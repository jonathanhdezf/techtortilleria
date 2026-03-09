const fs = require('fs');
const path = 'c:/Users/ACER/.gemini/antigravity/scratch/techtortilleria/src/app/pos/components/POSClient.tsx';
let content = fs.readFileSync(path, 'utf8');

const realId = '2047281b-d3ee-4449-8bb9-8ae7f09da15e';

// 1. Update Test Button with real ID and logs
const testButtonRegex = /setProcessingOrder\(\{ id: "test-id", distributorName: "PEDIDO DE PRUEBA" \}\)/g;
if (testButtonRegex.test(content)) {
    content = content.replace(testButtonRegex, `setProcessingOrder({ id: "${realId}", distributorName: "PEDIDO DE PRUEBA (REAL)" })`);
}

// 2. Fix handleSurtirOrder logging and add alerts
const handleSurtirRegex = /const handleSurtirOrder = async \(orderId: string\) => \{/g;
if (handleSurtirRegex.test(content)) {
    content = content.replace(handleSurtirRegex, `const handleSurtirOrder = async (orderId: string) => {
        console.log('🛒 POS: Iniciando surtido de pedido:', orderId);
        setIsSurtirLoading(true);`);
}

// 3. Add alert and detailed logs inside try block
const orderDetailRegex = /const orderDetail = await getDistributorOrderAction\(orderId\);/g;
if (orderDetailRegex.test(content)) {
    content = content.replace(orderDetailRegex, `const orderDetail = await getDistributorOrderAction(orderId);
            console.log('📦 POS: Detalle del pedido recibido:', orderDetail);
            if (!orderDetail) {
                alert('⚠️ No se encontró el pedido o no tiene artículos.');
                console.error('❌ POS: Pedido no encontrado o nulo');
            } else {
                console.log('➕ POS: Agregando ' + orderDetail.orderItems.length + ' productos al carrito');
            }`);
}

fs.writeFileSync(path, content);
console.log('Successfully updated POSClient.tsx with real ID and robust logs');
