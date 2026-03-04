"use client";

import React, { useState, useEffect } from "react";
import {
    TrendingUp, TrendingDown, Users, ShoppingCart, AlertCircle,
    BarChart3, Settings, LogOut, Search, Bell, Loader2,
    Package, ClipboardList, UserCog, History, X, Plus, Pencil, ToggleLeft, ToggleRight, Truck, Trash2, Printer, Eye,
    ArrowUpRight, ArrowDownRight, Scale, Clock, ChevronRight, Mail, Shield, CheckCircle, User
} from "lucide-react";
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";
import { cn, formatCurrency } from "@/lib/utils";
import { supabase } from "@/lib/supabase";
import { generateTicketPDF } from "@/lib/pdf";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "@/components/shared/Logo";
import {
    getAdminMetricsAction, getInventoryAction, getDistributorOrdersAction,
    updateOrderStatusAction, getSalesAction, getProductsFullAction,
    createProductAction, updateProductAction, toggleProductActiveAction,
    getInventoryMovementsAction, createInventoryMovementAction,
    getUsersAction, createUserAction, updateUserAction, toggleUserActiveAction,
    getCashRegistersAction
} from "@/app/actions/admin";
import { logoutAction } from "@/app/actions/auth";

interface AdminMetrics {
    totalRevenue: number;
    totalOrders: number;
    activeDistributors: number;
    lowStockCount: number;
    growth: number;
    chartData: { name: string; revenue: number }[];
    inventory: { id: string; name: string; stock: number; minStock: number; unit: string }[];
}

interface UIProduct {
    id: string;
    name: string;
    stock: number;
    minStock: number;
    unit: string;
    category: string | null;
}

interface UIDistributorOrder {
    id: string;
    distributor: { name: string; contactName: string };
    totalAmount: number;
    status: string;
    createdAt: Date;
    orderItems: any[];
}

