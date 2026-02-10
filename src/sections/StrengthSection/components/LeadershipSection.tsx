import { Check } from "lucide-react";

export const LeadershipSection = () => {
    return (
        <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
            <div className="relative box-border caret-transparent basis-auto shrink max-w-none min-h-px w-full px-[15px] md:basis-full md:shrink-0 md:max-w-full">
                <p className="relative text-white text-lg font-bold box-border caret-transparent leading-[21px] pl-[50px] before:accent-auto before:bg-amber-400 before:box-border before:caret-transparent before:text-white before:block before:text-sm before:not-italic before:normal-nums before:font-bold before:h-0.5 before:tracking-[normal] before:leading-[21px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-left before:indent-[0px] before:normal-case before:visible before:w-10 before:m-auto before:border-separate before:left-0 before:inset-y-0 before:font-lato">
                    LEADERSHIP EXCELLENCE
                </p>
            </div>
            <div className="relative box-border caret-transparent basis-auto shrink max-w-none min-h-px w-full px-[15px] md:basis-full md:shrink-0 md:max-w-full">
                <div className="[align-items:normal] box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px] mb-6 md:items-end">
                    <div className="relative box-border caret-transparent basis-auto shrink max-w-none min-h-px w-full px-[15px] md:basis-6/12 md:shrink-0 md:max-w-[50%]">
                        <h2 className="text-white text-[48px] font-bold box-border caret-transparent leading-[55px] my-2.5">
                            Creating a brighter future with integrity and commitment
                        </h2>
                    </div>
                    <div className="relative box-border caret-transparent basis-auto shrink max-w-none min-h-px w-full px-[15px] md:basis-6/12 md:shrink-0 md:max-w-[50%]"></div>
                </div>
            </div>
            <div className="relative box-border caret-transparent basis-auto shrink max-w-none min-h-px w-full px-[15px] md:basis-full md:shrink-0 md:max-w-full">
                <div className="box-border caret-transparent mb-6">
                    <img
                        src="/Assets/1.jpg"
                        alt="Creating a brighter future"
                        className="box-border caret-transparent w-full h-auto max-h-[600px] object-cover"
                    />
                </div>
            </div>
            <div className="relative box-border caret-transparent basis-auto shrink max-w-none min-h-px w-full px-[15px] md:basis-full md:shrink-0 md:max-w-full">
                <p className="text-white text-[18px] font-bold box-border caret-transparent leading-[28px] text-justify mb-4">
                    Thanks to our dedicated leadership team and skilled workforce, Builders Bazaar has
                    continuously succeeded in meeting its objectives in terms of quality
                    and timely delivery. Builders Bazaar&#39;s four decades of endeavour and
                    commitment has seen it foray into new divisions and crossed the
                    billion dollar mark in turnover and 4 billion dollar mark in the Order
                    Book.{" "}
                </p>

                <ul className="box-border caret-transparent list-none mb-4 pl-0">
                    <li className="relative text-white text-[18px] font-bold box-border caret-transparent leading-[28px] mb-2.5 pl-0 flex items-start">
                        <Check className="w-5 h-5 text-amber-400 mr-2 mt-1.5 shrink-0" />
                        <span>Experienced and dedicated teams</span>
                    </li>
                    <li className="relative text-white text-[18px] font-bold box-border caret-transparent leading-[28px] mb-2.5 pl-0 flex items-start">
                        <Check className="w-5 h-5 text-amber-400 mr-2 mt-1.5 shrink-0" />
                        <span>Best-in-class engineering expertise</span>
                    </li>
                    <li className="relative text-white text-[18px] font-bold box-border caret-transparent leading-[28px] mb-2.5 pl-0 flex items-start">
                        <Check className="w-5 h-5 text-amber-400 mr-2 mt-1.5 shrink-0" />
                        <span>Time-bound delivery</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};
