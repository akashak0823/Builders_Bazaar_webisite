import { NavbarDropdown } from "@/sections/Header/components/NavbarDropdown";
import { ChevronDown } from "lucide-react";

export const NavbarMenu = () => {
    return (
        <div className="items-center box-border caret-transparent hidden basis-full grow justify-center min-h-0 min-w-0 md:flex md:basis-auto md:min-h-[auto] md:min-w-[auto]">
            <ul className="box-border caret-transparent flex flex-col list-none min-h-0 min-w-0 pl-0 md:flex-row md:min-h-[auto] md:min-w-[auto]">
                <li className="relative text-[15px] box-border caret-transparent leading-[22.5px] min-h-0 min-w-0 text-right md:min-h-[auto] md:min-w-[auto] md:text-left">
                    <a
                        href="#"
                        className="text-white text-sm font-extrabold box-border caret-transparent block leading-[19.5px] text-right px-0 py-8 md:text-left md:px-3 flex items-center justify-end md:justify-start"
                    >
                        ABOUT US{" "}
                        <ChevronDown className="text-amber-400 w-3 h-3 ml-1" />
                    </a>
                    <NavbarDropdown
                        variant=""
                        items={[
                            { href: "overview.html", text: "Overview" },
                            { href: "philosophy.html", text: "Philosophy" },
                            { href: "board-of-directors.html", text: "Board of Directors" },
                            { href: "presence.html", text: "Presence" },
                            { href: "NCCurban.html", text: "Builders Bazaar Urban" },
                        ]}
                    />
                </li>
                <li className="relative text-[15px] box-border caret-transparent leading-[22.5px] min-h-0 min-w-0 text-right md:min-h-[auto] md:min-w-[auto] md:text-left">
                    <a
                        href="#"
                        className="text-white text-sm font-extrabold box-border caret-transparent block leading-[19.5px] text-right px-0 py-8 md:text-left md:px-3 flex items-center justify-end md:justify-start"
                    >
                        EXPERTISE{" "}
                        <ChevronDown className="text-amber-400 w-3 h-3 ml-1" />
                    </a>
                    <NavbarDropdown
                        variant=""
                        items={[
                            { href: "buildings-housing.html", text: "Buildings" },
                            { href: "water-environment.html", text: "Water & Environment" },
                            { href: "roads.html", text: "Transportation" },
                            { href: "railways.html", text: "Railways" },
                            { href: "irrigation.html", text: "Irrigation" },
                            { href: "mining.html", text: "Mining" },
                            { href: "electrical.html", text: "Electrical (T&D)" },
                        ]}
                    />
                </li>
                <li className="relative text-[15px] box-border caret-transparent leading-[22.5px] min-h-0 min-w-0 text-right md:min-h-[auto] md:min-w-[auto] md:text-left">
                    <a
                        href="#"
                        className="text-white text-sm font-extrabold box-border caret-transparent block leading-[19.5px] text-right px-0 py-8 md:text-left md:px-3 flex items-center justify-end md:justify-start"
                    >
                        COMMITMENT{" "}
                        <ChevronDown className="text-amber-400 w-3 h-3 ml-1" />
                    </a>
                    <NavbarDropdown
                        variant=""
                        items={[
                            { href: "quality-safety.html", text: "QEHS & ISMS" },
                            { href: "social-impact-csr.html", text: "Societal Impact (CSR)" },
                            { href: "ESG-Sustainability.html", text: "Sustainability (ESG)" },
                        ]}
                    />
                </li>
                <li className="relative text-[15px] box-border caret-transparent leading-[22.5px] min-h-0 min-w-0 text-right md:min-h-[auto] md:min-w-[auto] md:text-left">
                    <a
                        href="#"
                        className="text-white text-sm font-extrabold box-border caret-transparent block leading-[19.5px] text-right px-0 py-8 md:text-left md:px-3 flex items-center justify-end md:justify-start"
                    >
                        INVESTORS{" "}
                        <ChevronDown className="text-amber-400 w-3 h-3 ml-1" />
                    </a>
                    <NavbarDropdown
                        variant="nested"
                        items={[
                            {
                                href: "#",
                                text: "Financial Information",
                                hasIcon: true,
                                subItems: [
                                    {
                                        href: "10-years-performance.html",
                                        text: "10 Years Performance",
                                    },
                                    { href: "annual-report.html", text: "Annual Report" },
                                    { href: "quarterly-results.html", text: "Quarterly Results" },
                                    {
                                        href: "subsidiary-financials.html",
                                        text: "Subsidiary Financials",
                                    },
                                    { href: "credit-rating.html", text: "Credit Rating" },
                                    {
                                        href: "analyst-column.html",
                                        text: "Investor Presentation",
                                    },
                                ],
                            },
                            {
                                href: "#",
                                text: "Corporate Governance",
                                hasIcon: true,
                                subItems: [
                                    {
                                        href: "governance-philosophy.html",
                                        text: "Governance Philosophy",
                                    },
                                    {
                                        href: "board-of-directors.html",
                                        text: "Board of Directors",
                                    },
                                    { href: "board-committees.html", text: "Board Committees" },
                                    { href: "policies&codes.html", text: "Policies & Codes" },
                                    {
                                        href: "independent-directors.html",
                                        text: "Independent Directors",
                                    },
                                    {
                                        href: "secretarial-complaince-report.html",
                                        text: "Secretarial Compliance Report",
                                    },
                                ],
                            },
                            {
                                href: "#",
                                text: "Stock Exchange Filings",
                                hasIcon: true,
                                subItems: [
                                    {
                                        href: "announcements-disclosures.html",
                                        text: "Announcements & Disclosures",
                                    },
                                    {
                                        href: "shareholding-pattern.html",
                                        text: "Shareholding Pattern",
                                    },
                                    { href: "stock-exchange-filings-other.html", text: "Other" },
                                ],
                            },
                            {
                                href: "#",
                                text: "Stakeholders Information",
                                hasIcon: true,
                                subItems: [
                                    { href: "AGM_EGM_Info.html", text: "AGM / EGM Information" },
                                    { href: "stock-information.html", text: "Stock Information" },
                                    {
                                        href: "#",
                                        text: "Dividend",
                                        hasIcon: true,
                                        subItems: [
                                            { href: "dividend.html", text: "Dividend History" },
                                            {
                                                href: "unpaid-dividends.html",
                                                text: "Unpaid Dividends",
                                            },
                                            {
                                                href: "shares-due-for-transfer-to-IEPF.html",
                                                text: "Shares due for Transfer to IEPF",
                                            },
                                        ],
                                    },
                                    {
                                        href: "communications.html",
                                        text: "Communications",
                                        hasIcon: true,
                                        subItems: [
                                            {
                                                href: "reminder-letters-standard.html",
                                                text: "Reminder",
                                            },
                                            { href: "others.html", text: "Others" },
                                        ],
                                    },
                                    { href: "analyst-column.html", text: "Analyst Column" },
                                    {
                                        href: "Scheme-of-Arrangement.html",
                                        text: "Scheme of Arrangement",
                                    },
                                    {
                                        href: "#",
                                        text: "Contact",
                                        hasIcon: true,
                                        subItems: [
                                            {
                                                href: "investor-queries-faq.html",
                                                text: "Investor Queries & FAQ",
                                            },
                                            {
                                                href: "grievance-redressal.html",
                                                text: "Grievance Redressal",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ]}
                    />
                </li>
                <li className="relative text-[15px] box-border caret-transparent leading-[22.5px] min-h-0 min-w-0 text-right md:min-h-[auto] md:min-w-[auto] md:text-left">
                    <a
                        href="#"
                        className="text-white text-sm font-extrabold box-border caret-transparent block leading-[19.5px] text-right px-0 py-8 md:text-left md:px-3 flex items-center justify-end md:justify-start"
                    >
                        LANDMARKS{" "}
                        <ChevronDown className="text-amber-400 w-3 h-3 ml-1" />
                    </a>
                    <NavbarDropdown
                        variant=""
                        items={[
                            { href: "timeline.html", text: "Timeline" },
                            { href: "innovation-stories.html", text: "Innovation Stories" },
                            { href: "key-recognitions.html", text: "Key Recognitions" },
                        ]}
                    />
                </li>
                <li className="relative text-[15px] box-border caret-transparent leading-[22.5px] min-h-0 min-w-0 text-right md:min-h-[auto] md:min-w-[auto] md:text-left">
                    <a
                        href="#"
                        className="text-white text-sm font-extrabold box-border caret-transparent block leading-[19.5px] text-right px-0 py-8 md:text-left md:px-3 flex items-center justify-end md:justify-start"
                    >
                        MEDIA{" "}
                        <ChevronDown className="text-amber-400 w-3 h-3 ml-1" />
                    </a>
                    <NavbarDropdown
                        variant=""
                        items={[
                            { href: "in-the-news.html", text: "In the News" },
                            { href: "ncc-magazine.html", text: "Builders Bazaar Magazine" },
                            { href: "press-kit.html", text: "Press Kit" },
                        ]}
                    />
                </li>
                <li className="relative text-[15px] box-border caret-transparent leading-[22.5px] min-h-0 min-w-0 text-right md:min-h-[auto] md:min-w-[auto] md:text-left">
                    <a
                        href="#"
                        className="text-white text-sm font-extrabold box-border caret-transparent block leading-[19.5px] text-right px-0 py-8 md:text-left md:px-3 flex items-center justify-end md:justify-start"
                    >
                        HUMAN CAPITAL{" "}
                        <ChevronDown className="text-amber-400 w-3 h-3 ml-1" />
                    </a>
                    <NavbarDropdown
                        variant=""
                        items={[
                            { href: "humancapital-overview.html", text: "Overview" },
                            { href: "learning-at-ncc.html", text: "Learning@Builders Bazaar" },
                            { href: "life-at-ncc.html", text: "Life@Builders Bazaar" },
                            { href: "opportunities-at-ncc.html", text: "Opportunities" },
                        ]}
                    />
                </li>
                <li className="relative text-[15px] box-border caret-transparent leading-[22.5px] min-h-0 min-w-0 text-right md:min-h-[auto] md:min-w-[auto] md:text-left">
                    <a
                        href="contact.html"
                        className="text-white text-sm font-extrabold box-border caret-transparent block leading-[19.5px] text-right px-0 py-8 md:text-left md:px-3 flex items-center justify-end md:justify-start"
                    >
                        CONTACT
                    </a>
                </li>
            </ul>
        </div>
    );
};
