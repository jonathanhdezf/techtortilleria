"use client";

import React, { useState, useEffect } from "react";
import { Truck, Package, Clock, FileText, ChevronRight, LogOut, ShoppingCart, CheckCircle, Plus, Minus, Loader2, Menu as MenuIcon, X, ShieldCheck } from "lucide-react";
import { formatCurrency, cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { getDistributorProductsAction, createDistributorOrderAction, getDistributorInfoAction, getMyOrdersAction } from "@/app/actions/distributor";
import { logoutAction } from "@/app/actions/auth";
import { supabase } from "@/lib/supabase";
import Logo from "@/components/shared/Logo";
import { useModalAccessibility } from "@/hooks/useModalAccessibility";

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
    const [products, setProducts] = useState<UIProduct[]>([]);
    const [distributor, setDistributor] = useState<{ id: string; name: string; businessId: string } | null>(null);
    const [orders, setOrders] = useState<any[]>([]);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [isProcessing, setIsProcessing] = useState(false);
    const [activeTab, setActiveTab] = useState("ordenar");
    const [success, setSuccess] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useModalAccessibility(isMobileMenuOpen, () => setIsMobileMenuOpen(false));

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
            <div className="h-screen w-full flex flex-col items-center justify-center bg-neutral-black noise">
                <div className="absolute top-0 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
                <Loader2 className="w-12 h-12 text-primary animate-spin mb-6" />
                <p className="text-primary font-black tracking-[0.3em] uppercase text-[10px] animate-pulse">Sincronizando Nodo Logístico...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neutral-black flex noise relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 -left-20 w-[30rem] h-[30rem] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 -right-20 w-[40rem] h-[40rem] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

            {/* Sidebar Overlay (Mobile) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-secondary/80 backdrop-blur-xl z-[60] lg:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <aside className={cn(
                "fixed lg:relative inset-y-0 left-0 z-[70] w-80 bg-secondary/40 backdrop-blur-3xl p-10 flex flex-col border-r border-white/10 transition-transform duration-500 ease-out lg:translate-x-0 overflow-y-auto shadow-2xl",
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="mb-16 flex justify-between items-center px-2">
                    <Logo className="w-full h-auto text-white" />
                    <button onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden p-3 bg-white/5 rounded-2xl text-surface/30 ml-4" title="Cerrar menú" aria-label="Cerrar menú">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <nav className="flex-1 space-y-4">
                    <SideLink icon={<ShoppingCart />} label="Hacer Pedido" active={activeTab === "ordenar"} onClick={() => { setActiveTab("ordenar"); setIsMobileMenuOpen(false); }} />
                    <SideLink icon={<Clock />} label="Seguimiento" active={activeTab === "status"} onClick={() => { setActiveTab("status"); setIsMobileMenuOpen(false); }} />
                    <SideLink icon={<FileText />} label="Facturación" active={activeTab === "facturas"} onClick={() => { setActiveTab("facturas"); setIsMobileMenuOpen(false); }} />
                </nav>

                <div className="mt-auto pt-10 border-t border-white/5">
                    <div className="bg-white/5 p-6 rounded-[2rem] mb-8 border border-white/5">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-secondary shadow-lg shadow-primary/20">
                                <Truck className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-primary uppercase tracking-widest">Socio Estratégico</p>
                                <p className="text-sm font-black text-white truncate max-w-[120px] italic">{distributor?.name}</p>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-4 p-5 rounded-2xl hover:bg-red-500/10 text-surface/40 hover:text-red-500 transition-all font-black group"
                    >
                        <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="uppercase text-[10px] tracking-widest">Cerrar Sesión Segura</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 md:p-12 lg:p-16 overflow-y-auto relative z-10 w-full">
                <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-16">
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="lg:hidden p-5 bg-secondary/50 backdrop-blur-xl border border-white/10 rounded-[1.5rem] text-primary hover:scale-105 active:scale-95 transition-all shadow-xl"
                            title="Abrir menú de navegación"
                        >
                            <MenuIcon className="w-6 h-6" />
                        </button>
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em]">Nodo de Suministro #S-001</span>
                                <span className="w-1 h-1 bg-white/20 rounded-full" />
                                <span className="text-surface/30 font-bold text-[10px] uppercase tracking-widest">{distributor?.businessId}</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-none">Dashboard Comercial</h1>
                        </div>
                    </div>
                    <div className="bg-secondary/40 backdrop-blur-xl border border-white/5 px-8 py-5 rounded-[2.5rem] flex items-center gap-6 shadow-2xl">
                        <div className="flex flex-col items-end border-r border-white/5 pr-6">
                            <span className="text-[10px] font-black text-surface/20 uppercase tracking-widest mb-1">Ruta Preferencial</span>
                            <span className="text-primary font-black text-lg italic tracking-tighter">METRO-NORTE 01</span>
                        </div>
                        <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center">
                            <Package className="w-6 h-6 text-primary" />
                        </div>
                    </div>
                </header>

                <AnimatePresence mode="wait">
                    {activeTab === "ordenar" && (
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} key="ordenar">
                            {success ? (
                                <div className="h-[60vh] flex flex-col items-center justify-center text-center">
                                    <div className="relative mb-10">
                                        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />
                                        <div className="relative w-32 h-32 bg-primary rounded-[3rem] flex items-center justify-center shadow-2xl rotate-12">
                                            <CheckCircle className="w-16 h-16 text-secondary" />
                                        </div>
                                    </div>
                                    <h2 className="text-5xl font-black text-white italic uppercase tracking-tighter mb-4">¡Manifiesto de Carga Recibido!</h2>
                                    <p className="text-surface/40 max-w-sm mb-12 font-bold uppercase text-xs tracking-widest">Tu solicitud ha sido inyectada en el flujo logístico.</p>
                                    <button
                                        onClick={() => setSuccess(false)}
                                        className="px-12 py-5 bg-white text-secondary rounded-2xl font-black uppercase text-sm shadow-2xl shadow-white/10 hover:scale-105 active:scale-95 transition-all"
                                    >
                                        NUEVO ABASTECIMIENTO
                                    </button>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 xl:grid-cols-3 gap-16">
                                    {/* Products Column */}
                                    <div className="xl:col-span-2 space-y-10">
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter">Productos de Mayoreo</h2>
                                                <p className="text-surface/30 font-bold text-[10px] uppercase tracking-[0.2em] mt-2">Catálogo exclusivo para socios comerciales</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {products.map((product) => (
                                                <div key={product.id} className="bg-secondary/20 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/5 shadow-2xl group hover:border-primary/20 transition-all hover:bg-secondary/40">
                                                    <div className="flex justify-between items-start mb-6">
                                                        <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                                            <Package className="w-6 h-6" />
                                                        </div>
                                                        <span className={cn(
                                                            "text-[9px] px-4 py-2 rounded-full font-black uppercase tracking-widest",
                                                            product.stock > 100 ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"
                                                        )}>
                                                            Disp: {product.stock} {product.unit}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-2xl font-black text-white italic mb-2 uppercase tracking-tight">{product.name}</h3>
                                                    <p className="text-[10px] font-bold text-surface/20 uppercase tracking-[0.2em] mb-8">{product.category || "Categoría General"}</p>

                                                    <div className="flex justify-between items-center pt-6 border-t border-white/5">
                                                        <div className="flex flex-col">
                                                            <span className="text-[9px] font-black text-surface/20 uppercase tracking-widest leading-none mb-1">Precio Socio</span>
                                                            <span className="text-3xl font-black text-primary tracking-tighter tabular-nums">{formatCurrency(product.price)}</span>
                                                        </div>
                                                        <button
                                                            onClick={() => addToCart(product)}
                                                            className="p-5 bg-white text-secondary rounded-[1.5rem] font-black text-xs hover:bg-primary transition-all shadow-xl hover:scale-105 active:scale-95"
                                                            title="Agregar producto al pedido"
                                                            aria-label={`Agregar ${product.name} al pedido`}
                                                        >
                                                            <Plus className="w-5 h-5" />
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Cart/Summary Column */}
                                    <div className="relative">
                                        <div className="bg-secondary/40 backdrop-blur-3xl rounded-[3rem] p-10 border border-white/10 shadow-2xl h-fit sticky top-12 overflow-hidden">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[100px] rounded-full -mr-16 -mt-16 pointer-events-none" />

                                            <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-10 pb-6 border-b border-white/5">Manifiesto de Pedido</h2>

                                            <div className="space-y-6 mb-12 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-white">
                                                {cart.map(item => (
                                                    <div key={item.productId} className="flex justify-between items-center bg-white/5 p-5 rounded-2xl border border-white/5">
                                                        <div className="flex-1">
                                                            <span className="text-white font-black block text-sm italic uppercase tracking-tight">{item.name}</span>
                                                            <span className="font-bold text-[10px] text-surface/40 uppercase tracking-widest">{formatCurrency(item.price)} C/U</span>
                                                        </div>
                                                        <div className="flex items-center gap-4 bg-secondary/80 px-3 py-2 rounded-xl">
                                                            <button title="Reducir" onClick={() => updateQty(item.productId, -1)} className="p-1 hover:text-red-400 transition-colors"><Minus className="w-4 h-4" /></button>
                                                            <span className="font-mono font-black text-lg text-primary w-8 text-center tabular-nums">{item.quantity}</span>
                                                            <button title="Aumentar" onClick={() => updateQty(item.productId, 1)} className="p-1 hover:text-emerald-400 transition-colors"><Plus className="w-4 h-4" /></button>
                                                        </div>
                                                    </div>
                                                ))}
                                                {cart.length === 0 && (
                                                    <div className="py-20 text-center space-y-4">
                                                        <ShoppingCart className="w-12 h-12 text-surface/10 mx-auto" />
                                                        <p className="text-surface/20 font-black uppercase tracking-widest text-[9px]">Carga vacía. Selecciona productos para iniciar.</p>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="space-y-4 pt-10 border-t border-white/10 mb-10">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-[10px] font-black text-surface/30 uppercase tracking-widest">Base Imponible</span>
                                                    <span className="font-black text-white tabular-nums">{formatCurrency(subtotal)}</span>
                                                </div>
                                                <div className="flex justify-between items-end pt-4 bg-primary/5 p-6 rounded-3xl border border-primary/10">
                                                    <span className="font-black text-xs text-secondary/40 uppercase tracking-widest mb-1">TOTAL TRANSACCIÓN</span>
                                                    <span className="text-4xl font-black text-primary tracking-tighter tabular-nums">{formatCurrency(subtotal)}</span>
                                                </div>
                                            </div>

                                            <button
                                                onClick={handleOrder}
                                                disabled={cart.length === 0 || isProcessing}
                                                className="w-full py-6 bg-primary text-secondary rounded-[2rem] font-black text-lg shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:grayscale mb-4 relative overflow-hidden group"
                                            >
                                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                                <div className="relative flex items-center justify-center gap-4">
                                                    {isProcessing ? <Loader2 className="w-8 h-8 animate-spin" /> : (
                                                        <>
                                                            <ShieldCheck className="w-6 h-6" />
                                                            <span>CONFIRMAR PEDIDO</span>
                                                        </>
                                                    )}
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    )}

                    {activeTab === "status" && (
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} key="status" className="max-w-4xl space-y-12">
                            <div>
                                <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">Seguimiento de Suministros</h2>
                                <p className="text-surface/40 font-bold text-xs uppercase tracking-[0.2em] mt-3">Estado de los procesos en tiempo real</p>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                {orders.map((order) => (
                                    <div key={order.id} className="bg-secondary/20 backdrop-blur-xl p-10 rounded-[3rem] border border-white/5 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-10 group hover:bg-secondary/40 transition-all">
                                        <div className="flex items-center gap-8">
                                            <div className={cn(
                                                "w-20 h-20 rounded-[2.5rem] flex items-center justify-center shadow-2xl rotate-3 group-hover:rotate-0 transition-transform shadow-black/40",
                                                order.status === "PENDIENTE" ? "bg-amber-500/10 text-amber-500" :
                                                    order.status === "PROCESANDO" ? "bg-blue-500/10 text-blue-500" :
                                                        "bg-emerald-500/10 text-emerald-500"
                                            )}>
                                                <Clock className="w-10 h-10" />
                                            </div>
                                            <div>
                                                <div className="text-[9px] font-black text-surface/20 uppercase tracking-[0.3em] mb-2 leading-none">Nº Manifiesto: #{order.id.slice(-8).toUpperCase()}</div>
                                                <h4 className="text-3xl font-black text-white tabular-nums tracking-tighter mb-2">{formatCurrency(order.totalAmount)}</h4>
                                                <div className="flex items-center gap-4">
                                                    <span className="text-[10px] font-black text-surface/30 uppercase tracking-widest">{order.orderItems.length} SKU Seleccionados</span>
                                                    <span className="w-1 h-1 bg-white/10 rounded-full" />
                                                    <span className="text-[10px] font-black text-primary/60 italic tracking-widest">{new Date(order.createdAt).toLocaleDateString()}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto">
                                            <span className={cn(
                                                "px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl",
                                                order.status === "PENDIENTE" ? "bg-amber-500 text-secondary" :
                                                    order.status === "PROCESANDO" ? "bg-blue-500 text-white" :
                                                        order.status === "ENTREGADO" ? "bg-emerald-500 text-secondary" :
                                                            "bg-white/10 text-white"
                                            )}>
                                                {order.status}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                                {orders.length === 0 && (
                                    <div className="text-center py-40 border border-dashed border-white/5 rounded-[4rem] bg-white/[0.02]">
                                        <Clock className="w-16 h-16 text-surface/5 mx-auto mb-6" />
                                        <p className="text-surface/10 font-black uppercase tracking-[0.3em] text-sm italic">Sin historial de operaciones activas</p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "facturas" && (
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} key="facturas" className="space-y-12">
                            <div>
                                <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">Archivo de Tesorería</h2>
                                <p className="text-surface/40 font-bold text-xs uppercase tracking-[0.2em] mt-3">Expedientes de facturación y comprobantes fiscales</p>
                            </div>

                            <div className="bg-secondary/40 backdrop-blur-3xl rounded-[3.5rem] border border-white/10 shadow-2xl overflow-hidden shadow-black/60">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="border-b border-white/5">
                                                <th className="p-10 font-black text-surface/20 uppercase text-[9px] tracking-[0.3em]">Nº Documento</th>
                                                <th className="p-10 font-black text-surface/20 uppercase text-[9px] tracking-[0.3em]">Fecha Emisión</th>
                                                <th className="p-10 font-black text-surface/20 uppercase text-[9px] tracking-[0.3em]">Monto Liquidado</th>
                                                <th className="p-10 font-black text-surface/20 uppercase text-[9px] tracking-[0.3em]">Estado Fiscal</th>
                                                <th className="p-10 font-black text-surface/20 uppercase text-[9px] tracking-[0.2em] text-right">Acción</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5">
                                            {orders.filter(o => o.status === "ENTREGADO").map((order) => (
                                                <tr key={order.id} className="hover:bg-white/[0.03] transition-colors group">
                                                    <td className="p-10">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                                                            <span className="font-mono text-xs text-white/40 italic uppercase tracking-widest">FAC-{order.id.slice(-6).toUpperCase()}</span>
                                                        </div>
                                                    </td>
                                                    <td className="p-10 text-sm font-black text-white/60 tabular-nums uppercase tracking-widest">{new Date(order.createdAt).toLocaleDateString()}</td>
                                                    <td className="p-10 font-black text-primary text-xl tabular-nums tracking-tighter">{formatCurrency(order.totalAmount)}</td>
                                                    <td className="p-10">
                                                        <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest">CERTIFICADA</span>
                                                    </td>
                                                    <td className="p-10 text-right">
                                                        <button className="bg-white/5 hover:bg-white text-surface/40 hover:text-secondary px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all">EXPEDIR PDF</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                {orders.filter(o => o.status === "ENTREGADO").length === 0 && (
                                    <div className="text-center py-40 bg-white/[0.01]">
                                        <FileText className="w-20 h-20 text-surface/5 mx-auto mb-8" />
                                        <p className="text-surface/10 font-black uppercase tracking-[0.4em] text-xs">Repositorio en Blanco</p>
                                        <p className="text-surface/10 text-[9px] font-bold mt-4 uppercase tracking-widest max-w-md mx-auto leading-relaxed">Los expedientes se generan exclusivamente tras la validación final del estatus de entrega por parte del centro de control.</p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
}

function SideLink({ icon, label, active = false, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            title={label}
            className={cn(
                "w-full flex items-center justify-between p-5 rounded-[1.5rem] transition-all font-black text-left group relative overflow-hidden",
                active ? "bg-primary text-secondary shadow-xl shadow-primary/10" : "hover:bg-white/5 text-surface/30 hover:text-white"
            )}
        >
            <div className="flex items-center gap-5 relative z-10">
                <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-colors shadow-lg",
                    active ? "bg-secondary/10" : "bg-white/5 group-hover:bg-primary/10 group-hover:text-primary"
                )}>
                    {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "w-5 h-5 transition-transform group-hover:scale-110" })}
                </div>
                <span className="uppercase text-[11px] tracking-[0.2em]">{label}</span>
            </div>
            <ChevronRight className={cn("w-4 h-4 transition-transform relative z-10", active ? "rotate-90" : "opacity-20 group-hover:translate-x-1 group-hover:opacity-100")} />
        </button>
    );
}
