import { LucideIcon } from "lucide-react";

export type ExpertiseCardProps = {
    imageSrc?: string;
    icon?: LucideIcon;
    title: string;
    description: string;
};

export const ExpertiseCard = (props: ExpertiseCardProps) => {
    const Icon = props.icon;

    return (
        <div className="relative box-border caret-transparent basis-auto shrink max-w-none min-h-px w-full px-[15px] md:basis-[33.3333%] md:shrink-0 md:max-w-[33.3333%]">
            <div className="box-border caret-transparent min-h-[380px] border border-sky-900 mb-5 px-[30px] py-8 border-solid transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-sky-900/50 group rounded-lg">
                <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px] mb-4">
                    <div className="relative box-border caret-transparent basis-full shrink-0 max-w-full min-h-px w-full px-[15px]">
                        {Icon ? (
                            <Icon className="w-12 h-12 text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                        ) : (
                            props.imageSrc && (
                                <img
                                    src={props.imageSrc}
                                    className="box-border caret-transparent mb-4"
                                    alt={props.title}
                                />
                            )
                        )}
                    </div>
                </div>
                <h4 className="text-amber-400 text-[30px] font-bold box-border caret-transparent leading-tight mt-2.5 mb-4 group-hover:text-amber-300 transition-colors">
                    {props.title}
                </h4>
                <p className="text-white text-[17px] font-normal box-border caret-transparent leading-relaxed mb-[25px] text-justify">
                    {props.description}
                </p>
            </div>
        </div>
    );
};
