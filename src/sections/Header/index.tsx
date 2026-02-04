import { TopBar } from "@/sections/Header/components/TopBar";
import { Navbar } from "@/sections/Header/components/Navbar";

export const Header = () => {
    return (
        <header className="bg-white box-border caret-transparent">
            <TopBar />
            <Navbar />
        </header>
    );
};
