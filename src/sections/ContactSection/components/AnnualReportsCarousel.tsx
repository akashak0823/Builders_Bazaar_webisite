import { ReportCard } from "@/sections/ContactSection/components/ReportCard";
import { Download } from "lucide-react";

export const AnnualReportsCarousel = () => {
    return (
        <div className="relative box-border caret-transparent basis-auto shrink max-w-none min-h-px w-full px-[15px] md:basis-[33.3333%] md:shrink-0 md:max-w-[33.3333%]">
            <div className="relative box-border caret-transparent border border-zinc-200 mt-12 mb-4 border-solid">
                <button
                    aria-label="Previous"
                    type="button"
                    className="static text-black text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 caret-black inline-block h-auto justify-normal leading-[normal] text-center w-auto z-auto rounded-none left-auto top-auto font-arial md:absolute md:text-blue-950 md:text-[0px] md:items-center md:aspect-auto md:bg-transparent md:caret-transparent md:flex md:h-[30px] md:justify-center md:leading-[0px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[30px] md:z-[1] md:border md:border-neutral-400 md:[mask-position:0%] md:bg-left-top md:m-auto md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50px] md:border-solid md:left-0 md:-top-10 md:font-font_awesome_5_free before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-neutral-400 before:md:block before:md:text-sm before:md:not-italic before:md:normal-nums before:md:font-semibold before:md:tracking-[normal] before:md:leading-[30.8px] before:md:list-outside before:md:list-disc before:md:min-h-[auto] before:md:min-w-[auto] before:md:pointer-events-auto before:md:text-center before:md:no-underline before:md:indent-[0px] before:md:normal-case before:md:visible before:md:border-separate before:md:font-font_awesome_5_free hover:border-violet-900"
                >
                    Previous
                </button>
                <div className="static box-content caret-black md:relative md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <div className="static box-content caret-black w-auto left-auto top-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[4872px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0 before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-zinc-600 before:md:table before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-bold before:md:tracking-[normal] before:md:leading-6 before:md:list-outside before:md:list-disc before:md:pointer-events-auto before:md:text-left before:md:no-underline before:md:indent-[0px] before:md:normal-case before:md:visible before:md:border-separate before:md:font-lato after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:clear-both after:md:text-zinc-600 after:md:table after:md:text-base after:md:not-italic after:md:normal-nums after:md:font-bold after:md:tracking-[normal] after:md:leading-6 after:md:list-outside after:md:list-disc after:md:pointer-events-auto after:md:text-left after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:border-separate after:md:font-lato">
                        <ReportCard
                            href="./annual-reports/NCCAnnualReport2024-25.pdf"
                            title="ANNUAL REPORT 2024-25"
                            imageVariant="pr-[15px]"
                        />
                        <ReportCard
                            href="./annual-reports/AR-2023-24.pdf"
                            title="ANNUAL REPORT 2023-24"
                            imageVariant="pr-[15px]"
                        />
                        <ReportCard
                            href="./annual-reports/AR-2022-23.pdf"
                            title="ANNUAL REPORT 2022-23"
                            imageVariant="pr-[15px]"
                        />
                        <ReportCard
                            href="./annual-reports/NCC-Annual-Report-2021-22.pdf"
                            title="ANNUAL REPORT 2021-22"
                            imageVariant="pr-[15px]"
                        />
                        <ReportCard
                            href="./annual-reports/NCC-Annual-Report-2020-21.pdf"
                            title="ANNUAL REPORT 2020-21"
                            imageVariant="px-[15px]"
                        />
                        <ReportCard
                            href="./annual-reports/NCC-Annual-Report-2019-20.pdf"
                            title="ANNUAL REPORT 2019-20"
                            imageVariant="px-[15px]"
                        />
                        <ReportCard
                            href="./annual-reports/NCC-Annual-Report-2018-19.pdf"
                            title="ANNUAL REPORT 2018-19"
                            imageVariant="px-[15px]"
                        />
                        <ReportCard
                            href="./annual-reports/NCC-Annual-Report-2017-18.pdf"
                            title="ANNUAL REPORT 2017-18"
                            imageVariant="pr-[15px]"
                        />
                        <ReportCard
                            href="./annual-reports/NCC-Annual-Report-2016-17.pdf"
                            title="ANNUAL REPORT 2016-17"
                            imageVariant="pr-[15px]"
                        />
                        <ReportCard
                            href="./annual-reports/NCC-Annual-Report-2015-16.pdf"
                            title="ANNUAL REPORT 2015-16"
                            imageVariant="px-[15px]"
                        />
                        <ReportCard
                            href="./annual-reports/NCC-Annual-Report-2014-15.pdf"
                            title="ANNUAL REPORT 2014-15"
                            imageVariant="pr-[15px]"
                        />
                        <ReportCard
                            href="./annual-reports/NCC-Annual-Report-2013-14.pdf"
                            title="ANNUAL REPORT 2013-14"
                            imageVariant="px-[15px]"
                        />
                        <ReportCard
                            href="./annual-reports/NCC-Annual-Report-2012-13.pdf"
                            title="ANNUAL REPORT 2012-13"
                            imageVariant="px-[15px]"
                        />
                        <ReportCard
                            href="./annual-reports/NCC-Annual-Report-2011-12.pdf"
                            title="ANNUAL REPORT 2011-12"
                            imageVariant="pr-[15px]"
                        />
                    </div>
                </div>
                <button
                    aria-label="Next"
                    type="button"
                    className="static text-black text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 caret-black inline-block h-auto justify-normal leading-[normal] text-center w-auto z-auto rounded-none right-auto top-auto font-arial md:absolute md:text-blue-950 md:text-[0px] md:items-center md:aspect-auto md:bg-transparent md:caret-transparent md:flex md:h-[30px] md:justify-center md:leading-[0px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[30px] md:z-[1] md:border md:border-neutral-400 md:[mask-position:0%] md:bg-left-top md:m-auto md:scroll-m-0 md:scroll-p-[auto] md:rounded-[50px] md:border-solid md:right-[78%] md:-top-10 md:font-font_awesome_5_free before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-neutral-400 before:md:block before:md:text-sm before:md:not-italic before:md:normal-nums before:md:font-semibold before:md:tracking-[normal] before:md:leading-[30.8px] before:md:list-outside before:md:list-disc before:md:min-h-[auto] before:md:min-w-[auto] before:md:pointer-events-auto before:md:text-center before:md:no-underline before:md:indent-[0px] before:md:normal-case before:md:visible before:md:border-separate before:md:font-font_awesome_5_free hover:border-violet-900"
                >
                    Next
                </button>
            </div>
            <div className="box-border caret-transparent mb-4">
                <a
                    href="./NCC_Brochure-2024-low.pdf"
                    className="font-semibold box-border caret-transparent"
                >
                    <div className="bg-[url('https://ncclimited.com/img/media-kit-2.jpg')] bg-no-repeat bg-cover box-border caret-transparent flex flex-col justify-between min-h-[135px] border border-zinc-200 bg-center mb-5 p-2.5 border-solid md:min-h-[182px] md:p-5">
                        <h6 className="font-bold box-border caret-transparent leading-[19.2px] w-[43%] mb-[5px]">
                            CORPORATE BROCHURE
                        </h6>
                        <p className="text-[15px] font-normal box-border caret-transparent leading-[22.5px] text-right w-2/5">
                            <Download className="w-4 h-4 text-zinc-600" />
                        </p>
                    </div>
                </a>
            </div>
        </div>
    );
};
