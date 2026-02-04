import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { CatalogPage } from "@/pages/CatalogPage";
import { CartPage } from "@/pages/CartPage";
import { FloatingActions } from "@/components/FloatingActions";
import { CartProvider } from "@/context/CartContext";

export const App = () => {
    return (
        <CartProvider>
            <Router future={{ v7_relativeSplatPath: true }}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/catalog" element={<CatalogPage />} />
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
                <FloatingActions />
            </Router>
        </CartProvider>
    );
};
