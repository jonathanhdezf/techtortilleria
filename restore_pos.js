const fs = require('fs');
const path = 'c:/Users/ACER/.gemini/antigravity/scratch/techtortilleria/src/app/pos/components/POSClient.tsx';
let content = fs.readFileSync(path, 'utf8');

// The file is currently a mess. Let's rebuild it by finding key markers.

// Part 1: Everything up to line 350
const part1Marker = 'const fetchHistory = async () => {\n        setFetchingHistory(true)\n        const history = await getSalesHistoryAction(businessId)\n        setSalesHistory(history)\n        setFetchingHistory(false)\n    }';
const part1EndIndex = content.indexOf(part1Marker) + part1Marker.length;
const part1 = content.slice(0, part1EndIndex);

// Part 2: Everything from 'const finishSale' backwards
const part2Marker = 'const finishSale = (printTicket: boolean) => {';
const part2StartIndex = content.indexOf(part2Marker);
const part2 = content.slice(part2StartIndex);

// Part 3: The clean middle section we want
const middle = `

    useEffect(() => {
        if (view === 'history') {
            fetchHistory()
        }
    }, [view])

    // Real-time listener for distributor orders
    useEffect(() => {
        const playBell = () => {
            const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3");
            audio.play().catch(e => console.log("Audio play blocked", e));
        };

        const channel = supabase
            .channel('pos-distributor-notifications')
            .on(
                'postgres_changes',
                { event: '*', schema: 'public', table: 'distributor_orders' },
                (payload) => {
                    console.log('🔔 REALTIME: Received event on distributor_orders:', payload);
                    const { eventType, new: newOrder } = payload;

                    if (eventType === 'UPDATE' && newOrder && newOrder.status === 'EN_PROCESO') {
                        console.log('🚀 REALTIME: Status is EN_PROCESO, showing notification');
                        setProcessingOrder({
                            id: newOrder.id,
                            distributorName: \`Pedido #\${newOrder.id.slice(-6).toUpperCase()}\`
                        });
                        playBell();
                    }
                }
            )
            .subscribe((status) => {
                console.log('📡 REALTIME: Subscription status:', status);
            });

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    const handleSurtirOrder = async (orderId: string) => {
        console.log('🛒 POS: Iniciando surtido de pedido:', orderId);
        setIsSurtirLoading(true);
        try {
            const orderDetail = await getDistributorOrderAction(orderId);
            console.log('📦 POS: Detalle del pedido recibido:', orderDetail);

            if (!orderDetail || orderDetail.error) {
                const msg = orderDetail?.error || 'No se encontró el pedido en la base de datos.';
                alert('⚠️ Error: ' + msg);
                console.error('❌ POS: Error al surtir:', msg);
                return;
            }

            console.log('➕ POS: Agregando ' + orderDetail.orderItems.length + ' productos al carrito');
            
            // Add all items from the distributor order to the cart
            orderDetail.orderItems.forEach((item: any) => {
                const cartProduct = {
                    id: item.product.id,
                    name: item.product.name,
                    pricePublic: Number(item.product.pricePublic),
                    unitType: item.product.unitType
                } as any;

                addItem(cartProduct);
                if (item.quantity !== 1) {
                    updateQuantity(item.product.id, item.quantity);
                }
            });

            setProcessingOrder(null);
            setIsCartOpen(true);
            alert('✅ Pedido cargado correctamente al carrito.');

        } catch (error) {
            console.error("❌ POS: Error fatal en handleSurtirOrder:", error);
            alert('🚨 Error inesperado: ' + error.message);
        } finally {
            setIsSurtirLoading(false);
        }
    };

    `;

const finalContent = part1 + middle + part2;
fs.writeFileSync(path, finalContent);
console.log('POSClient.tsx successfully reconstructed and cleaned.');
