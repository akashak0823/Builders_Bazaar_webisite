import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

export const SocialMedia = () => {
    return (
        <div className="relative box-border caret-transparent basis-auto shrink max-w-none min-h-px w-full px-[15px] md:basis-3/12 md:shrink-0 md:max-w-[25%]">
            <div className="box-border caret-transparent flex flex-col h-full justify-between pt-0 pb-2 md:pt-2">
                <ul className="box-border caret-transparent list-none mt-2 mb-4 pl-0 flex flex-wrap gap-3">
                    <li className="text-[15px] items-center bg-amber-400 box-border caret-transparent inline-flex h-[40px] justify-center leading-[22.5px] text-center w-[40px] border border-amber-400 rounded-full border-solid hover:bg-white hover:text-amber-400 transition-colors duration-300">
                        <a
                            href="https://www.facebook.com/ncclimited.official"
                            className="text-blue-950 text-sm font-semibold box-border caret-transparent block leading-[21px] hover:underline flex items-center justify-center w-full h-full"
                        >
                            <Facebook className="w-5 h-5" />
                        </a>
                    </li>
                    <li className="text-[15px] items-center bg-amber-400 box-border caret-transparent inline-flex h-[40px] justify-center leading-[22.5px] text-center w-[40px] border border-amber-400 rounded-full border-solid hover:bg-white hover:text-amber-400 transition-colors duration-300">
                        <a
                            href="https://www.instagram.com/ncclimited.official/?igshid=YmMyMTA2M2Y%3D"
                            className="text-blue-950 text-sm font-semibold box-border caret-transparent block leading-[21px] hover:underline flex items-center justify-center w-full h-full"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                    </li>
                    <li className="text-[15px] items-center bg-amber-400 box-border caret-transparent inline-flex h-[40px] justify-center leading-[22.5px] text-center w-[40px] border border-amber-400 rounded-full border-solid hover:bg-white hover:text-amber-400 transition-colors duration-300">
                        <a
                            href="https://twitter.com/ncc_limited"
                            className="text-blue-950 text-sm font-semibold box-border caret-transparent block leading-[21px] hover:underline flex items-center justify-center w-full h-full"
                        >
                            <Twitter className="w-5 h-5" />
                        </a>
                    </li>
                    <li className="text-[15px] items-center bg-amber-400 box-border caret-transparent inline-flex h-[40px] justify-center leading-[22.5px] text-center w-[40px] border border-amber-400 rounded-full border-solid hover:bg-white hover:text-amber-400 transition-colors duration-300">
                        <a
                            href="https://www.youtube.com/channel/UCZiCpQD-mFJzEO6CDMd-WNQ"
                            className="text-blue-950 text-sm font-semibold box-border caret-transparent block leading-[21px] hover:underline flex items-center justify-center w-full h-full"
                        >
                            <Youtube className="w-5 h-5" />
                        </a>
                    </li>
                    <li className="text-[15px] items-center bg-amber-400 box-border caret-transparent inline-flex h-[40px] justify-center leading-[22.5px] text-center w-[40px] border border-amber-400 rounded-full border-solid hover:bg-white hover:text-amber-400 transition-colors duration-300">
                        <a
                            href="https://in.linkedin.com/company/nagarjuna-construction-company-limited"
                            className="text-blue-950 text-sm font-semibold box-border caret-transparent block leading-[21px] hover:underline flex items-center justify-center w-full h-full"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
