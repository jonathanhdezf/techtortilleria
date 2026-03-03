import jsPDF from "jspdf";
import { Order, OrderItem } from "@/types";
import { formatCurrency } from "./utils";

export const generateTicketPDF = (orderItems: OrderItem[], total: number) => {
    const doc = new jsPDF({
        unit: "mm",
        format: [80, 150] // POS thermal printer size
    });

    const now = new Date();
    const dateStr = now.toLocaleDateString() + " " + now.toLocaleTimeString();

    // Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("TechTortilleria", 40, 15, { align: "center" });

    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.text("La Tradición del Siglo XXI", 40, 20, { align: "center" });
    doc.text(dateStr, 40, 25, { align: "center" });

    doc.setLineWidth(0.1);
    doc.line(10, 28, 70, 28);

    // Content
    let y = 35;
    doc.setFont("helvetica", "bold");
    doc.text("Prod", 10, y);
    doc.text("Cant", 40, y);
    doc.text("Total", 60, y);

    doc.setFont("helvetica", "normal");
    y += 5;

    orderItems.forEach((item) => {
        doc.text(item.name.substring(0, 15), 10, y);
        doc.text(item.quantity.toString(), 40, y);
        doc.text(formatCurrency(item.quantity * item.priceAtTime), 60, y);
        y += 5;
    });

    doc.line(10, y, 70, y);
    y += 7;

    // Footer
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("TOTAL:", 10, y);
    doc.text(formatCurrency(total), 60, y);

    y += 10;
    doc.setFontSize(8);
    doc.setFont("helvetica", "italic");
    doc.text("¡Gracias por su compra!", 40, y, { align: "center" });

    doc.save(`Ticket-${now.getTime()}.pdf`);
};
