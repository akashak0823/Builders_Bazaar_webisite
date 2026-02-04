import { ProjectCard } from "@/sections/ProjectsShowcase/components/ProjectCard";

export const ProjectCarousel = () => {
    return (
        <div className="relative box-border caret-transparent flex-wrap ml-[-15px] mr-[-15px]">
            <button
                aria-label="Previous"
                type="button"
                className="static text-black text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 caret-black inline-block h-auto justify-normal leading-[normal] text-center w-auto z-auto left-auto inset-y-auto font-arial md:absolute md:text-blue-950 md:text-[0px] md:items-center md:aspect-auto md:bg-transparent md:caret-transparent md:hidden md:h-[30px] md:justify-center md:left-[-30px] md:leading-[0px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[30px] md:z-[1] md:[mask-position:0%] md:bg-left-top md:m-auto md:scroll-m-0 md:scroll-p-[auto] md:inset-y-0 md:font-font_awesome_5_free before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-stone-900 before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-semibold before:md:tracking-[normal] before:md:leading-[35.2px] before:md:list-outside before:md:list-disc before:md:pointer-events-auto before:md:text-center before:md:no-underline before:md:indent-[0px] before:md:normal-case before:md:visible before:md:border-separate before:md:font-font_awesome_5_free"
            >
                Previous
            </button>
            <div className="static box-content caret-black md:relative md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="static box-content caret-black w-auto left-auto top-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[2660px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0 before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-zinc-600 before:md:table before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-bold before:md:tracking-[normal] before:md:leading-6 before:md:list-outside before:md:list-disc before:md:pointer-events-auto before:md:text-left before:md:no-underline before:md:indent-[0px] before:md:normal-case before:md:visible before:md:border-separate before:md:font-lato after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:clear-both after:md:text-zinc-600 after:md:table after:md:text-base after:md:not-italic after:md:normal-nums after:md:font-bold after:md:tracking-[normal] after:md:leading-6 after:md:list-outside after:md:list-disc after:md:pointer-events-auto after:md:text-left after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:border-separate after:md:font-lato">
                    <ProjectCard
                        title="Buildings"
                        backgroundVariant="bg-[url('/public/Buildings.jpg')]"
                        images={[
                            {
                                href: "./img/buildings/Lucknow Airport.jpg",
                                title:
                                    "Chaudhary Charan Singh International Airport, Lucknow, UP",
                            },
                            {
                                href: "./img/buildings/Biswabangla.jpg",
                                title: "Biswa Bangla Biswabidyalay, Bolpur, West Bengal",
                            },
                            {
                                href: "./img/buildings/IIT Patna.jpg",
                                title: "IIT Patna, Bihar",
                            },
                            {
                                href: "./img/buildings/Shakati Bhavan.jpg",
                                title: "Shakti Bhawan, Bhubaneswar, Odisha",
                            },
                            {
                                href: "./img/Nalanda.jpg",
                                title: "Nalanda University, Rajgir, Bihar",
                            },
                            {
                                href: "./img/AIIMS-Bilaspur-5.jpg",
                                title: "AIIMS Bilaspur, Himachal Pradesh",
                            },
                            {
                                href: "./img/Lucknow_Stadium.jpg",
                                title:
                                    "Atal Bihari Vajpayee Ekana Cricket Stadium - Lucknow,  UP",
                            },
                            {
                                href: "./img/buildings/Agartala.jpg",
                                title: "Agartala Airport, Tripura",
                            },
                            {
                                href: "./img/buildings/AIIMS-Bhatinda-1.jpg",
                                title: "AIIMS - Bathinda, Punjab",
                            },
                            {
                                href: "./img/buildings/SYMBIOISIS-HYDERABAD.jpg",
                                title: "SYMBIOISIS - Hyderabad, Telangana",
                            },
                            { href: "./img/buildings/Info-park.jpg", title: "Info Park" },
                            {
                                href: "./img/buildings/LDA-Luknow.jpg",
                                title: "LDA - Lucknow, UP",
                            },
                            {
                                href: "./img/buildings/MEDICAL-COLLEGE-Mandi-HP.jpg",
                                title: "Medical College Mandi - HP",
                            },
                            { href: "./img/buildings/NAC.jpg", title: "NAC" },
                            {
                                href: "./img/buildings/National-War-Memorial-in-Delhi.jpg",
                                title: "National War Memorial - Delhi",
                            },
                            {
                                href: "./img/buildings/NCC-cement-plant.jpg",
                                title: "Builders Bazaar Cement Plant",
                            },
                            { href: "./img/buildings/NIT.jpg", title: "NIT" },
                            {
                                href: "./img/buildings/NIT-Warangal.jpg",
                                title: "NIT- Warangal, Telangana",
                            },
                            {
                                href: "./img/buildings/patni-computers-Mumbai.jpg",
                                title: "Patni Computers - Mumbai, Maharashtra",
                            },
                            {
                                href: "./img/buildings/Raipur-Cricket-stadium.jpg",
                                title: "Cricket Stadium - Raipur, Chhattisgarh",
                            },
                            {
                                href: "./img/buildings/ranchi-sports-city.jpg",
                                title: "Sports City - Ranchi, Jharkhand",
                            },
                            {
                                href: "./img/buildings/Rugby-stadium-delhi.jpg",
                                title: "Rugby Stadium - Delhi",
                            },
                            {
                                href: "./img/buildings/shilapakalavedika.jpg",
                                title: "Shilapakalavedika - Hyderabad, Telangana",
                            },
                            {
                                href: "./img/buildings/Uppal-stadium.jpg",
                                title: "Uppal Stadium - Hyderabad, Telangana",
                            },
                            { href: "./img/buildings/vwogen.jpg", title: "VolksWagen" },
                        ]}
                    />

                    <ProjectCard
                        title="Real Estate"
                        images={[
                            {
                                href: "./img/roads/Nagpur Metro Project, Maharashtra.jpg",
                                title: "Nagpur Metro Project, Maharashtra",
                            },
                            {
                                href: "./img/roads/Pune Metro Project, Maharashtra.jpg",
                                title: "Pune Metro Project, Maharashtra",
                            },
                            {
                                href: "./img/roads/Samruddhi.jpg",
                                title: "Samruddhi Expressway, Nagpur, Maharashtra",
                            },
                            {
                                href: "./img/railways/Metro-Benguluru.jpg",
                                title: "Metro Station - Bengaluru, Karnataka",
                            },
                            {
                                href: "./img/railways/Metro-Benguluru-2.jpg",
                                title: "Metro - Bengaluru, Karnataka",
                            },
                        ]}
                        backgroundVariant="bg-[url('/public/real.jpg')]"
                    />

                    <ProjectCard
                        title="Infrastructure"
                        images={[
                            {
                                href: "./img/electrical/33-KV-11-KV-Sub-Station-mangaldoi-Assam.jpg",
                                title: "33 KV 11 KV Sub Station - Mangaldoi, Assam",
                            },
                            {
                                href: "./img/electrical/Substation-Siddipet.jpg",
                                title: "Yellaipally Electrical Project, Telanagana",
                            },
                            {
                                href: "./img/electrical/Electrical-Siddipet.jpg",
                                title: "400 KV Chandlapur-Yellaipally QMDC Line, Telangana",
                            },
                            {
                                href: "./img/electrical/33-KV-11-KV-Sub-Station-Uppalwadi-Nagpur.jpg",
                                title:
                                    "33 KV 11 KV Sub Station - Uppalwadi - Nagpur, Maharashtra",
                            },
                            {
                                href: "./img/electrical/765KV-Transmission-line-Jaipur.jpg",
                                title: "765KV Transmission line - Jaipur, Rajasthan",
                            },
                            {
                                href: "./img/electrical/400KV-Transmission-line-Vijayawada-to-Nellore.jpg",
                                title: "400 KV Transmission Line, Vijayawada, Andhra Pradesh",
                            },
                        ]}
                        backgroundVariant="bg-[url('/public/infra.jpg')]"
                    />
                </div>
            </div>
            <button
                aria-label="Next"
                type="button"
                className="static text-black text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 caret-black inline-block h-auto justify-normal leading-[normal] text-center w-auto z-auto right-auto inset-y-auto font-arial md:absolute md:text-blue-950 md:text-[0px] md:items-center md:aspect-auto md:bg-transparent md:caret-transparent md:flex md:h-[30px] md:justify-center md:leading-[0px] md:overscroll-x-auto md:overscroll-y-auto md:right-[-30px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[30px] md:z-[1] md:[mask-position:0%] md:bg-left-top md:m-auto md:scroll-m-0 md:scroll-p-[auto] md:inset-y-0 md:font-font_awesome_5_free before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-stone-900 before:md:block before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-semibold before:md:tracking-[normal] before:md:leading-[35.2px] before:md:list-outside before:md:list-disc before:md:min-h-[auto] before:md:min-w-[auto] before:md:pointer-events-auto before:md:text-center before:md:no-underline before:md:indent-[0px] before:md:normal-case before:md:visible before:md:border-separate before:md:font-font_awesome_5_free"
            >
                Next
            </button>
        </div>
    );
};
