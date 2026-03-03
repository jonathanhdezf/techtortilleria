"use client";

import { useState, useEffect } from "react";
import {
    TrendingUp, TrendingDown, Users, ShoppingCart, AlertCircle,
    BarChart3, Settings, LogOut, Search, Bell, Loader2,
    Package, ClipboardList, UserCog, History, X, Plus, Pencil, ToggleLeft, ToggleRight, Truck, Trash2, Printer, Eye,
    ArrowUpRight, ArrowDownRight, Scale
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
            <div className="h-screen w-full flex flex-col items-center justify-center bg-surface noise">
                <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
                <p className="text-secondary font-bold tracking-widest uppercase text-xs">Cargando Sistema Administrativo...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-surface flex noise overflow-hidden relative">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-secondary/60 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar Navigation */}
            <aside className={cn(
                "fixed lg:relative inset-y-0 left-0 z-50 w-72 bg-secondary text-surface flex flex-col border-r border-white/5 transition-transform duration-300 transform lg:translate-x-0 overflow-y-auto",
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="p-8">
                    <div className="mb-12">
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

                <div className="mt-auto p-6 border-t border-white/5">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 text-surface/40 hover:text-white transition-colors group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                            <LogOut className="w-5 h-5 group-hover:text-red-500 transition-colors" />
                        </div>
                        <span className="hidden lg:block font-bold">Cerrar Sesión</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto">
                <div className="max-w-7xl mx-auto p-4 md:p-8 lg:p-12">
                    <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className="lg:hidden p-2 -ml-2 text-secondary hover:bg-secondary/5 rounded-xl transition-colors"
                                title="Abrir menú"
                            >
                                <BarChart3 className="w-6 h-6" />
                            </button>
                            <div>
                                <h1 className="text-4xl font-black text-secondary tracking-tight uppercase italic underline decoration-primary decoration-4 underline-offset-8">Panel de Control</h1>
                                <p className="text-secondary/40 font-bold mt-2 uppercase tracking-widest text-xs">Visión General del Negocio</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <div className="relative flex-1 md:w-64">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary/30" />
                                <input type="text" placeholder="Buscar pedido..." className="w-full pl-12 pr-4 py-3 bg-white border border-secondary/5 rounded-2xl text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none" title="Buscar" />
                            </div>
                            <button className="p-3 bg-white border border-secondary/5 rounded-2xl relative" title="Notificaciones">
                                <Bell className="w-5 h-5 text-secondary/40" />
                                <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-white" />
                            </button>
                        </div>
                    </header>

                    {activeTab === "dashboard" && metrics && (
                        <div className="space-y-12">
                            {/* Key Performance Indicators */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                            <div className="bg-white p-8 md:p-10 rounded-[3rem] border border-secondary/5 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48 blur-3xl pointer-events-none" />
                                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                                    <div>
                                        <h3 className="text-2xl font-black text-secondary uppercase italic tracking-tighter">Rendimiento Operativo</h3>
                                        <p className="text-secondary/40 font-bold text-[10px] uppercase tracking-[0.2em] mt-1">Análisis de ventas • Últimos 7 días</p>
                                    </div>
                                    <button className="group relative px-6 py-3 bg-secondary text-primary rounded-2xl font-black text-[10px] uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95">
                                        <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform" />
                                        <span className="relative">Descargar Reporte</span>
                                    </button>
                                </div>
                                <div className="h-[350px] w-full relative z-10">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={metrics.chartData}>
                                            <defs>
                                                <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#F5D061" stopOpacity={0.4} />
                                                    <stop offset="95%" stopColor="#F5D061" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <CartesianGrid strokeDasharray="8 8" vertical={false} stroke="#f1f1f1" />
                                            <XAxis
                                                dataKey="name"
                                                axisLine={false}
                                                tickLine={false}
                                                tick={{ fontSize: 10, fontWeight: '900', fill: '#040b26', opacity: 0.3 }}
                                                dy={15}
                                            />
                                            <YAxis
                                                axisLine={false}
                                                tickLine={false}
                                                tick={{ fontSize: 10, fontWeight: '900', fill: '#040b26', opacity: 0.3 }}
                                                dx={-15}
                                            />
                                            <Tooltip
                                                contentStyle={{
                                                    borderRadius: '24px',
                                                    border: '1px solid rgba(4,11,38,0.05)',
                                                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
                                                    padding: '20px',
                                                    background: 'rgba(255,255,255,0.95)',
                                                    backdropFilter: 'blur(10px)'
                                                }}
                                                itemStyle={{ fontSize: '12px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1px' }}
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="revenue"
                                                stroke="#F5D061"
                                                strokeWidth={6}
                                                fillOpacity={1}
                                                fill="url(#colorRev)"
                                                animationDuration={2000}
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            {/* Secondary Data Grids */}
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                                {/* Critical Products Card Grid */}
                                <div className="space-y-6">
                                    <div className="flex justify-between items-end px-4">
                                        <div>
                                            <h3 className="text-xl font-black text-secondary uppercase italic">Alertas de Stock</h3>
                                            <p className="text-secondary/30 font-bold text-[9px] uppercase tracking-widest mt-1">Suministros por debajo del mínimo</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4">
                                        {secondaryData?.products?.filter((p: any) => p.stock <= p.minStock).slice(0, 4).map((p: any) => (
                                            <div key={p.id} className="bg-white p-5 rounded-3xl border border-secondary/5 shadow-xl flex items-center justify-between group hover:shadow-2xl transition-all">
                                                <div className="flex items-center gap-5">
                                                    <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                                                        <AlertCircle className="w-6 h-6" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-black text-secondary group-hover:text-primary transition-colors uppercase tracking-tight">{p.name}</h4>
                                                        <div className="flex items-center gap-2 text-[9px] font-black text-secondary/30 uppercase tracking-widest mt-1">
                                                            <span>Activo: {p.stock}</span>
                                                            <span className="w-1 h-1 bg-secondary/10 rounded-full" />
                                                            <span>Mín: {p.minStock}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button onClick={() => switchTab("inventario")} className="p-3 bg-surface hover:bg-secondary hover:text-primary rounded-xl transition-colors">
                                                    <Package className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Active Inventory Cards */}
                                <div className="space-y-6">
                                    <div className="flex justify-between items-end px-4">
                                        <div>
                                            <h3 className="text-xl font-black text-secondary uppercase italic">Inventario Activo</h3>
                                            <p className="text-secondary/30 font-bold text-[9px] uppercase tracking-widest mt-1">Estado actual del catálogo</p>
                                        </div>
                                        <button onClick={() => switchTab("inventario")} className="text-[9px] font-black text-primary border-b border-primary/20 pb-1 uppercase tracking-widest">Ver todo</button>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {metrics.inventory.slice(0, 4).map((p: any) => (
                                            <div key={p.id} className="bg-white p-6 rounded-[2rem] border border-secondary/5 shadow-xl flex flex-col items-center text-center group hover:bg-secondary transition-all">
                                                <p className="text-[8px] font-black text-secondary/20 group-hover:text-primary/40 uppercase tracking-widest mb-2">{p.unit}</p>
                                                <h4 className="font-black text-secondary group-hover:text-primary transition-colors text-lg truncate w-full px-2 mb-4">{p.name}</h4>
                                                <div className="w-full bg-surface/50 group-hover:bg-primary/10 p-3 rounded-2xl mb-4 transition-colors">
                                                    <span className="text-3xl font-black text-secondary tabular-nums tracking-tighter group-hover:text-primary transition-colors">{p.stock}</span>
                                                </div>
                                                <span className={cn(
                                                    "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest",
                                                    p.stock <= p.minStock ? "bg-red-500 text-white" : "bg-emerald-500/10 text-emerald-600 group-hover:bg-primary group-hover:text-secondary"
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
                        <div className="space-y-10">
                            <div className="flex justify-between items-end">
                                <div>
                                    <h2 className="text-4xl font-black text-secondary uppercase italic tracking-tighter">Historial de Ventas</h2>
                                    <p className="text-secondary/40 font-bold text-xs uppercase tracking-[0.2em] mt-2">Auditoría completa de transacciones POS</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                {secondaryData?.map((sale: any) => (
                                    <div key={sale.id} className="bg-white p-6 md:p-8 rounded-[2rem] border border-secondary/5 shadow-xl flex flex-col md:flex-row justify-between items-center gap-6 group hover:translate-x-2 transition-all">
                                        <div className="flex items-center gap-6 flex-1">
                                            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform text-emerald-600">
                                                <History className="w-8 h-8" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-1">
                                                    <span className="font-mono text-xs font-black text-secondary/40 uppercase tracking-tighter">#{sale.id.slice(-8).toUpperCase()}</span>
                                                    <span className="px-3 py-1 bg-secondary text-primary rounded-full text-[9px] font-black uppercase tracking-widest">Venta POS</span>
                                                </div>
                                                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                                                    <div className="flex flex-col">
                                                        <span className="text-lg font-black text-secondary group-hover:text-primary transition-colors">{sale.user?.name || "Sistema"}</span>
                                                        <span className="text-[10px] font-bold text-secondary/30 uppercase tracking-widest">{new Date(sale.createdAt).toLocaleString()}</span>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-lg font-black text-emerald-600">{formatCurrency(sale.totalAmount)}</span>
                                                        <span className="text-[10px] font-bold text-secondary/30 uppercase tracking-widest">{sale.saleItems?.length} Productos</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 w-full md:w-auto">
                                            <button
                                                onClick={() => setSaleDetailModal({ open: true, data: sale })}
                                                className="flex-1 md:flex-none p-5 bg-surface hover:bg-secondary hover:text-primary rounded-2xl transition-all border border-secondary/5 text-secondary/40 flex items-center gap-3 group/btn"
                                                title="Ver Detalles"
                                            >
                                                <Eye className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                                                <span className="font-black text-[10px] uppercase tracking-widest md:hidden lg:block">Auditar Venta</span>
                                            </button>
                                            <button
                                                onClick={() => generateTicketPDF(sale.saleItems.map((si: any) => ({ ...si, name: si.product?.name || "Producto", priceAtTime: si.unitPrice })), sale.totalAmount)}
                                                className="flex-1 md:flex-none p-5 bg-primary/10 hover:bg-primary text-primary hover:text-secondary rounded-2xl transition-all border border-primary/20 flex items-center justify-center gap-3 group/print"
                                                title="Reimprimir Ticket"
                                            >
                                                <Printer className="w-5 h-5 group-hover/print:scale-110 transition-transform" />
                                                <span className="font-black text-[10px] uppercase tracking-widest md:hidden lg:block">Reimprimir</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "distribuidores" && (
                        <div className="space-y-8">
                            <div className="flex justify-between items-center mb-8">
                                <div>
                                    <h2 className="text-2xl font-black text-secondary uppercase italic">Pedidos de Distribuidores</h2>
                                    <p className="text-secondary/40 font-bold text-xs uppercase tracking-widest mt-1">Gestión de suministros y rutas de entrega.</p>
                                </div>
                                <button title="Actualizar Datos" onClick={loadData} className="p-2 hover:bg-surface rounded-xl transition-colors">
                                    <BarChart3 className="w-5 h-5 text-secondary/30" />
                                </button>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                {secondaryData?.map((order: any) => (
                                    <div key={order.id} className="bg-white p-6 md:p-8 rounded-[2rem] border border-secondary/5 shadow-xl flex flex-col md:flex-row justify-between items-center gap-6 group hover:-translate-y-1 transition-all">
                                        <div className="flex items-center gap-6">
                                            <div className={cn(
                                                "w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform",
                                                order.status === "PENDIENTE" ? "bg-amber-100 text-amber-600" :
                                                    order.status === "PROCESANDO" ? "bg-blue-100 text-blue-600" :
                                                        order.status === "ENTREGADO" ? "bg-green-100 text-green-600" : "bg-zinc-100 text-zinc-400"
                                            )}>
                                                <Truck className="w-8 h-8" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-sm font-black text-secondary">{order.distributor?.name || "Distribuidor Desconocido"}</span>
                                                    <span className="text-[10px] font-bold text-secondary/20 uppercase tracking-widest">• #{order.id.slice(-4)}</span>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <span className="text-2xl font-black text-secondary">{formatCurrency(order.totalAmount)}</span>
                                                    <span className="text-xs font-bold text-secondary/40">{order.orderItems?.length || 0} tipos de productos</span>
                                                </div>
                                                <p className="text-xs text-secondary/20 font-bold mt-1 uppercase italic">{new Date(order.createdAt).toLocaleString()}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 self-stretch md:self-center">
                                            <div className="flex-1 md:flex-none">
                                                <select
                                                    value={order.status}
                                                    onChange={(e) => updateOrderStatusAction(order.id, e.target.value).then(loadData)}
                                                    className="w-full bg-surface px-4 py-3 rounded-xl text-xs font-black uppercase tracking-widest text-secondary focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer"
                                                    title="Cambiar Estado"
                                                >
                                                    <option value="PENDIENTE">Pendiente</option>
                                                    <option value="PROCESANDO">En Proceso</option>
                                                    <option value="ENTREGADO">Entregado</option>
                                                    <option value="CANCELADO">Cancelado</option>
                                                </select>
                                            </div>
                                            <button className="p-3 hover:bg-surface rounded-xl transition-colors border border-secondary/5" title="Detalles">
                                                <Plus className="w-5 h-5 text-secondary/30" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "productos" && (
                        <div className="space-y-10">
                            <div className="flex justify-between items-end">
                                <div>
                                    <h2 className="text-4xl font-black text-secondary uppercase italic tracking-tighter">Catálogo de Productos</h2>
                                    <p className="text-secondary/40 font-bold text-xs uppercase tracking-[0.2em] mt-2">Inventario maestro y configuración de precios</p>
                                </div>
                                <button
                                    onClick={openNewProduct}
                                    className="group relative overflow-hidden bg-secondary text-primary px-8 py-4 rounded-2xl font-black shadow-2xl transition-all hover:scale-105 active:scale-95"
                                >
                                    <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform" />
                                    <span className="relative flex items-center gap-2">
                                        <Plus className="w-5 h-5" /> NUEVO PRODUCTO
                                    </span>
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {secondaryData?.map((p: any) => (
                                    <div key={p.id} className="bg-white p-6 rounded-[2.5rem] border border-secondary/5 shadow-xl group hover:shadow-2xl transition-all relative overflow-hidden">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className={cn(
                                                "p-4 rounded-2xl shadow-lg transform group-hover:-rotate-6 transition-transform",
                                                p.active ? "bg-primary text-secondary" : "bg-secondary/10 text-secondary/30"
                                            )}>
                                                <Package className="w-6 h-6" />
                                            </div>
                                            <button
                                                onClick={() => toggleProductActiveAction(p.id, !p.active).then(loadData)}
                                                title={p.active ? "Desactivar Producto" : "Activar Producto"}
                                                className={cn(
                                                    "w-12 h-6 rounded-full relative transition-colors duration-300",
                                                    p.active ? "bg-primary/40" : "bg-secondary/10"
                                                )}
                                            >
                                                <motion.div
                                                    animate={{ x: p.active ? 24 : 4 }}
                                                    className={cn("w-4 h-4 rounded-full absolute top-1 shadow-sm", p.active ? "bg-secondary" : "bg-secondary/20")}
                                                />
                                            </button>
                                        </div>

                                        <h4 className="text-xl font-black text-secondary mb-1 group-hover:text-primary transition-colors">{p.name}</h4>
                                        <p className="text-[10px] font-black text-secondary/30 uppercase tracking-[0.2em] mb-6">{p.unitType} • {p.active ? "Activo" : "Deshabilitado"}</p>

                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="bg-surface p-4 rounded-2xl border border-secondary/5">
                                                <p className="text-[8px] font-black text-secondary/30 uppercase mb-1">Precio Público</p>
                                                <p className="text-lg font-black text-secondary/60">{formatCurrency(p.pricePublic)}</p>
                                            </div>
                                            <div className="bg-secondary/5 p-4 rounded-2xl border border-secondary/5">
                                                <p className="text-[8px] font-black text-secondary/30 uppercase mb-1">Distribuidor</p>
                                                <p className="text-lg font-black text-secondary">{formatCurrency(p.priceDistributor)}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between pt-6 border-t border-secondary/5">
                                            <div className="flex items-center gap-2">
                                                <div className={cn(
                                                    "w-2 h-2 rounded-full animate-pulse",
                                                    p.stockQuantity < p.minimumStockAlert ? "bg-accent" : "bg-emerald-500"
                                                )} />
                                                <span className={cn(
                                                    "text-sm font-black",
                                                    p.stockQuantity < p.minimumStockAlert ? "text-accent" : "text-emerald-600"
                                                )}>
                                                    Stock: {p.stockQuantity}
                                                </span>
                                            </div>
                                            <button
                                                onClick={() => openEditProduct(p)}
                                                className="p-3 bg-surface hover:bg-secondary hover:text-primary rounded-xl transition-all"
                                                title="Editar Producto"
                                            >
                                                <Pencil className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "inventario" && (
                        <div className="space-y-12">
                            {/* Header & Quick Action */}
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                                <div>
                                    <h2 className="text-4xl font-black text-secondary uppercase italic tracking-tighter">Control de Inventario</h2>
                                    <p className="text-secondary/40 font-bold text-xs uppercase tracking-[0.2em] mt-2">Monitoreo de activos y flujo de mercancía</p>
                                </div>
                                <button
                                    onClick={() => { setMovementModal(true); setFormError(""); }}
                                    className="group relative overflow-hidden bg-secondary text-primary px-8 py-4 rounded-2xl font-black shadow-2xl transition-all hover:scale-105 active:scale-95"
                                >
                                    <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform" />
                                    <span className="relative flex items-center gap-2">
                                        <Plus className="w-5 h-5" /> AJUSTE MANUAL
                                    </span>
                                </button>
                            </div>

                            {/* Premium Stock Cards Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {secondaryData?.products?.map((p: any) => (
                                    <div key={p.id} className="bg-white p-6 rounded-[2.5rem] border border-secondary/5 shadow-xl group hover:shadow-2xl transition-all relative overflow-hidden">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className={cn(
                                                "p-4 rounded-2xl shadow-lg transform group-hover:-rotate-12 transition-transform",
                                                p.stock <= p.minStock ? "bg-red-500 text-white" : "bg-emerald-500 text-white"
                                            )}>
                                                <Package className="w-5 h-5" />
                                            </div>
                                            <div className="text-right">
                                                <p className="text-[10px] font-black text-secondary/20 uppercase tracking-widest">Estado</p>
                                                <p className={cn(
                                                    "text-[10px] font-black uppercase tracking-widest",
                                                    p.stock <= p.minStock ? "text-red-500" : "text-emerald-600"
                                                )}>
                                                    {p.stock <= p.minStock ? "Crítico" : "Saludable"}
                                                </p>
                                            </div>
                                        </div>

                                        <h4 className="text-xl font-black text-secondary mb-1 group-hover:text-primary transition-colors">{p.name}</h4>
                                        <p className="text-[10px] font-black text-secondary/30 uppercase tracking-[0.2em] mb-6">{p.unit}</p>

                                        <div className="bg-surface p-5 rounded-3xl border border-secondary/5 mb-2">
                                            <p className="text-[8px] font-black text-secondary/30 uppercase mb-1 tracking-widest text-center">Stock Disponible</p>
                                            <p className="text-4xl font-black text-secondary text-center tabular-nums tracking-tighter">{p.stock}</p>
                                        </div>

                                        <div className="flex items-center justify-between text-[10px] font-bold text-secondary/30 uppercase px-2">
                                            <span>Mín: {p.minStock}</span>
                                            <div className="flex-1 mx-4 h-1 bg-secondary/5 rounded-full relative overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${Math.min(100, (p.stock / (p.minStock * 2)) * 100)}%` }}
                                                    transition={{ duration: 1, ease: "easeOut" }}
                                                    className={cn("h-full", p.stock <= p.minStock ? "bg-red-500" : "bg-emerald-500")}
                                                />
                                            </div>
                                            <span>Óptimo</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Movement History Timeline */}
                            <div className="bg-white p-8 md:p-10 rounded-[3rem] border border-secondary/5 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />

                                <div className="relative z-10 mb-10">
                                    <h3 className="text-2xl font-black text-secondary uppercase italic">Bitácora de Movimientos</h3>
                                    <p className="text-secondary/40 font-bold text-xs uppercase tracking-widest mt-1">Trazabilidad histórica de inventario</p>
                                </div>

                                <div className="relative z-10 space-y-4">
                                    {secondaryData?.movements?.map((m: any) => {
                                        const isEntry = m.movementType.includes("entrada") || m.quantity > 0;
                                        const typeIcon = m.movementType === "entrada_produccion" ? <ArrowUpRight /> :
                                            m.movementType === "merma" ? <ArrowDownRight /> :
                                                m.movementType === "ajuste_manual" ? <Scale /> :
                                                    m.movementType === "venta_distribuidor" ? <Truck /> : <ShoppingCart />;
                                        const typeColor = m.movementType === "entrada_produccion" ? "bg-emerald-500" :
                                            m.movementType === "merma" ? "bg-red-500" :
                                                m.movementType === "ajuste_manual" ? "bg-indigo-500" : "bg-secondary";

                                        return (
                                            <div key={m.id} className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-3xl bg-surface/50 border border-secondary/5 hover:bg-white hover:shadow-xl transition-all group">
                                                <div className={cn(
                                                    "w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0 group-hover:scale-110 transition-transform",
                                                    typeColor
                                                )}>
                                                    {typeIcon}
                                                </div>

                                                <div className="flex-1 text-center md:text-left">
                                                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                                                        <span className="font-black text-secondary text-lg group-hover:text-primary transition-colors">{m.productName}</span>
                                                        <span className="hidden md:block w-1 h-1 bg-secondary/10 rounded-full" />
                                                        <span className="text-[10px] font-black uppercase tracking-widest text-secondary/30">{m.movementType.replace(/_/g, " ")}</span>
                                                    </div>
                                                    <div className="flex flex-col md:flex-row md:items-center gap-4 text-[10px] font-bold text-secondary/20 uppercase tracking-widest">
                                                        <span>{new Date(m.createdAt).toLocaleString()}</span>
                                                        <span className="hidden md:block">•</span>
                                                        <span className="font-mono text-[9px]">{m.referenceId || "AJUSTE MANUAL"}</span>
                                                    </div>
                                                </div>

                                                <div className="text-right shrink-0">
                                                    <span className={cn(
                                                        "text-2xl font-black tracking-tighter tabular-nums",
                                                        isEntry ? "text-emerald-600" : "text-red-500"
                                                    )}>
                                                        {m.quantity > 0 ? `+${m.quantity}` : m.quantity}
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "usuarios" && (
                        <div className="space-y-10">
                            <div className="flex justify-between items-end">
                                <div>
                                    <h2 className="text-4xl font-black text-secondary uppercase italic tracking-tighter">Gestión de Personal</h2>
                                    <p className="text-secondary/40 font-bold text-xs uppercase tracking-[0.2em] mt-2">Control de accesos y perfiles operativos</p>
                                </div>
                                <button
                                    onClick={() => {
                                        setUserModal({ open: true, editing: false, data: null });
                                        setUForm({ name: "", email: "", password: "", role: "CAJERO" });
                                        setFormError("");
                                    }}
                                    className="group relative overflow-hidden bg-secondary text-primary px-8 py-4 rounded-2xl font-black shadow-2xl transition-all hover:scale-105 active:scale-95"
                                >
                                    <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform" />
                                    <span className="relative flex items-center gap-2">
                                        <Plus className="w-5 h-5" /> NUEVO COLABORADOR
                                    </span>
                                </button>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                {secondaryData?.map((u: any) => (
                                    <div key={u.id} className="bg-white p-6 md:p-8 rounded-[2rem] border border-secondary/5 shadow-xl flex flex-col md:flex-row justify-between items-center gap-6 group hover:translate-x-2 transition-all">
                                        <div className="flex items-center gap-6">
                                            <div className={cn(
                                                "w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform",
                                                u.role === "ADMIN" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                                            )}>
                                                {u.role === "ADMIN" ? <UserCog className="w-8 h-8" /> : <Users className="w-8 h-8" />}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-3 mb-1">
                                                    <span className="text-xl font-black text-secondary group-hover:text-primary transition-colors">{u.name}</span>
                                                    <span className={cn(
                                                        "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest",
                                                        u.active ? "bg-emerald-100 text-emerald-600" : "bg-red-100 text-red-600"
                                                    )}>
                                                        {u.active ? "En Línea" : "Suspendido"}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-4 text-sm font-bold text-secondary/40">
                                                    <span>{u.email}</span>
                                                    <span className="w-1 h-1 bg-secondary/10 rounded-full" />
                                                    <span className="uppercase tracking-widest text-[10px]">{u.role}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 w-full md:w-auto">
                                            <button
                                                onClick={() => {
                                                    setUserModal({ open: true, editing: true, data: u });
                                                    setUForm({ name: u.name, email: u.email, password: "", role: u.role });
                                                    setFormError("");
                                                }}
                                                className="flex-1 md:flex-none p-4 hover:bg-surface rounded-2xl transition-all border border-secondary/5 text-secondary/30 hover:text-primary hover:scale-110"
                                                title="Editar Perfil"
                                            >
                                                <Pencil className="w-5 h-5 mx-auto" />
                                            </button>
                                            <button
                                                onClick={() => toggleUserActiveAction(u.id, !u.active).then(loadData)}
                                                className={cn(
                                                    "flex-[2] md:flex-none px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all border",
                                                    u.active
                                                        ? "border-red-100 text-red-400 hover:bg-red-500 hover:text-white"
                                                        : "border-emerald-100 text-emerald-400 hover:bg-emerald-500 hover:text-white"
                                                )}
                                            >
                                                {u.active ? "Suspender Acceso" : "Reactivar Acceso"}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "cortes" && (
                        <div className="space-y-8">
                            <h2 className="text-2xl font-black text-secondary">Historial de Arqueos de Caja</h2>
                            <div className="bg-white rounded-3xl border border-secondary/5 shadow-xl overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-surface">
                                        <tr>
                                            <th className="p-6 font-bold text-secondary/40 uppercase text-xs tracking-widest">Cajero</th>
                                            <th className="p-6 font-bold text-secondary/40 uppercase text-xs tracking-widest">Apertura</th>
                                            <th className="p-6 font-bold text-secondary/40 uppercase text-xs tracking-widest">Cierre</th>
                                            <th className="p-6 font-bold text-secondary/40 uppercase text-xs tracking-widest">Fondo Inicial</th>
                                            <th className="p-6 font-bold text-secondary/40 uppercase text-xs tracking-widest">Corte Final</th>
                                            <th className="p-6 font-bold text-secondary/40 uppercase text-xs tracking-widest">Diferencia</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-secondary/5">
                                        {secondaryData?.map((r: any) => (
                                            <tr key={r.id} className="hover:bg-surface/50">
                                                <td className="p-6"><div><p className="font-bold">{r.openedBy.name}</p><p className="text-[10px] text-secondary/30 font-mono tracking-tighter italic">{r.openedBy.email}</p></div></td>
                                                <td className="p-6 text-xs text-secondary/40 font-medium">{new Date(r.openedAt).toLocaleString()}</td>
                                                <td className="p-6 text-xs text-secondary/40 font-medium">{r.closedAt ? new Date(r.closedAt).toLocaleString() : <span className="text-accent font-black">EN CURSO</span>}</td>
                                                <td className="p-6 font-bold">{formatCurrency(r.openingAmount)}</td>
                                                <td className="p-6 font-black">{r.closingAmount ? formatCurrency(r.closingAmount) : "-"}</td>
                                                <td className="p-6 font-black text-emerald-600">{r.closingAmount ? formatCurrency(r.closingAmount - r.openingAmount) : "-"}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            {/* Modals Implementation (Product, User, Movement) */}
            <AnimatePresence>
                {productModal.open && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-secondary/80 backdrop-blur-xl" onClick={() => setProductModal({ ...productModal, open: false })} />
                        <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden border border-secondary/5">
                            <div className="bg-secondary p-8 text-primary relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-20 -mt-20 blur-3xl" />
                                <div className="relative z-10 flex justify-between items-center">
                                    <div>
                                        <h3 className="text-3xl font-black italic uppercase tracking-tighter">{productModal.editing ? "Editar Producto" : "Nuevo Producto"}</h3>
                                        <p className="text-primary/50 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">Configuración Técnica del Catálogo</p>
                                    </div>
                                    <button onClick={() => setProductModal({ ...productModal, open: false })} className="p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-colors text-primary" title="Cerrar"><X /></button>
                                </div>
                            </div>

                            <div className="p-8 space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="col-span-2">
                                        <label className="block text-[10px] font-black uppercase text-secondary/30 mb-2 ml-4 tracking-widest">Nombre Comercial</label>
                                        <input type="text" className="w-full bg-surface border-none rounded-2xl px-6 py-4 text-base font-bold outline-none ring-2 ring-secondary/5 focus:ring-primary/40 transition-all" value={pForm.name} onChange={e => setPForm({ ...pForm, name: e.target.value })} placeholder="Ej: Tortilla Clásica" title="Nombre" />
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <label className="block text-[10px] font-black uppercase text-secondary/30 mb-2 ml-4 tracking-widest">Precio Público</label>
                                        <input type="number" className="w-full bg-surface border-none rounded-2xl px-6 py-4 text-base font-black outline-none ring-2 ring-secondary/5 focus:ring-primary/40 transition-all" value={pForm.pricePublic} onChange={e => setPForm({ ...pForm, pricePublic: Number(e.target.value) })} title="Precio Público" />
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <label className="block text-[10px] font-black uppercase text-secondary/30 mb-2 ml-4 tracking-widest">Precio Distribuidor</label>
                                        <input type="number" className="w-full bg-surface border-none rounded-2xl px-6 py-4 text-base font-black outline-none ring-2 ring-secondary/5 focus:ring-primary/40 transition-all" value={pForm.priceDistributor} onChange={e => setPForm({ ...pForm, priceDistributor: Number(e.target.value) })} title="Precio Distribuidor" />
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <label className="block text-[10px] font-black uppercase text-secondary/30 mb-2 ml-4 tracking-widest">Unidad de Medida</label>
                                        <select className="w-full bg-surface border-none rounded-2xl px-6 py-4 text-base font-bold outline-none ring-2 ring-secondary/5 focus:ring-primary/40 transition-all cursor-pointer" value={pForm.unitType} onChange={e => setPForm({ ...pForm, unitType: e.target.value })} title="Unidad">
                                            <option value="KG">Kilogramos (KG)</option><option value="PIEZA">Pieza (PZA)</option><option value="PAQUETE">Paquete (PQT)</option>
                                        </select>
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <label className="block text-[10px] font-black uppercase text-secondary/30 mb-2 ml-4 tracking-widest">Stock Mínimo Alerta</label>
                                        <input type="number" className="w-full bg-surface border-none rounded-2xl px-6 py-4 text-base font-black outline-none ring-2 ring-secondary/5 focus:ring-primary/40 transition-all" value={pForm.minimumStockAlert} onChange={e => setPForm({ ...pForm, minimumStockAlert: Number(e.target.value) })} title="Stock Mínimo" />
                                    </div>
                                </div>
                                {formError && <p className="text-accent text-xs font-black uppercase bg-accent/5 p-4 rounded-xl text-center italic tracking-widest">{formError}</p>}
                                <button
                                    onClick={handleSaveProduct}
                                    disabled={saving}
                                    className="w-full bg-primary text-secondary py-5 rounded-[2rem] font-black shadow-xl shadow-primary/10 hover:scale-[1.02] active:scale-95 transition-all disabled:grayscale"
                                >
                                    {saving ? <Loader2 className="w-6 h-6 animate-spin mx-auto" /> : "CONFIRMAR CAMBIOS"}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}

                {userModal.open && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-secondary/80 backdrop-blur-xl" onClick={() => setUserModal({ ...userModal, open: false })} />
                        <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden border border-secondary/5">
                            <div className="bg-secondary p-8 text-primary relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-20 -mt-20 blur-3xl" />
                                <div className="relative z-10 flex justify-between items-center">
                                    <div>
                                        <h3 className="text-3xl font-black italic uppercase tracking-tighter">{userModal.editing ? "Editar Perfil" : "Nuevo Colaborador"}</h3>
                                        <p className="text-primary/50 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">Seguridad y Gestión de Talento</p>
                                    </div>
                                    <button onClick={() => setUserModal({ ...userModal, open: false })} className="p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-colors text-primary" title="Cerrar"><X /></button>
                                </div>
                            </div>

                            <div className="p-8 space-y-8">
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="col-span-2">
                                        <label className="block text-[10px] font-black uppercase text-secondary/30 mb-3 ml-4 tracking-widest">Nombre Completo</label>
                                        <input type="text" className="w-full bg-surface border-none rounded-2xl px-8 py-5 text-base font-bold outline-none ring-2 ring-secondary/5 focus:ring-primary/40 transition-all" value={uForm.name} onChange={e => setUForm({ ...uForm, name: e.target.value })} placeholder="Ej: Diana Prince" title="Nombre" />
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <label className="block text-[10px] font-black uppercase text-secondary/30 mb-3 ml-4 tracking-widest">Correo Corporativo</label>
                                        <input type="email" className="w-full bg-surface border-none rounded-2xl px-8 py-5 text-base font-bold outline-none ring-2 ring-secondary/5 focus:ring-primary/40 transition-all" value={uForm.email} onChange={e => setUForm({ ...uForm, email: e.target.value })} placeholder="diana@tortilleria.com" title="Email" />
                                    </div>
                                    <div className="col-span-2 lg:col-span-1">
                                        <label className="block text-[10px] font-black uppercase text-secondary/30 mb-3 ml-4 tracking-widest">Rol Asignado</label>
                                        <select className="w-full bg-surface border-none rounded-2xl px-8 py-5 text-base font-black outline-none ring-2 ring-secondary/5 focus:ring-primary/40 transition-all cursor-pointer" value={uForm.role} onChange={e => setUForm({ ...uForm, role: e.target.value })} title="Rol">
                                            <option value="CAJERO">Cajero Operativo</option>
                                            <option value="ADMIN">Administrador General</option>
                                        </select>
                                    </div>
                                    <div className="col-span-2">
                                        <label className="block text-[10px] font-black uppercase text-secondary/30 mb-3 ml-4 tracking-widest">Contraseña {userModal.editing ? "(Dejar vacío para mantener)" : ""}</label>
                                        <input type="password" className="w-full bg-surface border-none rounded-2xl px-8 py-5 text-base font-bold outline-none ring-2 ring-secondary/5 focus:ring-primary/40 transition-all" value={uForm.password} onChange={e => setUForm({ ...uForm, password: e.target.value })} placeholder="••••••••" title="Contraseña" />
                                    </div>
                                </div>

                                {formError && (
                                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-accent text-[10px] font-black uppercase bg-accent/5 p-5 rounded-2xl text-center italic tracking-widest border border-accent/10">
                                        {formError}
                                    </motion.p>
                                )}

                                <button
                                    onClick={handleSaveUser}
                                    disabled={saving}
                                    className="w-full bg-primary text-secondary py-6 rounded-[2rem] font-black text-lg shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all disabled:grayscale disabled:opacity-50"
                                >
                                    {saving ? <Loader2 className="w-8 h-8 animate-spin mx-auto" /> : (userModal.editing ? "ACTUALIZAR PERFIL" : "REGISTRAR COLABORADOR")}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}

                {movementModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-secondary/80 backdrop-blur-xl" onClick={() => setMovementModal(false)} />
                        <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden border border-secondary/5">
                            <div className="bg-secondary p-8 text-primary relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-20 -mt-20 blur-3xl" />
                                <div className="relative z-10 flex justify-between items-center">
                                    <div>
                                        <h3 className="text-3xl font-black italic uppercase tracking-tighter">Ajuste de Stock</h3>
                                        <p className="text-primary/50 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">Sincronización Manual de Inventario</p>
                                    </div>
                                    <button onClick={() => setMovementModal(false)} className="p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-colors text-primary" title="Cerrar"><X /></button>
                                </div>
                            </div>

                            <div className="p-8 space-y-8">
                                <div className="grid grid-cols-1 gap-6">
                                    <div>
                                        <label className="block text-[10px] font-black uppercase text-secondary/30 mb-3 ml-4 tracking-widest">Seleccionar Producto</label>
                                        <select className="w-full bg-surface border-none rounded-2xl px-8 py-5 text-base font-bold outline-none ring-2 ring-secondary/5 focus:ring-primary/40 transition-all cursor-pointer" value={mForm.productId} onChange={e => setMForm({ ...mForm, productId: e.target.value })} title="Producto">
                                            <option value="">Selecciona un activo...</option>
                                            {secondaryData?.products?.map((p: any) => (<option key={p.id} value={p.id}>{p.name} (Actual: {p.stock} {p.unit})</option>))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black uppercase text-secondary/30 mb-3 ml-4 tracking-widest">Tipo de Movimiento</label>
                                        <select className="w-full bg-surface border-none rounded-2xl px-8 py-5 text-base font-black outline-none ring-2 ring-secondary/5 focus:ring-primary/40 transition-all cursor-pointer" value={mForm.movementType} onChange={e => setMForm({ ...mForm, movementType: e.target.value })} title="Tipo">
                                            <option value="entrada_produccion">Entrada (Producción)</option>
                                            <option value="merma">Merma / Desperdicio (-)</option>
                                            <option value="ajuste_manual">Ajuste de Auditoría (+/-)</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black uppercase text-secondary/30 mb-3 ml-4 tracking-widest">Cantidad a Afectar</label>
                                        <input type="number" className="w-full bg-surface border-none rounded-2xl px-8 py-5 text-base font-black outline-none ring-2 ring-secondary/5 focus:ring-primary/40 transition-all" value={mForm.quantity} onChange={e => setMForm({ ...mForm, quantity: Number(e.target.value) })} placeholder="0" title="Cantidad" />
                                    </div>
                                </div>

                                {formError && (
                                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-accent text-[10px] font-black uppercase bg-accent/5 p-5 rounded-2xl text-center italic tracking-widest border border-accent/10">
                                        {formError}
                                    </motion.p>
                                )}

                                <button
                                    onClick={handleSaveMovement}
                                    disabled={saving}
                                    className="w-full bg-primary text-secondary py-6 rounded-[2rem] font-black text-lg shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all disabled:grayscale"
                                >
                                    {saving ? <Loader2 className="w-8 h-8 animate-spin mx-auto" /> : "PROCESAR AJUSTE"}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}

                {saleDetailModal.open && saleDetailModal.data && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-secondary/80 backdrop-blur-xl" onClick={() => setSaleDetailModal({ open: false, data: null })} />
                        <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden border border-secondary/5">
                            <div className="bg-secondary p-8 text-primary relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -mr-20 -mt-20 blur-3xl" />
                                <div className="relative z-10 flex justify-between items-center">
                                    <div>
                                        <h3 className="text-3xl font-black italic uppercase tracking-tighter leading-none">Detalle de Auditoría</h3>
                                        <p className="text-primary/50 text-[10px] font-bold uppercase tracking-[0.2em] mt-3">Venta #{saleDetailModal.data.id.slice(-8).toUpperCase()}</p>
                                    </div>
                                    <button onClick={() => setSaleDetailModal({ open: false, data: null })} className="p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-colors text-primary" title="Cerrar"><X /></button>
                                </div>
                            </div>

                            <div className="p-8 space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-surface p-4 rounded-2xl border border-secondary/5">
                                        <p className="text-[10px] font-black text-secondary/30 uppercase mb-1 tracking-widest">Colaborador</p>
                                        <p className="font-black text-secondary">{saleDetailModal.data.user?.name || "Sistema"}</p>
                                    </div>
                                    <div className="bg-surface p-4 rounded-2xl border border-secondary/5">
                                        <p className="text-[10px] font-black text-secondary/30 uppercase mb-1 tracking-widest">Fecha y Hora</p>
                                        <p className="font-black text-secondary">{new Date(saleDetailModal.data.createdAt).toLocaleString()}</p>
                                    </div>
                                </div>

                                <div className="bg-secondary/5 rounded-3xl p-6 border border-secondary/5">
                                    <p className="text-[10px] font-black text-secondary/30 uppercase mb-4 tracking-widest ml-2">Artículos Desglosados</p>
                                    <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin">
                                        {saleDetailModal.data.saleItems.map((item: any, i: number) => (
                                            <div key={i} className="flex justify-between items-center bg-white p-4 rounded-2xl border border-secondary/5">
                                                <div className="flex flex-col">
                                                    <span className="font-black text-sm text-secondary">{item.product?.name || "Producto"}</span>
                                                    <span className="text-[9px] font-bold text-secondary/40 uppercase tracking-widest">{item.quantity} x {formatCurrency(item.unitPrice)}</span>
                                                </div>
                                                <span className="font-black text-secondary">{formatCurrency(item.subtotal)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-between items-center bg-primary p-6 rounded-[2rem] shadow-xl shadow-primary/10">
                                    <div>
                                        <p className="text-[10px] font-black text-secondary/30 uppercase tracking-widest">Total Transacción</p>
                                        <h4 className="text-3xl font-black text-secondary tracking-tighter">{formatCurrency(saleDetailModal.data.totalAmount)}</h4>
                                    </div>
                                    <button
                                        onClick={() => generateTicketPDF(saleDetailModal.data.saleItems.map((si: any) => ({ ...si, name: si.product?.name || "Producto", priceAtTime: si.unitPrice })), saleDetailModal.data.totalAmount)}
                                        className="bg-secondary text-primary p-4 rounded-2xl font-black flex items-center gap-3 hover:scale-105 transition-all shadow-lg shadow-black/20"
                                    >
                                        <Printer className="w-5 h-5" /> REIMPRIMIR
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
            "relative overflow-hidden bg-white p-6 rounded-[2.5rem] border border-secondary/5 shadow-xl group hover:shadow-2xl transition-all cursor-default",
            important && "ring-4 ring-red-500/10"
        )}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/5 transition-colors" />

            <div className="relative z-10 flex justify-between items-start mb-8">
                <div className={cn(
                    "p-4 rounded-2xl text-white shadow-lg transform group-hover:-rotate-12 transition-transform",
                    color
                )}>
                    {icon}
                </div>
                {growth !== undefined && (
                    <div className={cn(
                        "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm transition-all",
                        growth >= 0 ? "bg-emerald-500 text-white" : "bg-red-500 text-white"
                    )}>
                        {growth >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {Math.abs(growth)}%
                    </div>
                )}
            </div>

            <div className="relative z-10">
                <p className="text-secondary/30 font-black uppercase tracking-[0.2em] text-[10px] mb-2">{title}</p>
                <h4 className="text-4xl font-black text-secondary tracking-tighter truncate group-hover:text-primary transition-colors tabular-nums">
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
            className={cn(
                "w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold transition-all text-sm",
                active ? "bg-primary text-secondary shadow-lg shadow-primary/20" : "text-surface/30 hover:text-surface hover:bg-white/5"
            )}
        >
            <span className={cn("w-5 h-5", active ? "text-secondary" : "text-surface/20")}>{icon}</span>
            <span>{label}</span>
        </button>
    );
}
