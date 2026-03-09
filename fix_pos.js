const fs = require('fs');
const path = 'c:/Users/ACER/.gemini/antigravity/scratch/techtortilleria/src/app/pos/components/POSClient.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Add Logging to handleSurtirOrder
const surtirRegex = /export async function handleSurtirOrder\(orderId: string\) \{/g;
if (surtirRegex.test(content)) {
    content = content.replace(surtirRegex, "export async function handleSurtirOrder(orderId: string) { console.log('🛒 POS: Surtir Order triggered for:', orderId);");
}

// 2. Add Test Button next to search input
const searchRegex = /placeholder="Buscar productos\.\.\. \(S\)"/g;
if (searchRegex.test(content)) {
    // Find the end of the input's div
    // This is more complex, let's try a simpler place: next to the settings button or similar.
    // Let's use the placeholder as a marker and append a button after its parent div if possible.
}

// Fallback: Just add a global test button at the end of the header
const headerRegex = /<header className="bg-secondary\/40 backdrop-blur-3xl border-b border-white\/5 p-6 sticky top-0 z-50">/g;
if (headerRegex.test(content)) {
    content = content.replace(headerRegex, '<header className="bg-secondary/40 backdrop-blur-3xl border-b border-white/5 p-6 sticky top-0 z-50"> <button onClick={() => { setProcessingOrder({ id: "test-id", distributorName: "PEDIDO DE PRUEBA" }); const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3"); audio.play().catch(e => console.log("Audio blocked", e)); }} className="fixed top-2 right-20 z-[60] bg-primary/20 hover:bg-primary/40 p-2 rounded-full text-[8px] font-black text-primary border border-primary/20">TEST NOTIF</button>');
}

fs.writeFileSync(path, content);
console.log('Successfully updated POSClient.tsx');
