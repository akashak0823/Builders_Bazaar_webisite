import { ShoppingCart, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChatbotModal } from "./ChatbotModal";
import { useCart } from "@/context/CartContext";

export const FloatingActions = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showChat, setShowChat] = useState(false);
    const { cartCount } = useCart();

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-50">
            {showChat && <ChatbotModal onClose={() => setShowChat(false)} />}

            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="bg-amber-400 text-white p-3 rounded-full shadow-lg hover:bg-amber-500 transition-colors hover:scale-110"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-6 h-6" />
                </button>
            )}
            <div className="flex items-center gap-4">
                <Link
                    to="/cart"
                    className="relative bg-amber-400 text-white p-5 rounded-full shadow-lg hover:bg-amber-500 transition-colors flex items-center justify-center"
                    aria-label="Cart"
                >
                    <ShoppingCart className="w-8 h-8" />
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                            {cartCount}
                        </span>
                    )}
                </Link>
                <button
                    onClick={() => setShowChat(!showChat)}
                    className="group relative rounded-full shadow-2xl hover:shadow-sky-900/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 w-24 h-24 overflow-hidden"
                    aria-label="Chatbot"
                >
                    <img
                        src="/07baed84752da66c94333e268dc15ffc.gif"
                        alt="Chat Assistant"
                        className="w-full h-full object-cover"
                    />
                </button>
            </div>
        </div>
    );
};

