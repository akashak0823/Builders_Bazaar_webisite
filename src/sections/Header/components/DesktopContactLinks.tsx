import { Phone, Mail } from "lucide-react";

export const DesktopContactLinks = () => {
    return (
        <ul className="items-center box-border caret-transparent flex justify-end list-none pl-0 md:[align-items:normal]">
            <li className="relative text-blue-950 text-xs box-border caret-transparent leading-[18px] mr-0 px-[5px] py-0 md:text-sm md:leading-[21px] md:mr-6 md:px-2.5 before:accent-auto before:bg-zinc-300 before:box-border before:caret-transparent before:text-blue-950 before:hidden before:text-xs before:not-italic before:normal-nums before:font-normal before:h-[70px] before:tracking-[normal] before:leading-[18px] before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-left before:indent-[0px] before:normal-case before:visible before:w-px before:m-auto before:border-separate before:-right-2.5 before:top-[15px] before:bottom-0 before:font-lato before:md:block before:md:text-sm before:md:leading-[21px]">
                <a
                    href="#"
                    className="text-[15px] font-semibold box-border caret-transparent block leading-[22.5px] md:hidden"
                >
                    <Phone className="w-5 h-5" />
                </a>
            </li>
            <li className="relative text-blue-950 text-xs box-border caret-transparent leading-[18px] mr-0 px-[5px] py-0 md:text-sm md:leading-[21px] md:mr-6 md:px-2.5 before:accent-auto before:bg-zinc-300 before:box-border before:caret-transparent before:text-blue-950 before:hidden before:text-xs before:not-italic before:normal-nums before:font-normal before:h-[70px] before:tracking-[normal] before:leading-[18px] before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-left before:indent-[0px] before:normal-case before:visible before:w-px before:m-auto before:border-separate before:-right-2.5 before:top-[15px] before:bottom-0 before:font-lato before:md:block before:md:text-sm before:md:leading-[21px]">
                <a
                    href="tel://040-23268888"
                    className="text-[15px] font-semibold box-border caret-transparent hidden leading-[22.5px] md:block"
                >
                    <span className="text-neutral-500 font-normal box-border caret-transparent flex items-center">
                        <Phone className="w-5 h-5 mr-1" />
                        Call Us
                    </span>
                    <br className="box-border caret-transparent" />
                    <span className="box-border caret-transparent">
                        (+91) 040-23268888
                    </span>
                </a>
                <a
                    href="tel://040-23268888"
                    className="text-[15px] font-semibold box-border caret-transparent block leading-[22.5px] md:hidden"
                >
                    <Phone className="w-5 h-5" />
                </a>
            </li>
            <li className="relative text-blue-950 text-xs box-border caret-transparent leading-[18px] mr-0 px-[5px] py-0 md:text-sm md:leading-[21px] md:mr-6 md:px-2.5 before:accent-auto before:bg-zinc-300 before:box-border before:caret-transparent before:text-blue-950 before:hidden before:text-xs before:not-italic before:normal-nums before:font-normal before:h-[70px] before:tracking-[normal] before:leading-[18px] before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-left before:indent-[0px] before:normal-case before:visible before:w-px before:m-auto before:border-separate before:-right-2.5 before:top-[15px] before:bottom-0 before:font-lato before:md:text-sm before:md:leading-[21px]">
                <a
                    href="mailto://careers@buildersbazaar.in"
                    className="text-[15px] font-semibold box-border caret-transparent hidden leading-[22.5px] md:block"
                >
                    <span className="text-neutral-500 font-normal box-border caret-transparent flex items-center">
                        <Mail className="w-5 h-5 mr-1" />
                        Careers
                    </span>
                    <br className="box-border caret-transparent" />
                    <span className="box-border caret-transparent">
                        careers@buildersbazaar.in
                    </span>
                </a>
                <a
                    href="mailto://careers@buildersbazaar.in"
                    className="text-[15px] font-semibold box-border caret-transparent block leading-[22.5px] md:hidden"
                >
                    <Mail className="w-5 h-5" />
                </a>
            </li>
        </ul>
    );
};
