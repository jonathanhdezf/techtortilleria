const fs = require('fs');
const path = 'c:/Users/ACER/.gemini/antigravity/scratch/techtortilleria/src/app/admin/AdminClient.tsx';
let content = fs.readFileSync(path, 'utf8');
const searchRegExp = /setIsDetailLoading\(true\);\s*const res = await updateOrderStatusAction\(distributorOrderDetailModal\.data\.id, newStatus\);/g;
if (searchRegExp.test(content)) {
    content = content.replace(searchRegExp, "console.log('🔄 ADMIN: Updating order status:', distributorOrderDetailModal.data.id, 'to', newStatus); setIsDetailLoading(true); const res = await updateOrderStatusAction(distributorOrderDetailModal.data.id, newStatus); console.log('✅ ADMIN: Update result:', res);");
    fs.writeFileSync(path, content);
    console.log('Successfully updated AdminClient.tsx');
} else {
    console.log('Target content not found in AdminClient.tsx');
    // Try another pattern
    const search2 = /const res = await updateOrderStatusAction\(distributorOrderDetailModal\.data\.id, newStatus\);/g;
    if (search2.test(content)) {
        content = content.replace(search2, "const res = await updateOrderStatusAction(distributorOrderDetailModal.data.id, newStatus); console.log('✅ Update Status Res:', res);");
        fs.writeFileSync(path, content);
        console.log('Successfully updated AdminClient.tsx with fallback pattern');
    } else {
        console.log('Fallback pattern also not found');
    }
}
