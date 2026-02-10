import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { Trash2, ArrowLeft, Send, CheckCircle, Loader2 } from "lucide-react";
import axios from "axios";

export const CartPage = () => {
    const { items, removeFromCart, clearCart } = useCart();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        remarks: ""
    });
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            await axios.post('https://builders-bazaar-webisite.onrender.com/api/inquire', {
                customerName: formData.name,
                customerPhone: formData.phone,
                customerEmail: formData.email,
                remarks: formData.remarks,
                items: items.map(item => ({
                    productId: item._id,
                    productName: item.name,
                    quantity: item.quantity
                }))
            });
            setSuccess(true);
            clearCart();
        } catch (error) {
            console.error("Error submitting inquiry:", error);
            alert("Failed to submit inquiry. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen flex flex-col bg-slate-50">
                <div className="bg-blue-950"> <Header /> </div>
                <main className="flex-1 container mx-auto px-4 py-12 flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold text-blue-950 mb-4">Inquiry Sent Successfully!</h2>
                    <p className="text-zinc-600 max-w-md mb-8">
                        Thank you for your interest. Our team will review your requirements and get back to you shortly.
                    </p>
                    <Link to="/" className="text-blue-600 font-semibold hover:underline">
                        Return to Home
                    </Link>
                </main>
                <div className="bg-blue-950"> <Footer /> </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <div className="bg-blue-950"> <Header /> </div>

            <main className="flex-1 container mx-auto px-4 py-8">
                <Link to="/catalog" className="inline-flex items-center text-zinc-500 hover:text-blue-950 mb-6 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Catalog
                </Link>

                <h1 className="text-3xl font-bold text-blue-950 mb-8">Your Cart / Inquiry List</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Items List */}
                    <div className="lg:col-span-2 space-y-4">
                        {items.length === 0 ? (
                            <div className="bg-white p-8 rounded-xl border border-zinc-100 text-center">
                                <p className="text-zinc-500 mb-4">Your cart is empty.</p>
                                <Link to="/catalog" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                    Browse Products
                                </Link>
                            </div>
                        ) : items.map(item => (
                            <div key={item._id} className="bg-white p-4 rounded-xl shadow-sm border border-zinc-100 flex items-center gap-4">
                                <div className="w-20 h-20 bg-zinc-100 rounded-lg overflow-hidden shrink-0">
                                    <img
                                        src={item.image || "https://via.placeholder.com/100"}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-zinc-800">{item.name}</h3>
                                    <p className="text-sm text-zinc-500">{item.category}</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="font-medium bg-zinc-100 px-3 py-1 rounded-md text-zinc-700">Qty: {item.quantity}</span>
                                    <button
                                        onClick={() => removeFromCart(item._id)}
                                        className="text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Inquiry Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100 sticky top-4">
                            <h3 className="text-xl font-bold text-blue-950 mb-4">Send Inquiry</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-zinc-200 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-zinc-200 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 mb-1">Email <span className="text-zinc-400 font-normal">(Optional)</span></label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-2 rounded-lg border border-zinc-200 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 mb-1">Remarks</label>
                                    <textarea
                                        className="w-full px-4 py-2 rounded-lg border border-zinc-200 focus:ring-2 focus:ring-blue-100 outline-none transition-all h-24 resize-none"
                                        value={formData.remarks}
                                        onChange={e => setFormData({ ...formData, remarks: e.target.value })}
                                        placeholder="Any specific requirements?"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={submitting || items.length === 0}
                                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {submitting ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Submit Inquiry
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <div className="bg-blue-950"> <Footer /> </div>
        </div>
    );
};

