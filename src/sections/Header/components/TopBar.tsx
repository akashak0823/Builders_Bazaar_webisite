import { Logo } from "@/components/Logo";
import { ContactInfo } from "@/sections/Header/components/ContactInfo";

export const TopBar = () => {
    return (
        <div className="box-border caret-transparent w-full mx-auto px-[10px]">
            <div className="items-center box-border caret-transparent flex flex-wrap justify-between ml-[-15px] mr-[-15px]">
                <Logo />
                <ContactInfo />
            </div>
        </div>
    );
};
