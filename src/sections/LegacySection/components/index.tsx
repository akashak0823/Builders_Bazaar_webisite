import { StatsGrid } from "@/sections/LegacySection/components/StatsGrid";

export const LegacySection = () => {
    return (
        <section className="box-border caret-transparent px-[15px] py-[60px] md:px-0">
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[1140px]">
                <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
                    <div className="relative box-border caret-transparent basis-auto shrink max-w-none min-h-px w-full px-[15px] md:basis-full md:shrink-0 md:max-w-full mb-12">
                        <p className="relative text-stone-700 text-lg font-bold box-border caret-transparent leading-[21px] pl-[50px] before:accent-auto before:bg-amber-400 before:box-border before:caret-transparent before:text-stone-700 before:block before:text-sm before:not-italic before:normal-nums before:font-bold before:h-0.5 before:tracking-[normal] before:leading-[21px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-left before:indent-[0px] before:normal-case before:visible before:w-10 before:m-auto before:border-separate before:left-0 before:inset-y-0 before:font-lato">
                            A LEGACY OF TRANSFORMATION
                        </p>
                        <h2 className="text-blue-950 text-[48px] font-bold box-border caret-transparent leading-[55px] my-4">
                            Over 4 decades of infra-excellence
                        </h2>
                        <p className="text-stone-700 text-[18px] box-border caret-transparent leading-[28px] mb-4 text-justify">
                            Builders Bazaar has ventured into diverse sectors of construction and
                            infrastructural development. Spanning across the nation, our
                            construction activities are covered under buildings,
                            transportation, water &amp; environment, electrical (T&amp;D),
                            irrigation, mining and railways sectors. All the projects bear the
                            indelible stamp of high quality. In the last 4 decades, we have
                            registered remarkable growth, both in terms of number and variety
                            of projects. We have progressed from strength to strength in
                            building expertise within the organisation to handle complex and
                            challenging projects. The veritable list of projects assigned to
                            and completed by us, is testimony of our capability and
                            commitment.
                        </p>
                    </div>
                    <StatsGrid />
                </div>
            </div>
        </section>
    );
};
