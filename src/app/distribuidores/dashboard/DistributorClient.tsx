"use client";

import { useState, useEffect, useMemo } from "react";
import { Truck, Package, Clock, FileText, ChevronRight, LogOut, ShoppingCart, CheckCircle, Plus, Minus, Loader2 } from "lucide-react";
import { formatCurrency, cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getDistributorProductsAction, createDistributorOrderAction, getDistributorInfoAction, getMyOrdersAction } from "@/app/actions/distributor";
import { logoutAction } from "@/app/actions/auth";
import { supabase } from "@/lib/supabase";
import Logo from "@/components/shared/Logo";

interface UIProduct {
    id: string;
    name: string;
    category: string | null;
    price: number;
    stock: number;
    unit: string;
}

interface CartItem {
    productId: string;
    name: string;
    quantity: number;
    price: number;
}

export default function DistributorClient() {
    const router = useRouter();
    const [products, setProducts] = useState<UIProduct[]>([]);
    const [distributor, setDistributor] = useState<{ id: string; name: string; businessId: string } | null>(null);
    const [orders, setOrders] = useState<any[]>([]);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [isProcessing, setIsProcessing] = useState(false);
    const [activeTab, setActiveTab] = useState("ordenar");
    const [success, setSuccess] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const loadData = async () => {
        try {
            const [pData, dData] = await Promise.all([
                getDistributorProductsAction(),
                getDistributorInfoAction()
            ]);
            setProducts(pData as any);
            setDistributor(dData);

            if (dData) {
                const oData = await getMyOrdersAction(dData.id);
                setOrders(oData);
            }
        } catch (error) {
            console.error("Error al cargar datos");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();

        const channel = supabase
            .channel('distributor-updates')
            .on(
                'postgres_changes',
                { event: '*', schema: 'public', table: 'distributor_orders' },
                () => {
                    loadData();
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    const addToCart = (product: UIProduct) => {
        setCart(prev => {
            const existing = prev.find(i => i.productId === product.id);
            if (existing) {
                return prev.map(i => i.productId === product.id ? { ...i, quantity: i.quantity + 1 } : i);
            }
            return [...prev, { productId: product.id, name: product.name, quantity: 1, price: product.price }];
        });
    };

    const updateQty = (id: string, delta: number) => {
        setCart(prev => prev.map(i => i.productId === id ? { ...i, quantity: Math.max(0, i.quantity + delta) } : i).filter(i => i.quantity > 0));
    };

    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    const handleOrder = async () => {
        if (!distributor || cart.length === 0) return;

        try {
            setIsProcessing(true);
            const result = await createDistributorOrderAction({
                distributorId: distributor.id,
                businessId: distributor.businessId,
                items: cart,
                total: subtotal
            });

            if (result.success) {
                setSuccess(true);
                setCart([]);
            } else {
                alert("Error: " + result.error);
            }
        } catch (error) {
            alert("Error al procesar el pedido");
        } finally {
            setIsProcessing(false);
        }
    };

    const handleLogout = async () => {
        try {
            await supabase.auth.signOut();
            await logoutAction();
        } catch (error) {
            console.error("Error signing out:", error);
            window.location.href = "/";
        }
    };

    if (loading) {
        return (
            <div className="h-screen w-full flex flex-col items-center justify-center bg-surface noise">
                <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
                <p className="text-secondary font-bold tracking-widest uppercase text-xs">Cargando Portal...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-surface flex noise">
            {/* Sidebar Overlay (Mobile) */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-secondary/60 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={cn(
                "fixed lg:relative inset-y-0 left-0 z-50 w-72 bg-secondary text-surface p-8 flex flex-col border-r border-white/5 transition-transform duration-300 lg:translate-x-0 overflow-y-auto",
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="mb-12">
                    <Logo className="h-10 w-auto" />
                </div>

                <nav className="flex-1 space-y-2">
                    <SideLink icon={<ShoppingCart />} label="Hacer Pedido" active={activeTab === "ordenar"} onClick={() => setActiveTab("ordenar")} />
                    <SideLink icon={<Clock />} label="Seguimiento" active={activeTab === "status"} onClick={() => setActiveTab("status")} />
                    <SideLink icon={<FileText />} label="Facturación" active={activeTab === "facturas"} onClick={() => setActiveTab("facturas")} />
                </nav>

                <div className="mt-auto pt-8 border-t border-white/10">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 text-surface/50 hover:text-white transition-colors font-bold group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                            <LogOut className="w-5 h-5 group-hover:text-red-500 transition-colors" />
                        </div>
                        <span className="hidden lg:block">Cerrar Sesión</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-12 overflow-y-auto">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="lg:hidden p-2 -ml-2 text-secondary hover:bg-secondary/5 rounded-xl transition-colors"
                            title="Abrir menú"
                        >
                            <ShoppingCart className="w-6 h-6" />
                        </button>
                        <div>
                            <span className="text-secondary/40 font-bold uppercase tracking-widest text-[10px] md:text-xs">Bienvenido, {distributor?.name || "Distribuidor"}</span>
                            <h1 className="text-3xl md:text-4xl font-black text-secondary">Dashboard Comercial</h1>
                        </div>
                    </div>
                    <div className="bg-primary/20 px-4 py-2 rounded-full flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        <span className="text-xs font-black text-accent">RUTA ACTIVA: SUR-01</span>
                    </div>
                </header>

                {activeTab === "ordenar" && (
                    success ? (
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="h-[60vh] flex flex-col items-center justify-center text-center">
                            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mb-6 shadow-2xl">
                                <CheckCircle className="w-12 h-12 text-secondary" />
                            </div>
                            <h2 className="text-3xl font-black text-secondary mb-4">¡Pedido Recibido!</h2>
                            <p className="text-secondary/50 max-w-sm mb-10">Tu solicitud está en proceso. Podrás ver el estatus en tiempo real en la pestaña de Seguimiento.</p>
                            <button onClick={() => setSuccess(false)} className="px-8 py-4 bg-secondary text-surface rounded-xl font-bold">Hacer otro pedido</button>
                        </motion.div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Products Column */}
                            <div className="lg:col-span-2 space-y-8">
                                <h2 className="text-xl font-bold text-secondary flex items-center gap-2">
                                    <Package className="w-5 h-5 text-accent" /> Productos Disponibles (Mayoreo)
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {products.map((product) => (
                                        <div key={product.id} className="bg-white p-6 rounded-2xl border border-secondary/5 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex justify-between mb-4">
                                                <span className="text-[10px] bg-surface px-2 py-1 rounded-full font-bold text-secondary/40 uppercase tracking-tighter">{product.category}</span>
                                                <span className="text-xs font-bold text-accent">Disp: {product.stock} {product.unit}</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-secondary mb-4">{product.name}</h3>
                                            <div className="flex justify-between items-center">
                                                <span className="text-xl font-black">{formatCurrency(product.price)}</span>
                                                <button
                                                    onClick={() => addToCart(product)}
                                                    className="px-4 py-2 bg-primary/10 text-secondary rounded-lg font-bold text-xs hover:bg-primary transition-colors"
                                                >
                                                    AGREGAR
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Cart/Summary Column */}
                            <div className="bg-white rounded-3xl p-8 border border-secondary/5 shadow-xl h-fit sticky top-12">
                                <h2 className="text-xl font-bold text-secondary mb-8 border-b border-secondary/5 pb-4">Resumen de Carga</h2>
                                <div className="space-y-4 mb-12">
                                    {cart.map(item => (
                                        <div key={item.productId} className="flex justify-between items-center group">
                                            <div className="flex-1">
                                                <span className="text-secondary/50 font-medium block text-sm">{item.name}</span>
                                                <span className="font-bold text-xs">{formatCurrency(item.price)} c/u</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <button title="Reducir" onClick={() => updateQty(item.productId, -1)} className="p-1 hover:bg-surface rounded"><Minus className="w-3 h-3" /></button>
                                                <span className="font-black text-sm w-6 text-center">{item.quantity}</span>
                                                <button title="Aumentar" onClick={() => updateQty(item.productId, 1)} className="p-1 hover:bg-surface rounded"><Plus className="w-3 h-3" /></button>
                                            </div>
                                        </div>
                                    ))}
                                    {cart.length === 0 && <p className="text-secondary/20 text-center py-4">Tu carrito está vacío</p>}
                                </div>

                                <div className="space-y-4 pt-6 border-t border-secondary/5 mb-8">
                                    <div className="flex justify-between">
                                        <span className="text-secondary/40">Subtotal</span>
                                        <span className="font-bold">{formatCurrency(subtotal)}</span>
                                    </div>
                                    <div className="flex justify-between text-2xl pt-4">
                                        <span className="font-black">TOTAL</span>
                                        <span className="font-black text-secondary">{formatCurrency(subtotal)}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={handleOrder}
                                    disabled={cart.length === 0 || isProcessing}
                                    className="w-full py-4 bg-secondary text-surface rounded-xl font-black shadow-lg hover:shadow-secondary/20 transition-all hover:-translate-y-1 disabled:opacity-50 disabled:grayscale"
                                >
                                    {isProcessing ? <Loader2 className="w-6 h-6 animate-spin mx-auto" /> : "SOLICITAR PEDIDO"}
                                </button>
                            </div>
                        </div>
                    )
                )}

                {activeTab === "status" && (
                    <div className="space-y-8">
                        <h2 className="text-2xl font-black text-secondary">Estado de tus Pedidos</h2>
                        <div className="grid grid-cols-1 gap-6">
                            {orders.map((order) => (
                                <div key={order.id} className="bg-white p-8 rounded-3xl border border-secondary/5 shadow-xl flex flex-col md:flex-row justify-between items-center gap-6">
                                    <div className="flex items-center gap-6">
                                        <div className={cn(
                                            "w-16 h-16 rounded-2xl flex items-center justify-center",
                                            order.status === "PENDIENTE" ? "bg-amber-100 text-amber-600" :
                                                order.status === "PROCESANDO" ? "bg-blue-100 text-blue-600" :
                                                    "bg-green-100 text-green-600"
                                        )}>
                                            <Clock className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-secondary/30 uppercase tracking-widest mb-1">Pedido #{order.id.slice(0, 8)}</div>
                                            <h4 className="text-xl font-black text-secondary">{formatCurrency(order.totalAmount)}</h4>
                                            <p className="text-sm text-secondary/50 font-bold">{order.orderItems.length} productos • {new Date(order.createdAt).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <span className={cn(
                                            "px-4 py-2 rounded-full font-black text-xs uppercase",
                                            order.status === "PENDIENTE" ? "bg-amber-100 text-amber-700" :
                                                order.status === "PROCESANDO" ? "bg-blue-100 text-blue-700" :
                                                    order.status === "ENTREGADO" ? "bg-green-100 text-green-700" :
                                                        "bg-gray-100 text-gray-700"
                                        )}>
                                            {order.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                            {orders.length === 0 && (
                                <div className="text-center py-20 border-2 border-dashed border-secondary/10 rounded-3xl">
                                    <p className="text-secondary/20 font-black uppercase tracking-widest text-sm">No has realizado pedidos aún</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {activeTab === "facturas" && (
                    <div className="space-y-8">
                        <h2 className="text-2xl font-black text-secondary">Comprobantes y Facturación</h2>
                        <div className="bg-white rounded-3xl border border-secondary/5 shadow-xl overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-surface">
                                    <tr>
                                        <th className="p-6 font-bold text-secondary/40 uppercase text-xs tracking-widest">Nº Factura</th>
                                        <th className="p-6 font-bold text-secondary/40 uppercase text-xs tracking-widest">Fecha</th>
                                        <th className="p-6 font-bold text-secondary/40 uppercase text-xs tracking-widest">Monto</th>
                                        <th className="p-6 font-bold text-secondary/40 uppercase text-xs tracking-widest">Estado</th>
                                        <th className="p-6 font-bold text-secondary/40 uppercase text-xs tracking-widest text-right">Acción</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-secondary/5">
                                    {orders.filter(o => o.status === "ENTREGADO").map((order) => (
                                        <tr key={order.id} className="hover:bg-surface/50 transition-colors">
                                            <td className="p-6 font-mono text-xs text-secondary/40 italic">FAC-{order.id.slice(-6).toUpperCase()}</td>
                                            <td className="p-6 text-sm font-bold text-secondary">{new Date(order.createdAt).toLocaleDateString()}</td>
                                            <td className="p-6 font-black text-secondary">{formatCurrency(order.totalAmount)}</td>
                                            <td className="p-6">
                                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-black uppercase">Pagada</span>
                                            </td>
                                            <td className="p-6 text-right">
                                                <button className="text-accent font-bold text-xs hover:underline">Descargar PDF</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {orders.filter(o => o.status === "ENTREGADO").length === 0 && (
                                <div className="text-center py-20">
                                    <FileText className="w-12 h-12 text-secondary/10 mx-auto mb-4" />
                                    <p className="text-secondary/20 font-black uppercase tracking-widest text-sm">No hay facturas disponibles</p>
                                    <p className="text-secondary/10 text-xs mt-2 italic px-20">Las facturas se generan automáticamente una vez que el pedido es marcado como ENTREGADO.</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

function SideLink({ icon, label, active = false, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick: () => void }) {
    return (
        <button
            onClick={() => {
                onClick();
            }}
            className={cn(
                "w-full flex items-center justify-between p-4 rounded-xl transition-all font-bold text-left",
                active ? "bg-primary text-secondary" : "hover:bg-white/5 text-surface/50 hover:text-surface"
            )}
        >
            <div className="flex items-center gap-4">
                {icon}
                <span>{label}</span>
            </div>
            <ChevronRight className={cn("w-4 h-4 transition-transform", active ? "rotate-90" : "")} />
        </button>
    );
}
