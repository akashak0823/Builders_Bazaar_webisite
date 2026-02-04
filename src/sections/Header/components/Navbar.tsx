import { NavbarToggle } from "@/sections/Header/components/NavbarToggle";
import { NavbarMenu } from "@/sections/Header/components/NavbarMenu";

export const Navbar = () => {
    return (
        <div className="bg-blue-950 box-border caret-transparent">
            <div className="box-border caret-transparent w-full mx-auto px-[15px]">
                <nav className="relative items-center box-border caret-transparent flex flex-wrap justify-center md:flex-nowrap">
                    <NavbarToggle />
                    <NavbarMenu />
                </nav>
            </div>
        </div>
    );
};
