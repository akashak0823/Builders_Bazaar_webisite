import { useEffect, useState } from "react";
import axios from "axios";
import { useCart, Product } from "@/context/CartContext";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { Loader2, ShoppingCart } from "lucide-react";

export const CatalogPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();

    useEffect(() => {
        // Fetch products from our backend
        // Note: Check port configuration, assuming 5001 based on server setup
        axios.get('https://builders-bazaar-webisite.onrender.com/api/products')
            .then(res => {
                setProducts(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching products:", err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <div className="bg-blue-950">
                <Header />
            </div>

            <main className="flex-1 container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-blue-950 mb-8">Product Catalog</h1>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
                    </div>
                ) : products.length === 0 ? (
                    <div className="text-center text-zinc-500 py-12">
                        No products available at the moment.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map(product => (
                            <div key={product._id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 border border-zinc-100 flex flex-col">
                                <div className="h-48 bg-zinc-100 rounded-lg mb-4 overflow-hidden relative">
                                    <img
                                        src={product.image || "https://via.placeholder.com/300?text=No+Image"}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-zinc-800 mb-1">{product.name}</h3>
                                <p className="text-sm text-zinc-500 mb-4 uppercase tracking-wider text-xs font-semibold">{product.category}</p>
                                <p className="text-zinc-600 text-sm mb-4 flex-1 line-clamp-2">{product.description}</p>

                                <div className="mt-auto flex items-center justify-between">
                                    <span className="text-blue-950 font-bold">
                                        {product.price ? `₹${product.price}` : "Contact for Price"}
                                    </span>
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="flex items-center gap-2 bg-amber-400 text-white px-4 py-2 rounded-lg hover:bg-amber-500 transition-colors font-medium text-sm"
                                    >
                                        <ShoppingCart className="w-4 h-4" />
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>

            <div className="bg-blue-950">
                <Footer />
            </div>
        </div>
    );
};

