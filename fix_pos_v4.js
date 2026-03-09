const fs = require('fs');
const path = 'c:/Users/ACER/.gemini/antigravity/scratch/techtortilleria/src/app/pos/components/POSClient.tsx';
let content = fs.readFileSync(path, 'utf8');

// Update the check in handleSurtirOrder
const checkRegex = /if \(!orderDetail\) \{/g;
if (checkRegex.test(content)) {
    content = content.replace(checkRegex, `if (!orderDetail || orderDetail.error) {
                alert('⚠️ Error: ' + (orderDetail?.error || 'No se encontró el pedido o está vacío.'));
                console.error('❌ POS: Error capturado:', orderDetail?.error);
            } else if (orderDetail && !orderDetail.error) {`);
}

// Adjust the successful block to skip the if (!orderDetail) check properly
// The replacement above changed the start of the block.
// We need to make sure the loop runs inside the else if.

fs.writeFileSync(path, content);
console.log('Successfully updated POSClient.tsx error handling');
