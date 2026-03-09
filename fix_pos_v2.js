const fs = require('fs');
const path = 'c:/Users/ACER/.gemini/antigravity/scratch/techtortilleria/src/app/pos/components/POSClient.tsx';
let content = fs.readFileSync(path, 'utf8');

// Target the nav bar
const navRegex = /<nav className="relative z-\[60\] flex items-center justify-between px-8 py-4 bg-secondary\/40 backdrop-blur-2xl border-b border-white\/5 shrink-0">/g;

if (navRegex.test(content)) {
    content = content.replace(navRegex, '<nav className="relative z-[60] flex items-center justify-between px-8 py-4 bg-secondary/40 backdrop-blur-2xl border-b border-white/5 shrink-0"> <button onClick={() => { console.log("🧪 TEST: Notificación activada manualmente"); setProcessingOrder({ id: "test-id", distributorName: "PEDIDO DE PRUEBA" }); const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3"); audio.play().catch(e => console.log("Audio blocked", e)); }} className="bg-primary/20 hover:bg-primary/40 px-3 py-1.5 rounded-full text-[10px] font-black text-primary border border-primary/20 transition-all active:scale-95">TEST NOTIF</button>');
    fs.writeFileSync(path, content);
    console.log('Successfully updated POSClient.tsx with nav button');
} else {
    console.log('Nav tag not found, trying logo replacement');
    const logoRegex = /<Logo className="h-10 md:h-12 w-auto" variant="premium" \/>/g;
    if (logoRegex.test(content)) {
        content = content.replace(logoRegex, '<Logo className="h-10 md:h-12 w-auto" variant="premium" /> <button onClick={() => { console.log("🧪 TEST: Notificación activada manualmente"); setProcessingOrder({ id: "test-id", distributorName: "PEDIDO DE PRUEBA" }); const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3"); audio.play().catch(e => console.log("Audio blocked", e)); }} className="bg-primary/20 hover:bg-primary/40 px-3 py-1.5 rounded-full text-[10px] font-black text-primary border border-primary/20 ml-4 transition-all active:scale-95">TEST NOTIF</button>');
        fs.writeFileSync(path, content);
        console.log('Successfully updated POSClient.tsx via logo replacement');
    } else {
        console.log('Could not find any injection point');
    }
}
