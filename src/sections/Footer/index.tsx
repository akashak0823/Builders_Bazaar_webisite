import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { SocialMedia } from "@/sections/Footer/components/SocialMedia";
import { Copyright } from "@/sections/Footer/components/Copyright";
import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-blue-950 box-border caret-transparent py-4 px-[15px] md:px-0">
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[1140px]">
                <div className="border-b-slate-600 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px] border-b-2">
                    <FooterLinks
                        variant="about"
                        paragraphs={[
                            "Committed to a brighter world...",
                            "Diligence can accomplish wonders!",
                            "For over four decades, we never sidetracked from this belief and have leapfrogged from being just a construction industry player to a billion dollar multifunctional infrastructure conglomerate.",
                        ]}
                    />
                    <FooterLinks
                        variant="quick-links"
                        title="Quick Links"
                        links={[
                            { text: "About Us", href: "./overview.html" },
                            { text: "Expertise", href: "./buildings-housing.html" },
                            { text: "Commitment", href: "./quality-safety.html" },
                            { text: "Investors", href: "./10-years-performance.html" },
                            { text: "Landmarks", href: "./timeline.html" },
                            { text: "Media", href: "./in-the-news.html" },
                            { text: "Human Capital", href: "./opportunities-at-ncc.html" },
                            { text: "Contact", href: "./contact.html" },
                        ]}
                    />
                    <FooterLinks
                        variant="contacts"
                        title="Contacts"
                        contacts={[
                            {
                                icon: <MapPin className="absolute w-3 h-3 left-0 top-[7px] text-white" />,
                                text: "Builders Bazaar House, Madhapur Hyderabad - 500081 Telangana, India",
                                href: "https://goo.gl/maps/i6fZ2botNUpvLPQh7",
                            },
                            {
                                icon: <Phone className="absolute w-3 h-3 left-0 top-[7px] text-white" />,
                                text: "+91 40 2326 8888",
                                href: "tel://+91 40 2326 8888",
                            },
                            {
                                icon: <Mail className="absolute w-3 h-3 left-0 top-[7px] text-white" />,
                                text: "info@buildersbazaar.in",
                                href: "mailto://info@buildersbazaar.in",
                            },
                        ]}
                    />
                    <SocialMedia />
                </div>
                <Copyright />
            </div>
        </footer>
    );
};