export default function AdminClient() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("dashboard");
    const [loading, setLoading] = useState(true);
    const [metrics, setMetrics] = useState<AdminMetrics | null>(null);
    const [secondaryData, setSecondaryData] = useState<any>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Modal states
    const [productModal, setProductModal] = useState<{ open: boolean, editing: boolean, data: any }>({ open: false, editing: false, data: null });
    const [userModal, setUserModal] = useState<{ open: boolean, editing: boolean, data: any }>({ open: false, editing: false, data: null });
    const [saleDetailModal, setSaleDetailModal] = useState<{ open: boolean, data: any }>({ open: false, data: null });
    const [movementModal, setMovementModal] = useState(false);
    const [formError, setFormError] = useState("");
    const [saving, setSaving] = useState(false);

    // Form states
    const [pForm, setPForm] = useState({
        name: "", description: "", pricePublic: 0, priceDistributor: 0,
        unitType: "KG", stockQuantity: 0, minimumStockAlert: 10, category: "Tortillería"
    });
    const [uForm, setUForm] = useState({ name: "", email: "", password: "", role: "CAJERO" });
    const [mForm, setMForm] = useState({ productId: "", movementType: "entrada_produccion", quantity: 0 });

    const loadData = async () => {
        try {
            setLoading(true);
            const mData = await getAdminMetricsAction();
            setMetrics(mData);

            // Load secondary data based on current tab
            if (activeTab === "ventas") {
                const sData = await getSalesAction();
                if (activeTab === "ventas") setSecondaryData(sData);
            } else if (activeTab === "distribuidores") {
                const dData = await getDistributorOrdersAction();
                if (activeTab === "distribuidores") setSecondaryData(dData);
            } else if (activeTab === "productos") {
                const pData = await getProductsFullAction();
                if (activeTab === "productos") setSecondaryData(pData);
            } else if (activeTab === "inventario") {
                const [iData, movData] = await Promise.all([getInventoryAction(), getInventoryMovementsAction()]);
                if (activeTab === "inventario") setSecondaryData({ products: iData, movements: movData });
            } else if (activeTab === "usuarios") {
                const uData = await getUsersAction();
                if (activeTab === "usuarios") setSecondaryData(uData);
            } else if (activeTab === "cortes") {
                const cData = await getCashRegistersAction();
                if (activeTab === "cortes") setSecondaryData(cData);
            }
        } catch (error) {
            console.error("Error loading admin data");
        } finally {
            setLoading(false);
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

    const switchTab = (tab: string) => {
        setSecondaryData(null); // Limpiar datos previos para evitar errores de renderizado
        setActiveTab(tab);
        setIsSidebarOpen(false);
    };

    // Product modal helpers
    const openNewProduct = () => {
        setPForm({ name: "", description: "", pricePublic: 0, priceDistributor: 0, unitType: "KG", stockQuantity: 0, minimumStockAlert: 10, category: "Tortillería" });
        setProductModal({ open: true, editing: false, data: null });
        setFormError("");
    };

    const openEditProduct = (product: any) => {
        setPForm({
            name: product.name,
            description: product.description || "",
            pricePublic: product.pricePublic,
            priceDistributor: product.priceDistributor,
            unitType: product.unitType,
            stockQuantity: product.stockQuantity,
            minimumStockAlert: product.minimumStockAlert,
            category: product.category || "Tortillería"
        });
        setProductModal({ open: true, editing: true, data: product });
        setFormError("");
    };

    const handleSaveProduct = async () => {
        if (!pForm.name || pForm.pricePublic <= 0) { setFormError("Nombre y precio son obligatorios"); return; }
        setSaving(true); setFormError("");
        try {
            if (productModal.editing) {
                const res = await updateProductAction(productModal.data.id, pForm);
                if (res.success) setProductModal({ ...productModal, open: false });
                else setFormError(res.error || "Error al actualizar");
            } else {
                const res = await createProductAction(pForm);
                if (res.success) setProductModal({ ...productModal, open: false });
                else setFormError(res.error || "Error al crear");
            }
            loadData();
        } catch (e) { setFormError("Error de conexión"); }
        finally { setSaving(false); }
    };

    // Inventory movement helper
    const handleSaveMovement = async () => {
        if (!mForm.productId || mForm.quantity <= 0) { setFormError("Selecciona un producto y cantidad válida"); return; }
        setSaving(true); setFormError("");
        const res = await createInventoryMovementAction(mForm);
        setSaving(false);
        if (res.success) { setMovementModal(false); loadData(); }
        else setFormError(res.error || "Error");
    };

    // User modal helpers
    const handleSaveUser = async () => {
        if (!uForm.name || !uForm.email || (!userModal.editing && !uForm.password)) {
            setFormError("Nombre, correo y contraseña son obligatorios");
            return;
        }
        setSaving(true); setFormError("");

        const res = userModal.editing
            ? await updateUserAction(userModal.data.id, uForm)
            : await createUserAction(uForm);

        setSaving(false);
        if (res.success) {
            setUserModal({ open: false, editing: false, data: null });
            loadData();
        }
        else setFormError(res.error || "Error");
    };

    useEffect(() => {
        loadData();

        // Configuración de Supabase Realtime
        const channel = supabase
            .channel('db-changes')
            .on(
                'postgres_changes',
                { event: '*', schema: 'public', table: 'sales' },
                () => { loadData(); }
            )
            .on(
                'postgres_changes',
                { event: '*', schema: 'public', table: 'distributor_orders' },
                () => { loadData(); }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, [activeTab]);

    if (loading && !metrics) {
        return (
            <div className="h-screen w-full flex flex-col items-center justify-center bg-neutral-black noise relative overflow-hidden">
                <div className="absolute top-0 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
                <Loader2 className="w-12 h-12 text-primary animate-spin mb-6" />
                <p className="text-primary font-black tracking-[0.3em] uppercase text-[10px] animate-pulse">Sincronizando Sistema Central...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neutral-black flex noise overflow-hidden relative">
            {/* Background Glows */}
            <div className="absolute top-0 -left-20 w-[30rem] h-[30rem] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 -right-20 w-[40rem] h-[40rem] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-secondary/80 backdrop-blur-xl z-[60] lg:hidden"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Sidebar Navigation */}
            <aside className={cn(
                "fixed lg:relative inset-y-0 left-0 z-[70] w-80 bg-secondary/40 backdrop-blur-3xl flex flex-col border-r border-white/10 transition-transform duration-500 ease-out lg:translate-x-0 overflow-y-auto shadow-2xl",
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="p-10">
                    <div className="mb-16">
                        <Logo className="w-full h-auto" />
                    </div>

                    <nav className="space-y-1">
                        <AdminNavItem icon={<BarChart3 />} label="Panel Principal" active={activeTab === "dashboard"} onClick={() => switchTab("dashboard")} />
                        <AdminNavItem icon={<ShoppingCart />} label="Historial de Ventas" active={activeTab === "ventas"} onClick={() => switchTab("ventas")} />
                        <AdminNavItem icon={<Users />} label="Pedidos Distribuidores" active={activeTab === "distribuidores"} onClick={() => switchTab("distribuidores")} />
                        <div className="hidden lg:block pt-2 pb-1"><p className="text-surface/20 text-[10px] font-black uppercase tracking-widest px-4">Operaciones</p></div>
                        <AdminNavItem icon={<Package />} label="Gestión de Productos" active={activeTab === "productos"} onClick={() => switchTab("productos")} />
                        <AdminNavItem icon={<ClipboardList />} label="Control de Inventario" active={activeTab === "inventario"} onClick={() => switchTab("inventario")} />
                        <AdminNavItem icon={<UserCog />} label="Personal" active={activeTab === "usuarios"} onClick={() => switchTab("usuarios")} />
                    </nav>
                </div>

                <div className="mt-auto px-6 pb-10 pt-6 border-t border-white/5">
                    <button
                        onClick={handleLogout}
                        className="w-full h-16 flex items-center gap-5 px-6 rounded-[1.5rem] bg-white/5 text-surface/30 hover:bg-accent/10 hover:text-accent transition-all group"
                        title="Cerrar Sesión"
                    >
                        <LogOut className="w-5 h-5 transition-transform group-hover:scale-110" />
                        <span className="font-black uppercase text-[11px] tracking-[0.2em]">Cerrar Sesión</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto relative z-10">
                <div className="max-w-7xl mx-auto p-4 md:p-8 lg:p-12">
                    <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
                        <div className="flex items-center gap-6">
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className="lg:hidden p-5 bg-secondary/50 backdrop-blur-xl border border-white/10 rounded-[1.5rem] text-primary hover:scale-105 active:scale-95 transition-all shadow-xl"
                                title="Abrir menú de navegación"
                            >
                                <BarChart3 className="w-6 h-6" />
                            </button>
                            <div>
                                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic leading-none">
                                    Panel de <span className="text-primary italic">Control</span>
                                </h1>
                                <div className="flex items-center gap-3 mt-4">
                                    <div className="h-[2px] w-12 bg-primary" />
                                    <p className="text-surface/30 font-black uppercase tracking-[0.3em] text-[10px]">Visión General del Negocio</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <div className="relative flex-1 md:w-80 group">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-surface/20 group-focus-within:text-primary transition-colors" />
                                <input
                                    type="text"
                                    placeholder="BUSCAR EN EL SISTEMA..."
                                    className="w-full pl-16 pr-6 py-5 bg-white/5 border border-white/5 rounded-[1.5rem] text-xs font-black tracking-widest text-white focus:bg-white/10 focus:border-primary/30 transition-all outline-none placeholder:text-white/10"
                                    title="Buscar"
                                />
                            </div>
                            <button className="p-5 bg-white/5 border border-white/5 rounded-[1.5rem] relative hover:bg-white/10 transition-all group" title="Notificaciones">
                                <Bell className="w-6 h-6 text-surface/20 group-hover:text-primary transition-colors" />
                                <span className="absolute top-5 right-5 w-2.5 h-2.5 bg-accent rounded-full border-[3px] border-neutral-black" />
                            </button>
                        </div>
                    </header>

                    {activeTab === "dashboard" && metrics && (
                        <div className="space-y-12">
                            {/* Key Performance Indicators */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                                <KpiCard
                                    title="Ingresos Hoy"
                                    value={formatCurrency(metrics.totalRevenue)}
                                    icon={<TrendingUp className="w-6 h-6" />}
                                    color="bg-emerald-500"
                                    growth={metrics.growth}
                                />
                                <KpiCard
                                    title="Ventas Totales"
                                    value={metrics.totalOrders.toString()}
                                    icon={<ShoppingCart className="w-6 h-6" />}
                                    color="bg-blue-500"
                                />
                                <KpiCard
                                    title="Distribuidores"
                                    value={metrics.activeDistributors.toString()}
                                    icon={<Users className="w-6 h-6" />}
                                    color="bg-indigo-500"
                                />
                                <KpiCard
                                    title="Alertas Stock"
                                    value={metrics.lowStockCount.toString()}
                                    icon={<AlertCircle className="w-6 h-6" />}
                                    color="bg-red-500"
                                    important={metrics.lowStockCount > 0}
                                />
                            </div>

                            {/* Main Performance Chart */}
                            <div className="bg-secondary/40 backdrop-blur-3xl p-8 md:p-12 rounded-[3.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -mr-48 -mt-48 blur-[120px] pointer-events-none group-hover:bg-primary/20 transition-all duration-1000" />
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full -ml-32 -mb-32 blur-[100px] pointer-events-none" />

                                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                                    <div>
                                        <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter leading-none">Rendimiento Operativo</h3>
                                        <div className="flex items-center gap-3 mt-4">
                                            <div className="h-[1px] w-8 bg-primary/40" />
                                            <p className="text-surface/30 font-black text-[10px] uppercase tracking-[0.3em]">Análisis de ingresos • Últimos 7 días</p>
                                        </div>
                                    </div>
                                    <button className="group relative px-8 py-4 bg-primary text-secondary rounded-2xl font-black text-[10px] uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
                                        <span className="relative z-10">Descargar Reporte</span>
                                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                    </button>
                                </div>
                                <div className="h-[400px] w-full relative z-10">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={metrics.chartData}>
                                            <defs>
                                                <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#F5D061" stopOpacity={0.3} />
                                                    <stop offset="95%" stopColor="#F5D061" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                                            <XAxis
                                                dataKey="name"
                                                axisLine={false}
                                                tickLine={false}
                                                tick={{ fontSize: 9, fontWeight: '900', fill: 'rgba(255,255,255,0.3)' }}
                                                dy={20}
                                            />
                                            <YAxis
                                                axisLine={false}
                                                tickLine={false}
                                                tick={{ fontSize: 9, fontWeight: '900', fill: 'rgba(255,255,255,0.3)' }}
                                                dx={-20}
                                            />
                                            <Tooltip
                                                contentStyle={{
                                                    borderRadius: '24px',
                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                                                    padding: '24px',
                                                    background: 'rgba(20,22,28,0.95)',
                                                    backdropFilter: 'blur(20px)',
                                                    color: '#fff'
                                                }}
                                                itemStyle={{ fontSize: '11px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '2px', color: '#F5D061' }}
                                                labelStyle={{ fontSize: '10px', fontWeight: '900', color: 'rgba(255,255,255,0.4)', marginBottom: '8px', textTransform: 'uppercase' }}
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="revenue"
                                                stroke="#F5D061"
                                                strokeWidth={4}
                                                fillOpacity={1}
                                                fill="url(#colorRev)"
                                                animationDuration={2500}
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            {/* Secondary Data Grids */}
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                                {/* Critical Products Card Grid */}
                                <div className="space-y-8">
                                    <div className="flex justify-between items-end px-6">
                                        <div>
                                            <h3 className="text-2xl font-black text-white uppercase italic leading-none">Alertas de Stock</h3>
                                            <p className="text-surface/30 font-black text-[9px] uppercase tracking-[0.3em] mt-3">Suministros por debajo del mínimo</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4">
                                        {secondaryData?.products?.filter((p: any) => p.stock <= p.minStock).slice(0, 4).map((p: any) => (
                                            <div key={p.id} className="bg-secondary/40 backdrop-blur-3xl p-6 rounded-[2rem] border border-white/5 flex items-center justify-between group hover:border-accent/40 transition-all">
                                                <div className="flex items-center gap-6">
                                                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform shadow-lg shadow-accent/5">
                                                        <AlertCircle className="w-7 h-7" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-black text-white group-hover:text-primary transition-colors uppercase tracking-tight text-lg">{p.name}</h4>
                                                        <div className="flex items-center gap-3 mt-1">
                                                            <span className="text-[10px] font-black text-surface/30 uppercase tracking-widest">Activo: {p.stock}</span>
                                                            <div className="w-1 h-1 bg-white/10 rounded-full" />
                                                            <span className="text-[10px] font-black text-accent/60 uppercase tracking-widest">Mín: {p.minStock}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => switchTab("inventario")}
                                                    className="p-5 bg-white/5 hover:bg-primary hover:text-secondary rounded-2xl transition-all group/btn shadow-xl"
                                                    title="Ver en Inventario"
                                                >
                                                    <Package className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Active Inventory Cards */}
                                <div className="space-y-8">
                                    <div className="flex justify-between items-end px-6">
                                        <div>
                                            <h3 className="text-2xl font-black text-white uppercase italic leading-none">Inventario Activo</h3>
                                            <p className="text-surface/30 font-black text-[9px] uppercase tracking-[0.3em] mt-3">Estado actual del catálogo</p>
                                        </div>
                                        <button onClick={() => switchTab("inventario")} className="text-[10px] font-black text-primary border-b border-primary/20 pb-2 uppercase tracking-widest hover:border-white transition-all">Ver todo</button>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {metrics.inventory.slice(0, 4).map((p: any) => (
                                            <div key={p.id} className="bg-secondary/40 backdrop-blur-3xl p-8 rounded-[2.5rem] border border-white/5 flex flex-col items-center text-center group hover:bg-secondary/60 transition-all shadow-xl">
                                                <p className="text-[9px] font-black text-surface/20 group-hover:text-primary/40 uppercase tracking-[0.3em] mb-4">{p.unit}</p>
                                                <h4 className="font-black text-white group-hover:text-primary transition-colors text-xl truncate w-full px-4 mb-6">{p.name}</h4>
                                                <div className="w-full bg-white/5 group-hover:bg-primary/10 p-5 rounded-[2rem] mb-6 transition-colors border border-white/5">
                                                    <span className="text-4xl font-black text-white tabular-nums tracking-tighter group-hover:text-primary transition-colors">{p.stock}</span>
                                                </div>
                                                <span className={cn(
                                                    "px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg",
                                                    p.stock <= p.minStock ? "bg-accent text-secondary" : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:bg-primary group-hover:text-secondary group-hover:border-transparent"
                                                )}>
                                                    {p.stock <= p.minStock ? "Crítico" : "Óptimo"}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "ventas" && (
                        <div className="space-y-12">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 px-6">
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none">Historial de <span className="text-primary italic">Ventas</span></h2>
                                    <div className="flex items-center gap-3 mt-4">
                                        <div className="h-[1px] w-8 bg-primary/40" />
                                        <p className="text-surface/30 font-black text-[10px] uppercase tracking-[0.3em]">Auditoría completa de transacciones POS</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                {secondaryData?.map((sale: any) => (
                                    <div key={sale.id} className="bg-secondary/40 backdrop-blur-3xl p-6 md:p-10 rounded-[2.5rem] border border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 group hover:border-primary/20 transition-all shadow-xl">
                                        <div className="flex items-center gap-8 flex-1">
                                            <div className="w-20 h-20 rounded-[2rem] bg-emerald-500/10 flex items-center justify-center shadow-xl border border-emerald-500/10 transform group-hover:rotate-12 group-hover:scale-105 transition-all duration-500 text-emerald-400">
                                                <History className="w-10 h-10" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-4 mb-3">
                                                    <span className="font-mono text-[10px] font-black text-surface/20 uppercase tracking-tighter bg-white/5 px-3 py-1 rounded-lg border border-white/5">#{sale.id.slice(-8).toUpperCase()}</span>
                                                    <div className="px-4 py-1.5 bg-primary text-secondary rounded-full text-[9px] font-black uppercase tracking-[0.1em] shadow-lg shadow-primary/10 italic">VENTA POS</div>
                                                </div>
                                                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                                                    <div className="flex flex-col">
                                                        <span className="text-xl font-black text-white group-hover:text-primary transition-colors">{sale.user?.name || "Sistema"}</span>
                                                        <span className="text-[10px] font-black text-surface/20 uppercase tracking-[0.2em] mt-1">{new Date(sale.createdAt).toLocaleString()}</span>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-2xl font-black text-emerald-400 tabular-nums tracking-tighter">{formatCurrency(sale.totalAmount)}</span>
                                                        <span className="text-[10px] font-black text-surface/20 uppercase tracking-[0.2em] mt-1">{sale.saleItems?.length} Productos Registrados</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 w-full md:w-auto">
                                            <button
                                                onClick={() => setSaleDetailModal({ open: true, data: sale })}
                                                className="flex-1 md:flex-none h-16 px-8 bg-white/5 hover:bg-white/10 text-white rounded-2xl transition-all border border-white/5 flex items-center justify-center gap-4 group/btn shadow-xl"
                                                title="Ver Detalles"
                                            >
                                                <Eye className="w-5 h-5 transition-transform group-hover/btn:scale-110" />
                                                <span className="font-black text-[10px] uppercase tracking-widest leading-none">Auditar</span>
                                            </button>
                                            <button
                                                onClick={() => generateTicketPDF(sale.saleItems.map((si: any) => ({ ...si, name: si.product?.name || "Producto", priceAtTime: si.unitPrice })), sale.totalAmount)}
                                                className="flex-1 md:flex-none h-16 px-8 bg-primary text-secondary rounded-2xl transition-all border border-primary/20 flex items-center justify-center gap-4 hover:scale-105 active:scale-95 shadow-xl shadow-primary/10 group/print"
                                                title="Reimprimir Ticket"
                                            >
                                                <Printer className="w-5 h-5 transition-transform group-hover/print:scale-110" />
                                                <span className="font-black text-[10px] uppercase tracking-widest leading-none">Ticket</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "distribuidores" && (
                        <div className="space-y-12">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 px-6">
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none">Gestión de <span className="text-primary italic">Distribuidores</span></h2>
                                    <div className="flex items-center gap-3 mt-4">
                                        <div className="h-[1px] w-8 bg-primary/40" />
                                        <p className="text-surface/30 font-black text-[10px] uppercase tracking-[0.3em]">Control de suministros y logística externa</p>
                                    </div>
                                </div>
                                <button title="Actualizar Datos" onClick={loadData} className="p-5 bg-white/5 border border-white/5 rounded-2xl text-primary hover:bg-white/10 transition-all shadow-xl">
                                    <BarChart3 className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                {secondaryData?.map((order: any) => (
                                    <div key={order.id} className="bg-secondary/40 backdrop-blur-3xl p-8 md:p-10 rounded-[2.5rem] border border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 group hover:border-primary/20 transition-all shadow-xl">
                                        <div className="flex items-center gap-8 flex-1">
                                            <div className={cn(
                                                "w-20 h-20 rounded-[2rem] flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-all duration-500",
                                                order.status === "PENDIENTE" ? "bg-amber-500/10 text-amber-500 border border-amber-500/10" :
                                                    order.status === "PROCESANDO" ? "bg-blue-500/10 text-blue-500 border border-blue-500/10" :
                                                        order.status === "ENTREGADO" ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/10" : "bg-white/5 text-surface/20 border border-white/5"
                                            )}>
                                                <Truck className="w-10 h-10" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-4 mb-3">
                                                    <span className="text-xl font-black text-white group-hover:text-primary transition-colors">{order.distributor?.name || "Distribuidor"}</span>
                                                    <span className="font-mono text-[9px] font-black text-surface/20 uppercase tracking-tighter bg-white/5 px-2 py-0.5 rounded-lg">#{order.id.slice(-4).toUpperCase()}</span>
                                                </div>
                                                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
                                                    <div className="flex items-baseline gap-2">
                                                        <span className="text-3xl font-black text-white tabular-nums tracking-tighter">{formatCurrency(order.totalAmount)}</span>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] font-black text-surface/30 uppercase tracking-[0.2em]">{order.orderItems?.length || 0} Tipos de Productos</span>
                                                        <p className="text-[9px] text-primary/40 font-black mt-1 uppercase italic tracking-widest">{new Date(order.createdAt).toLocaleString()}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-6 w-full md:w-auto">
                                            <div className="relative group/select flex-1 md:w-64">
                                                <select
                                                    value={order.status}
                                                    onChange={(e) => updateOrderStatusAction(order.id, e.target.value).then(loadData)}
                                                    className="w-full bg-white/5 border border-white/10 px-6 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-white focus:bg-white/10 focus:border-primary/40 transition-all outline-none cursor-pointer appearance-none"
                                                    title="Cambiar Estado"
                                                >
                                                    <option value="PENDIENTE">PENDIENTE</option>
                                                    <option value="PROCESANDO">EN PROCESO</option>
                                                    <option value="ENTREGADO">ENTREGADO</option>
                                                    <option value="CANCELADO">CANCELADO</option>
                                                </select>
                                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/20 group-hover/select:text-primary">
                                                    <ChevronRight className="w-4 h-4 rotate-90" />
                                                </div>
                                            </div>
                                            <button className="p-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl transition-all group/btn" title="Detalles">
                                                <Plus className="w-6 h-6 transition-transform group-hover/btn:rotate-90" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "productos" && (
                        <div className="space-y-12">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 px-6">
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none">Catálogo de <span className="text-primary italic">Productos</span></h2>
                                    <div className="flex items-center gap-3 mt-4">
                                        <div className="h-[1px] w-8 bg-primary/40" />
                                        <p className="text-surface/30 font-black text-[10px] uppercase tracking-[0.3em]">Inventario maestro y configuración de precios</p>
                                    </div>
                                </div>
                                <button
                                    onClick={openNewProduct}
                                    className="group relative overflow-hidden bg-primary text-secondary px-10 py-5 rounded-2xl font-black shadow-2xl transition-all hover:scale-105 active:scale-95 shadow-primary/20"
                                >
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
                                    <span className="relative flex items-center gap-3 text-[11px] uppercase tracking-widest">
                                        <Plus className="w-6 h-6 border-2 border-secondary/20 rounded-lg p-0.5" /> Nuevo Producto
                                    </span>
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {secondaryData?.map((p: any) => (
                                    <div key={p.id} className="bg-secondary/40 backdrop-blur-3xl p-8 rounded-[3rem] border border-white/5 group hover:border-primary/20 transition-all shadow-2xl relative overflow-hidden">
                                        <div className="flex justify-between items-start mb-8">
                                            <div className={cn(
                                                "w-16 h-16 rounded-2xl shadow-xl flex items-center justify-center transform group-hover:-rotate-6 transition-all duration-500",
                                                p.active ? "bg-primary text-secondary" : "bg-white/5 text-surface/20"
                                            )}>
                                                <Package className="w-8 h-8" />
                                            </div>
                                            <button
                                                onClick={() => toggleProductActiveAction(p.id, !p.active).then(loadData)}
                                                title={p.active ? "Desactivar Producto" : "Activar Producto"}
                                                className={cn(
                                                    "w-14 h-7 rounded-full relative transition-all duration-500",
                                                    p.active ? "bg-emerald-500/20" : "bg-white/10"
                                                )}
                                            >
                                                <motion.div
                                                    animate={{ x: p.active ? 32 : 4 }}
                                                    className={cn("w-5 h-5 rounded-full absolute top-1 shadow-lg", p.active ? "bg-emerald-400" : "bg-surface/20")}
                                                />
                                            </button>
                                        </div>

                                        <h4 className="text-2xl font-black text-white mb-2 group-hover:text-primary transition-colors tracking-tight uppercase leading-tight">{p.name}</h4>
                                        <div className="flex items-center gap-3 mb-8">
                                            <span className="text-[10px] font-black text-surface/20 uppercase tracking-[0.2em]">{p.unitType}</span>
                                            <div className="w-1 h-1 bg-white/10 rounded-full" />
                                            <span className={cn(
                                                "text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full",
                                                p.active ? "text-emerald-400 bg-emerald-500/5" : "text-surface/20 bg-white/5"
                                            )}>{p.active ? "ACTIVO EN POS" : "FUERA DE LÍNEA"}</span>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 mb-8">
                                            <div className="bg-white/5 p-5 rounded-[2rem] border border-white/5">
                                                <p className="text-[9px] font-black text-surface/30 uppercase mb-2 tracking-widest text-center">Público</p>
                                                <p className="text-xl font-black text-white/60 text-center tracking-tighter tabular-nums">{formatCurrency(p.pricePublic)}</p>
                                            </div>
                                            <div className="bg-primary/5 p-5 rounded-[2rem] border border-primary/10">
                                                <p className="text-[9px] font-black text-primary/40 uppercase mb-2 tracking-widest text-center">Distribuidor</p>
                                                <p className="text-xl font-black text-primary text-center tracking-tighter tabular-nums">{formatCurrency(p.priceDistributor)}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between pt-8 border-t border-white/5">
                                            <div className="flex items-center gap-4">
                                                <div className={cn(
                                                    "w-3 h-3 rounded-full animate-pulse shadow-lg",
                                                    p.stockQuantity < p.minimumStockAlert ? "bg-accent shadow-accent/20" : "bg-emerald-500 shadow-emerald-500/20"
                                                )} />
                                                <div className="flex flex-col">
                                                    <span className="text-[9px] font-black text-surface/20 uppercase tracking-widest leading-none mb-1">Stock Actual</span>
                                                    <span className={cn(
                                                        "text-lg font-black tracking-tighter tabular-nums leading-none",
                                                        p.stockQuantity < p.minimumStockAlert ? "text-accent" : "text-emerald-400"
                                                    )}>
                                                        {p.stockQuantity} <span className="text-[10px] opacity-40 ml-1">{p.unitType.toLowerCase()}</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => openEditProduct(p)}
                                                className="w-14 h-14 bg-white/5 hover:bg-primary hover:text-secondary rounded-2xl transition-all flex items-center justify-center border border-white/5 group/edit shadow-xl"
                                                title="Editar Producto"
                                            >
                                                <Pencil className="w-6 h-6 transition-transform group-hover/edit:scale-110" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "inventario" && (
                        <div className="space-y-16">
                            {/* Header & Quick Action */}
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 px-6">
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none">Control de <span className="text-primary italic">Inventario</span></h2>
                                    <div className="flex items-center gap-3 mt-4">
                                        <div className="h-[1px] w-8 bg-primary/40" />
                                        <p className="text-surface/30 font-black text-[10px] uppercase tracking-[0.3em]">Monitoreo de activos y flujo de mercancía</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => { setMovementModal(true); setFormError(""); }}
                                    className="group relative overflow-hidden bg-white/5 text-primary px-10 py-5 rounded-2xl font-black border border-white/10 shadow-2xl transition-all hover:scale-105 active:scale-95"
                                >
                                    <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform" />
                                    <span className="relative flex items-center gap-3 text-[11px] uppercase tracking-widest">
                                        <Scale className="w-6 h-6 border-2 border-primary/20 rounded-lg p-0.5" /> Ajuste Manual
                                    </span>
                                </button>
                            </div>

                            {/* Premium Stock Cards Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {secondaryData?.products?.map((p: any) => (
                                    <div key={p.id} className="bg-secondary/40 backdrop-blur-3xl p-8 rounded-[3rem] border border-white/5 group hover:border-primary/20 transition-all shadow-2xl relative overflow-hidden">
                                        <div className="flex justify-between items-start mb-8">
                                            <div className={cn(
                                                "w-16 h-16 rounded-[1.5rem] shadow-xl flex items-center justify-center transform group-hover:-rotate-12 transition-all duration-500",
                                                p.stock <= p.minStock ? "bg-accent text-secondary" : "bg-emerald-500 text-secondary"
                                            )}>
                                                <Package className="w-8 h-8" />
                                            </div>
                                            <div className="text-right">
                                                <p className="text-[10px] font-black text-surface/10 uppercase tracking-[0.2em] mb-1">Estado</p>
                                                <div className={cn(
                                                    "text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg border",
                                                    p.stock <= p.minStock ? "text-accent border-accent/20 bg-accent/5" : "text-emerald-400 border-emerald-500/20 bg-emerald-500/5"
                                                )}>
                                                    {p.stock <= p.minStock ? "CRÍTICO" : "SALUDABLE"}
                                                </div>
                                            </div>
                                        </div>

                                        <h4 className="text-2xl font-black text-white mb-2 group-hover:text-primary transition-colors tracking-tight uppercase leading-tight">{p.name}</h4>
                                        <p className="text-[10px] font-black text-surface/20 uppercase tracking-[0.3em] mb-8">{p.unit}</p>

                                        <div className="bg-white/5 p-6 rounded-[2.5rem] border border-white/5 mb-8">
                                            <p className="text-[10px] font-black text-surface/20 uppercase mb-2 tracking-[0.3em] text-center">Stock Disponible</p>
                                            <p className="text-5xl font-black text-white text-center tabular-nums tracking-tighter shadow-sm">{p.stock}</p>
                                        </div>

                                        <div className="flex items-center justify-between text-[10px] font-black text-surface/30 uppercase px-2 mb-2">
                                            <span>Mín: {p.minStock}</span>
                                            <span>Óptimo</span>
                                        </div>
                                        <div className="h-2 bg-white/5 rounded-full relative overflow-hidden border border-white/5">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${Math.min(100, (p.stock / (p.minStock * 2)) * 100)}%` }}
                                                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                                                className={cn("h-full shadow-lg", p.stock <= p.minStock ? "bg-accent" : "bg-emerald-500")}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Movement History Timeline */}
                            <div className="bg-secondary/40 backdrop-blur-3xl p-8 md:p-12 rounded-[4rem] border border-white/5 shadow-inner relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -mr-48 -mt-48 blur-[100px] pointer-events-none opacity-20" />

                                <div className="relative z-10 mb-12 px-6">
                                    <h3 className="text-3xl font-black text-white uppercase italic tracking-tight">Bitácora de <span className="text-primary">Movimientos</span></h3>
                                    <p className="text-surface/30 font-black text-[10px] uppercase tracking-[0.4em] mt-3">Trazabilidad histórica de inventario operativo</p>
                                </div>

                                <div className="relative z-10 space-y-4">
                                    {secondaryData?.movements?.map((m: any) => {
                                        const isEntry = m.movementType.includes("entrada") || m.quantity > 0;
                                        const typeIcon = m.movementType === "entrada_produccion" ? <ArrowUpRight className="w-6 h-6" /> :
                                            m.movementType === "merma" ? <ArrowDownRight className="w-6 h-6" /> :
                                                m.movementType === "ajuste_manual" ? <Scale className="w-6 h-6" /> :
                                                    m.movementType === "venta_distribuidor" ? <Truck className="w-6 h-6" /> : <ShoppingCart className="w-6 h-6" />;
                                        const typeColorStyle = m.movementType === "entrada_produccion" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
                                            m.movementType === "merma" ? "bg-red-500/10 text-red-400 border-red-500/20" :
                                                m.movementType === "ajuste_manual" ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" : "bg-primary/10 text-primary border-primary/20";

                                        return (
                                            <div key={m.id} className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-8 rounded-[2.5rem] bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all group">
                                                <div className={cn(
                                                    "w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl border shrink-0 transform group-hover:scale-110 transition-all duration-500",
                                                    typeColorStyle
                                                )}>
                                                    {typeIcon}
                                                </div>

                                                <div className="flex-1 text-center md:text-left">
                                                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                                                        <span className="font-black text-white text-xl group-hover:text-primary transition-colors tracking-tight uppercase">{m.productName}</span>
                                                        <span className="hidden md:block w-1.5 h-1.5 bg-white/10 rounded-full" />
                                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-surface/30 bg-white/5 px-3 py-1 rounded-lg border border-white/5">{m.movementType.replace(/_/g, " ")}</span>
                                                    </div>
                                                    <div className="flex flex-col md:flex-row md:items-center gap-6 text-[10px] font-black text-surface/20 uppercase tracking-[0.2em]">
                                                        <span>{new Date(m.createdAt).toLocaleString()}</span>
                                                        <span className="hidden md:block opacity-30">•</span>
                                                        <span className="font-mono text-[9px] bg-primary/5 text-primary/60 px-2 py-0.5 rounded italic">Ref: {m.referenceId || "MANUAL_ADJUST"}</span>
                                                    </div>
                                                </div>

                                                <div className="text-right shrink-0">
                                                    <div className={cn(
                                                        "text-3xl font-black tracking-tighter tabular-nums px-6 py-3 rounded-2xl border",
                                                        isEntry ? "text-emerald-400 border-emerald-500/10 bg-emerald-500/5" : "text-accent border-accent/10 bg-accent/5"
                                                    )}>
                                                        {m.quantity > 0 ? `+${m.quantity}` : m.quantity}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "usuarios" && (
                        <div className="space-y-12">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 px-6">
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none">Gestión de <span className="text-primary italic">Personal</span></h2>
                                    <div className="flex items-center gap-3 mt-4">
                                        <div className="h-[1px] w-8 bg-primary/40" />
                                        <p className="text-surface/30 font-black text-[10px] uppercase tracking-[0.3em]">Control de accesos y perfiles operativos</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => {
                                        setUserModal({ open: true, editing: false, data: null });
                                        setUForm({ name: "", email: "", password: "", role: "CAJERO" });
                                        setFormError("");
                                    }}
                                    className="group relative overflow-hidden bg-primary text-secondary px-10 py-5 rounded-2xl font-black shadow-2xl transition-all hover:scale-105 active:scale-95 shadow-primary/20"
                                >
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
                                    <span className="relative flex items-center gap-3 text-[11px] uppercase tracking-widest">
                                        <Users className="w-6 h-6 border-2 border-secondary/20 rounded-lg p-0.5" /> Nuevo Colaborador
                                    </span>
                                </button>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                {secondaryData?.map((u: any) => (
                                    <div key={u.id} className="bg-secondary/40 backdrop-blur-3xl p-8 md:p-10 rounded-[3rem] border border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 group hover:border-primary/20 transition-all shadow-xl">
                                        <div className="flex items-center gap-8 flex-1">
                                            <div className={cn(
                                                "w-20 h-20 rounded-[2rem] flex items-center justify-center shadow-xl border transform group-hover:rotate-12 transition-all duration-500",
                                                u.role === "ADMIN" ? "bg-accent/10 text-accent border-accent/20" : "bg-primary/10 text-primary border-primary/20"
                                            )}>
                                                {u.role === "ADMIN" ? <UserCog className="w-10 h-10" /> : <Users className="w-10 h-10" />}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-4 mb-3">
                                                    <span className="text-2xl font-black text-white group-hover:text-primary transition-colors tracking-tight uppercase leading-tight">{u.name}</span>
                                                    <span className={cn(
                                                        "px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-lg italic transition-colors",
                                                        u.active ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"
                                                    )}>{u.active ? "EN LÍNEA" : "SUSPENDIDO"}</span>
                                                </div>
                                                <div className="flex flex-col md:flex-row md:items-center gap-6">
                                                    <div className="flex items-center gap-3">
                                                        <Mail className="w-4 h-4 text-surface/20" />
                                                        <span className="font-mono text-sm text-surface/30 group-hover:text-white/60 transition-colors uppercase tracking-tight">{u.email}</span>
                                                    </div>
                                                    <span className="hidden md:block w-1.5 h-1.5 bg-white/10 rounded-full" />
                                                    <div className="flex items-center gap-2">
                                                        <Shield className="w-4 h-4 text-primary/40" />
                                                        <span className="text-[10px] font-black text-primary/60 uppercase tracking-[0.3em]">{u.role}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 w-full md:w-auto">
                                            <button
                                                onClick={() => {
                                                    setUserModal({ open: true, editing: true, data: u });
                                                    setUForm({ name: u.name, email: u.email, password: "", role: u.role });
                                                    setFormError("");
                                                }}
                                                className="flex-1 md:flex-none h-16 px-10 bg-white/5 hover:bg-white/10 text-white rounded-2xl transition-all border border-white/5 flex items-center justify-center gap-4 group/btn shadow-xl"
                                                title="Configurar Perfil"
                                            >
                                                <Settings className="w-6 h-6 transition-transform group-hover/btn:rotate-90" />
                                                <span className="font-black text-[10px] uppercase tracking-widest leading-none">Ajustes</span>
                                            </button>
                                            <button
                                                onClick={() => toggleUserActiveAction(u.id, !u.active).then(loadData)}
                                                className={cn(
                                                    "h-16 px-8 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all border flex items-center justify-center gap-3 shadow-xl",
                                                    u.active
                                                        ? "bg-accent/5 border-accent/10 text-accent hover:bg-accent hover:text-secondary"
                                                        : "bg-emerald-500/5 border-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-secondary"
                                                )}
                                                title={u.active ? "Suspender Acceso" : "Restaurar Acceso"}
                                            >
                                                {u.active ? <X className="w-5 h-5" /> : <CheckCircle className="w-5 h-5" />}
                                                <span className="md:hidden lg:inline">{u.active ? "Suspender" : "Activar"}</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "cortes" && (
                        <div className="space-y-12">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 px-6">
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none">Corte de <span className="text-primary italic">Caja</span></h2>
                                    <div className="flex items-center gap-3 mt-4">
                                        <div className="h-[1px] w-8 bg-primary/40" />
                                        <p className="text-surface/30 font-black text-[10px] uppercase tracking-[0.3em]">Auditoría de balances y cierres operativos</p>
                                    </div>
                                </div>
                                <div className="p-5 bg-white/5 border border-white/5 rounded-2xl text-primary shadow-xl">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                            </div>

                            <div className="bg-secondary/40 backdrop-blur-3xl rounded-[4rem] border border-white/5 shadow-2xl overflow-hidden relative">
                                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48 blur-[100px] pointer-events-none opacity-20" />
                                <div className="overflow-x-auto relative z-10">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b border-white/5">
                                                <th className="p-10 text-[10px] font-black text-surface/20 uppercase tracking-[0.4em]">Cajero</th>
                                                <th className="p-10 text-[10px] font-black text-surface/20 uppercase tracking-[0.4em]">Apertura</th>
                                                <th className="p-10 text-[10px] font-black text-surface/20 uppercase tracking-[0.4em]">Cierre</th>
                                                <th className="p-10 text-[10px] font-black text-surface/20 uppercase tracking-[0.4em]">Fondo Inicial</th>
                                                <th className="p-10 text-[10px] font-black text-surface/20 uppercase tracking-[0.4em]">Corte Final</th>
                                                <th className="p-10 text-[10px] font-black text-surface/20 uppercase tracking-[0.4em]">Diferencia</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5">
                                            {secondaryData?.map((r: any) => (
                                                <tr key={r.id} className="group hover:bg-white/5 transition-colors">
                                                    <td className="p-10">
                                                        <div className="flex items-center gap-4">
                                                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                                                <User className="w-6 h-6" />
                                                            </div>
                                                            <div>
                                                                <p className="font-black text-white uppercase tracking-tight group-hover:text-primary transition-colors">{r.openedBy.name}</p>
                                                                <p className="text-[9px] text-surface/20 font-mono tracking-tighter uppercase mt-1">{r.openedBy.email}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-10 text-[11px] text-surface/30 font-black uppercase tracking-widest">{new Date(r.openedAt).toLocaleString()}</td>
                                                    <td className="p-10 text-[11px] text-surface/30 font-black uppercase tracking-widest">
                                                        {r.closedAt ? new Date(r.closedAt).toLocaleString() : <span className="text-accent animate-pulse">EN CURSO</span>}
                                                    </td>
                                                    <td className="p-10 font-black text-white tabular-nums tracking-tighter text-xl">{formatCurrency(r.openingAmount)}</td>
                                                    <td className="p-10 font-black text-white tabular-nums tracking-tighter text-xl">{r.closingAmount ? formatCurrency(r.closingAmount) : "-"}</td>
                                                    <td className="p-10 font-black text-emerald-400 tabular-nums tracking-tighter text-2xl">
                                                        {r.closingAmount ? formatCurrency(r.closingAmount - r.openingAmount) : "-"}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            {/* Modals Implementation (Product, User, Movement) */}
            <AnimatePresence>
                {productModal.open && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-neutral-black/90 backdrop-blur-2xl" onClick={() => setProductModal({ ...productModal, open: false })} />
                        <motion.div initial={{ scale: 0.9, opacity: 0, y: 40 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 40 }} className="relative bg-[#1A1A1A] w-full max-w-xl rounded-[4rem] shadow-2xl overflow-hidden border border-white/5 flex flex-col max-h-[90vh]">
                            <div className="bg-secondary/40 p-10 text-white relative overflow-hidden shrink-0">
                                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -mr-32 -mt-32 blur-[100px] pointer-events-none opacity-20" />
                                <div className="relative z-10 flex justify-between items-center">
                                    <div>
                                        <h3 className="text-4xl font-black italic uppercase tracking-tighter leading-none">{productModal.editing ? "Editar" : "Nuevo"} <span className="text-primary">Producto</span></h3>
                                        <div className="flex items-center gap-3 mt-4">
                                            <div className="h-[1px] w-8 bg-primary/40" />
                                            <p className="text-surface/30 font-black text-[10px] uppercase tracking-[0.3em]">Configuración técnica del catálogo</p>
                                        </div>
                                    </div>
                                    <button onClick={() => setProductModal({ ...productModal, open: false })} className="w-14 h-14 bg-white/5 hover:bg-white/10 rounded-2xl transition-all text-white flex items-center justify-center border border-white/5 shadow-xl" title="Cerrar"><X /></button>
                                </div>
                            </div>

                            <div className="p-10 space-y-10 overflow-y-auto">
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="col-span-2">
                                        <label className="block text-[10px] font-black uppercase text-surface/20 mb-3 ml-6 tracking-[0.3em]">Nombre Comercial</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/5 rounded-[2rem] px-8 py-5 text-lg font-black text-white outline-none focus:bg-white/10 focus:border-primary/40 transition-all placeholder:text-surface/10" value={pForm.name} onChange={e => setPForm({ ...pForm, name: e.target.value })} placeholder="EJ: TORTILLA CLÁSICA" title="Nombre" />
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <label className="block text-[10px] font-black uppercase text-surface/20 mb-3 ml-6 tracking-[0.3em]">Precio Público</label>
                                        <div className="relative">
                                            <span className="absolute left-8 top-1/2 -translate-y-1/2 text-primary font-black">$</span>
                                            <input type="number" className="w-full bg-white/5 border border-white/5 rounded-[2rem] pl-14 pr-8 py-5 text-xl font-black text-white outline-none focus:bg-white/10 focus:border-primary/40 transition-all tabular-nums" value={pForm.pricePublic} onChange={e => setPForm({ ...pForm, pricePublic: Number(e.target.value) })} title="Precio Público" />
                                        </div>
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <label className="block text-[10px] font-black uppercase text-surface/20 mb-3 ml-6 tracking-[0.3em]">Precio Distribuidor</label>
                                        <div className="relative">
                                            <span className="absolute left-8 top-1/2 -translate-y-1/2 text-primary font-black">$</span>
                                            <input type="number" className="w-full bg-white/5 border border-white/5 rounded-[2rem] pl-14 pr-8 py-5 text-xl font-black text-white outline-none focus:bg-white/10 focus:border-primary/40 transition-all tabular-nums" value={pForm.priceDistributor} onChange={e => setPForm({ ...pForm, priceDistributor: Number(e.target.value) })} title="Precio Distribuidor" />
                                        </div>
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <label className="block text-[10px] font-black uppercase text-surface/20 mb-3 ml-6 tracking-[0.3em]">Unidad de Medida</label>
                                        <select className="w-full bg-white/5 border border-white/5 rounded-[2rem] px-8 py-5 text-[11px] font-black text-white outline-none focus:bg-white/10 focus:border-primary/40 transition-all cursor-pointer appearance-none uppercase tracking-widest" value={pForm.unitType} onChange={e => setPForm({ ...pForm, unitType: e.target.value })} title="Unidad">
                                            <option value="KG">KILOGRAMOS (KG)</option>
                                            <option value="PIEZA">PIEZA (PZA)</option>
                                            <option value="PAQUETE">PAQUETE (PQT)</option>
                                        </select>
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <label className="block text-[10px] font-black uppercase text-surface/20 mb-3 ml-6 tracking-[0.3em]">Mínimo para Alerta</label>
                                        <input type="number" className="w-full bg-white/5 border border-white/5 rounded-[2rem] px-8 py-5 text-xl font-black text-white outline-none focus:bg-white/10 focus:border-primary/40 transition-all tabular-nums" value={pForm.minimumStockAlert} onChange={e => setPForm({ ...pForm, minimumStockAlert: Number(e.target.value) })} title="Stock Mínimo" />
                                    </div>
                                </div>
                                {formError && <p className="text-accent text-[10px] font-black uppercase bg-accent/5 p-6 rounded-[2rem] text-center italic tracking-widest border border-accent/10">{formError}</p>}
                                <button
                                    onClick={handleSaveProduct}
                                    disabled={saving}
                                    className="w-full bg-primary text-secondary py-6 rounded-[2.5rem] font-black text-sm tracking-widest shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all disabled:grayscale shrink-0 relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform" />
                                    <span className="relative flex items-center justify-center gap-3">
                                        {saving ? <Loader2 className="w-6 h-6 animate-spin mx-auto" /> : "GUARDAR CONFIGURACIÓN"}
                                    </span>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}

                {userModal.open && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 text-white">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-neutral-black/90 backdrop-blur-2xl" onClick={() => setUserModal({ ...userModal, open: false })} />
                        <motion.div initial={{ scale: 0.9, opacity: 0, y: 40 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 40 }} className="relative bg-[#1A1A1A] w-full max-w-xl rounded-[4rem] shadow-2xl overflow-hidden border border-white/5 flex flex-col max-h-[90vh]">
                            <div className="bg-secondary/40 p-10 relative overflow-hidden shrink-0">
                                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -mr-32 -mt-32 blur-[100px] pointer-events-none opacity-20" />
                                <div className="relative z-10 flex justify-between items-center">
                                    <div>
                                        <h3 className="text-4xl font-black italic uppercase tracking-tighter leading-none">{userModal.editing ? "Perfil de" : "Nuevo"} <span className="text-primary">{userModal.editing ? "Colaborador" : "Acceso"}</span></h3>
                                        <div className="flex items-center gap-3 mt-4">
                                            <div className="h-[1px] w-8 bg-primary/40" />
                                            <p className="text-surface/30 font-black text-[10px] uppercase tracking-[0.3em]">Gestión de seguridad y privilegios</p>
                                        </div>
                                    </div>
                                    <button onClick={() => setUserModal({ ...userModal, open: false })} className="w-14 h-14 bg-white/5 hover:bg-white/10 rounded-2xl transition-all text-white flex items-center justify-center border border-white/5 shadow-xl" title="Cerrar"><X /></button>
                                </div>
                            </div>

                            <div className="p-10 space-y-10 overflow-y-auto">
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="col-span-2">
                                        <label className="block text-[10px] font-black uppercase text-surface/20 mb-3 ml-6 tracking-[0.3em]">Nombre Completo</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/5 rounded-[2rem] px-8 py-5 text-lg font-black text-white outline-none focus:bg-white/10 focus:border-primary/40 transition-all placeholder:text-surface/10" value={uForm.name} onChange={e => setUForm({ ...uForm, name: e.target.value })} placeholder="EJ: DIANA PRINCE" title="Nombre" />
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <label className="block text-[10px] font-black uppercase text-surface/20 mb-3 ml-6 tracking-[0.3em]">Correo Corporativo</label>
                                        <input type="email" className="w-full bg-white/5 border border-white/5 rounded-[2rem] px-8 py-5 text-base font-black text-white outline-none focus:bg-white/10 focus:border-primary/40 transition-all placeholder:text-surface/10" value={uForm.email} onChange={e => setUForm({ ...uForm, email: e.target.value })} placeholder="DIANA@TECHTORTILLERIA.COM" title="Email" />
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <label className="block text-[10px] font-black uppercase text-surface/20 mb-3 ml-6 tracking-[0.3em]">Rol Asignado</label>
                                        <select className="w-full bg-white/5 border border-white/5 rounded-[2rem] px-8 py-5 text-[11px] font-black text-white outline-none focus:bg-white/10 focus:border-primary/40 transition-all cursor-pointer appearance-none uppercase tracking-widest" value={uForm.role} onChange={e => setUForm({ ...uForm, role: e.target.value })} title="Rol">
                                            <option value="CAJERO">CAJERO OPERATIVO</option>
                                            <option value="ADMIN">ADMINISTRADOR GENERAL</option>
                                        </select>
                                    </div>
                                    <div className="col-span-2">
                                        <label className="block text-[10px] font-black uppercase text-surface/20 mb-3 ml-6 tracking-[0.3em]">Contraseña {userModal.editing ? "(DEJAR VACÍO PARA MANTENER)" : ""}</label>
                                        <input type="password" className="w-full bg-white/5 border border-white/5 rounded-[2rem] px-8 py-5 text-lg font-black text-white outline-none focus:bg-white/10 focus:border-primary/40 transition-all placeholder:text-surface/10" value={uForm.password} onChange={e => setUForm({ ...uForm, password: e.target.value })} placeholder="••••••••" title="Contraseña" />
                                    </div>
                                </div>

                                {formError && (
                                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-accent text-[10px] font-black uppercase bg-accent/5 p-6 rounded-[2rem] text-center italic tracking-widest border border-accent/10">
                                        {formError}
                                    </motion.p>
                                )}

                                <button
                                    onClick={handleSaveUser}
                                    disabled={saving}
                                    className="w-full bg-primary text-secondary py-6 rounded-[2.5rem] font-black text-sm tracking-widest shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all disabled:grayscale shrink-0 relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform" />
                                    <span className="relative flex items-center justify-center gap-3">
                                        {saving ? <Loader2 className="w-8 h-8 animate-spin mx-auto" /> : (userModal.editing ? "ACTUALIZAR CREDENCIALES" : "REGISTRAR COLABORADOR")}
                                    </span>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}

                {movementModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 text-white text-white">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-neutral-black/90 backdrop-blur-2xl" onClick={() => setMovementModal(false)} />
                        <motion.div initial={{ scale: 0.9, opacity: 0, y: 40 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 40 }} className="relative bg-[#1A1A1A] w-full max-w-xl rounded-[4rem] shadow-2xl overflow-hidden border border-white/5 flex flex-col max-h-[90vh]">
                            <div className="bg-secondary/40 p-10 relative overflow-hidden shrink-0">
                                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -mr-32 -mt-32 blur-[100px] pointer-events-none opacity-20" />
                                <div className="relative z-10 flex justify-between items-center">
                                    <div>
                                        <h3 className="text-4xl font-black italic uppercase tracking-tighter leading-none">Ajuste de <span className="text-primary">Stock</span></h3>
                                        <div className="flex items-center gap-3 mt-4">
                                            <div className="h-[1px] w-8 bg-primary/40" />
                                            <p className="text-surface/30 font-black text-[10px] uppercase tracking-[0.3em]">Sincronización manual de activos</p>
                                        </div>
                                    </div>
                                    <button onClick={() => setMovementModal(false)} className="w-14 h-14 bg-white/5 hover:bg-white/10 rounded-2xl transition-all text-white flex items-center justify-center border border-white/5 shadow-xl" title="Cerrar"><X /></button>
                                </div>
                            </div>

                            <div className="p-10 space-y-10 overflow-y-auto">
                                <div className="grid grid-cols-1 gap-8">
                                    <div>
                                        <label className="block text-[10px] font-black uppercase text-surface/20 mb-3 ml-6 tracking-[0.3em]">Seleccionar Producto</label>
                                        <select className="w-full bg-white/5 border border-white/5 rounded-[2rem] px-8 py-5 text-[11px] font-black text-white outline-none focus:bg-white/10 focus:border-primary/40 transition-all cursor-pointer appearance-none uppercase tracking-widest" value={mForm.productId} onChange={e => setMForm({ ...mForm, productId: e.target.value })} title="Producto">
                                            <option value="">SELECCIONA UN ACTIVO...</option>
                                            {secondaryData?.products?.map((p: any) => (<option key={p.id} value={p.id}>{p.name.toUpperCase()} (ACTUAL: {p.stock} {p.unit})</option>))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black uppercase text-surface/20 mb-3 ml-6 tracking-[0.3em]">Tipo de Movimiento</label>
                                        <select className="w-full bg-white/5 border border-white/5 rounded-[2rem] px-8 py-5 text-[11px] font-black text-white outline-none focus:bg-white/10 focus:border-primary/40 transition-all cursor-pointer appearance-none uppercase tracking-widest" value={mForm.movementType} onChange={e => setMForm({ ...mForm, movementType: e.target.value })} title="Tipo">
                                            <option value="entrada_produccion">ENTRADA (PRODUCCIÓN)</option>
                                            <option value="merma">MERMA / DESPERDICIO (-)</option>
                                            <option value="ajuste_manual">AJUSTE DE AUDITORÍA (+/-)</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black uppercase text-surface/20 mb-3 ml-6 tracking-[0.3em]">Cantidad a Afectar</label>
                                        <input type="number" className="w-full bg-white/5 border border-white/5 rounded-[2rem] px-8 py-5 text-xl font-black text-white outline-none focus:bg-white/10 focus:border-primary/40 transition-all tabular-nums placeholder:text-surface/10" value={mForm.quantity} onChange={e => setMForm({ ...mForm, quantity: Number(e.target.value) })} placeholder="0" title="Cantidad" />
                                    </div>
                                </div>

                                {formError && (
                                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-accent text-[10px] font-black uppercase bg-accent/5 p-6 rounded-[2rem] text-center italic tracking-widest border border-accent/10">
                                        {formError}
                                    </motion.p>
                                )}

                                <button
                                    onClick={handleSaveMovement}
                                    disabled={saving}
                                    className="w-full bg-primary text-secondary py-6 rounded-[2.5rem] font-black text-sm tracking-widest shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all disabled:grayscale shrink-0 relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform" />
                                    <span className="relative flex items-center justify-center gap-3">
                                        {saving ? <Loader2 className="w-6 h-6 animate-spin mx-auto" /> : "PROCESAR AJUSTE"}
                                    </span>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}

                {saleDetailModal.open && saleDetailModal.data && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 text-white text-white">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-neutral-black/90 backdrop-blur-2xl" onClick={() => setSaleDetailModal({ open: false, data: null })} />
                        <motion.div initial={{ scale: 0.9, opacity: 0, y: 40 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 40 }} className="relative bg-[#1A1A1A] w-full max-w-2xl rounded-[4rem] shadow-2xl overflow-hidden border border-white/5 flex flex-col max-h-[90vh]">
                            <div className="bg-secondary/40 p-10 relative overflow-hidden shrink-0 border-b border-white/5">
                                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full -mr-32 -mt-32 blur-[100px] pointer-events-none opacity-20" />
                                <div className="relative z-10 flex justify-between items-center">
                                    <div>
                                        <h3 className="text-4xl font-black italic uppercase tracking-tighter leading-none">Detalle de <span className="text-emerald-400">Auditoría</span></h3>
                                        <div className="flex items-center gap-3 mt-4">
                                            <div className="h-[1px] w-8 bg-emerald-500/40" />
                                            <p className="text-surface/30 font-black text-[10px] uppercase tracking-[0.3em]">Venta #{saleDetailModal.data.id.slice(-8).toUpperCase()}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => setSaleDetailModal({ open: false, data: null })} className="w-14 h-14 bg-white/5 hover:bg-white/10 rounded-2xl transition-all text-white flex items-center justify-center border border-white/5 shadow-xl" title="Cerrar"><X /></button>
                                </div>
                            </div>

                            <div className="p-10 space-y-8 overflow-y-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-white/5 p-6 rounded-[2rem] border border-white/5 shadow-xl group hover:bg-white/10 transition-all">
                                        <p className="text-[10px] font-black text-surface/20 uppercase mb-2 tracking-[0.3em] ml-2">Colaborador</p>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                                <User className="w-5 h-5" />
                                            </div>
                                            <p className="font-black text-lg text-white uppercase tracking-tight">{saleDetailModal.data.user?.name || "SISTEMA"}</p>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 p-6 rounded-[2rem] border border-white/5 shadow-xl group hover:bg-white/10 transition-all">
                                        <p className="text-[10px] font-black text-surface/20 uppercase mb-2 tracking-[0.3em] ml-2">Fecha y Hora</p>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-surface/30 group-hover:scale-110 transition-transform">
                                                <Clock className="w-5 h-5" />
                                            </div>
                                            <p className="font-black text-base text-white/60 tracking-widest">{new Date(saleDetailModal.data.createdAt).toLocaleString().toUpperCase()}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 rounded-[3rem] p-8 border border-white/5 shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-[80px] pointer-events-none opacity-20" />
                                    <div className="flex items-center gap-3 mb-6 ml-2">
                                        <Package className="w-4 h-4 text-primary" />
                                        <p className="text-[10px] font-black text-surface/30 uppercase tracking-[0.4em]">Artículos Desglosados</p>
                                    </div>
                                    <div className="space-y-4 max-h-[350px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                                        {saleDetailModal.data.saleItems.map((item: any, i: number) => (
                                            <div key={i} className="flex justify-between items-center bg-[#252525] p-6 rounded-[2rem] border border-white/5 group hover:border-primary/20 hover:translate-x-2 transition-all shadow-lg">
                                                <div className="flex flex-col">
                                                    <span className="font-black text-base text-white uppercase tracking-tight group-hover:text-primary transition-colors">{item.product?.name || "PRODUCTO"}</span>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <span className="text-[9px] font-black text-surface/20 uppercase tracking-[0.2em]">{item.quantity} UNIDADES</span>
                                                        <span className="w-1 h-1 bg-white/10 rounded-full" />
                                                        <span className="text-[9px] font-black text-primary/60 uppercase tracking-[0.2em]">{formatCurrency(item.unitPrice)} C/U</span>
                                                    </div>
                                                </div>
                                                <span className="font-black text-xl text-white tabular-nums tracking-tighter">{formatCurrency(item.subtotal)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-primary p-10 rounded-[3.5rem] shadow-2xl shadow-primary/20 flex flex-col md:flex-row justify-between items-center gap-8 group">
                                    <div>
                                        <p className="text-[10px] font-black text-secondary/40 uppercase tracking-[0.4em] mb-2 ml-2">Total Transacción</p>
                                        <h4 className="text-6xl font-black text-secondary tracking-tighter tabular-nums leading-none">
                                            {formatCurrency(saleDetailModal.data.totalAmount)}
                                        </h4>
                                    </div>
                                    <button
                                        onClick={() => generateTicketPDF(saleDetailModal.data.saleItems.map((si: any) => ({ ...si, name: si.product?.name || "Producto", priceAtTime: si.unitPrice })), saleDetailModal.data.totalAmount)}
                                        className="w-full md:w-auto bg-secondary text-primary px-10 py-6 rounded-[2rem] font-black flex items-center justify-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-black/40 text-[11px] uppercase tracking-[0.2em]"
                                    >
                                        <Printer className="w-6 h-6" /> REIMPRIMIR TICKET
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}


function KpiCard({ title, value, icon, color, growth, important = false }: { title: string, value: string, icon: React.ReactNode, color: string, growth?: number, important?: boolean }) {
    return (
        <div className={cn(
            "relative overflow-hidden bg-secondary/40 backdrop-blur-3xl p-6 md:p-8 rounded-[2.5rem] border border-white/5 shadow-2xl group hover:border-primary/20 transition-all cursor-default",
            important && "ring-2 ring-accent/20 border-accent/20"
        )}>
            {/* Animated Glow */}
            <div className={cn(
                "absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 blur-3xl opacity-20 group-hover:opacity-40 transition-all duration-700",
                color
            )} />

            <div className="relative z-10 flex justify-between items-start mb-10">
                <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500",
                    color
                )}>
                    {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "w-7 h-7" }) : icon}
                </div>
                {growth !== undefined && (
                    <div className={cn(
                        "flex items-center gap-1.5 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg backdrop-blur-md transition-all",
                        growth >= 0 ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"
                    )}>
                        {growth >= 0 ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                        {Math.abs(growth)}%
                    </div>
                )}
            </div>

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                    <div className="h-[1px] w-4 bg-white/10" />
                    <p className="text-surface/30 font-black uppercase tracking-[0.3em] text-[9px]">{title}</p>
                </div>
                <h4 className="text-3xl sm:text-4xl font-black text-white tracking-tighter truncate tabular-nums group-hover:text-primary transition-colors">
                    {value}
                </h4>
            </div>
        </div>
    );
}

function AdminNavItem({ icon, label, active = false, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            title={label}
            className={cn(
                "w-full flex items-center justify-between p-5 rounded-[1.5rem] transition-all font-black text-left group relative overflow-hidden",
                active ? "bg-primary text-secondary shadow-xl shadow-primary/10" : "hover:bg-white/5 text-surface/30 hover:text-white"
            )}
        >
            {active && (
                <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
            )}

            <div className="flex items-center gap-5 relative z-10">
                <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center transition-colors shadow-lg",
                    active ? "bg-secondary/10" : "bg-white/5 group-hover:bg-primary/10 group-hover:text-primary"
                )}>
                    {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "w-5 h-5 transition-transform group-hover:scale-110" })}
                </div>
                <span className="uppercase text-[11px] tracking-[0.2em]">{label}</span>
            </div>
            {!active && <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all relative z-10" />}
        </button>
    );
}
