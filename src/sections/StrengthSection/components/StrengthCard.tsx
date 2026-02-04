import { Check, LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface StrengthCardProps {
    variant?: "hero" | "bordered" | "default" | "filled" | "";
    label?: string;
    title: ReactNode;
    listItems?: string[];
    paragraphs?: ReactNode[];
    imageUrl?: string;
    icon?: LucideIcon;
    className?: string;
}

export const StrengthCard = (props: StrengthCardProps) => {
    const Icon = props.icon;

    if (props.variant === "hero") {
        return (
            <div className={`relative box-border caret-transparent basis-auto shrink max-w-none min-h-px w-full p-4 md:basis-[33.3333%] md:shrink-0 md:max-w-[33.3333%] ${props.className || ""}`}>
                <div className="bg-white box-border caret-transparent min-h-[400px] mb-5 px-[30px] py-10 transition-transform duration-300 hover:scale-105 hover:shadow-xl h-full rounded-xl">
                    {props.label && (
                        <div className="text-blue-950 text-[13px] font-bold box-border caret-transparent tracking-[1.3px] uppercase mb-2.5 border-l-4 border-amber-400 pl-3">
                            {props.label}
                        </div>
                    )}
                    <h4 className="text-blue-950 text-[32px] font-bold box-border caret-transparent leading-tight w-full mb-6 mt-4">
                        {props.title}
                    </h4>
                    <ul className="list-none p-0 m-0 space-y-3">
                        {props.listItems?.map((item, index) => (
                            <li key={index} className="flex items-start text-zinc-600 text-[15px]">
                                <Check className="w-5 h-5 text-amber-400 mr-3 mt-0.5 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    const isBordered = props.variant === "bordered";
    const isFilled = props.variant === "filled";

    return (
        <div className={`relative box-border caret-transparent basis-auto shrink max-w-none min-h-px w-full p-4 md:basis-[33.3333%] md:shrink-0 md:max-w-[33.3333%] ${props.className || ""}`}>
            <div
                className={`box-border caret-transparent min-h-[400px] mb-5 px-[30px] py-10 transition-transform duration-300 hover:scale-105 hover:shadow-xl h-full flex flex-col items-center text-center rounded-xl
                ${isBordered ? 'border border-amber-400 bg-transparent' : isFilled ? 'bg-white' : 'bg-transparent'}
                `}
            >
                {Icon && <Icon className="w-16 h-16 text-amber-400 mb-6 stroke-[1.5]" />}

                <h4 className={`${isFilled ? 'text-blue-950' : 'text-white'} text-[24px] font-bold box-border caret-transparent leading-tight w-full mb-6`}>
                    {props.title}
                </h4>

                {props.paragraphs?.map((paragraph, index) => (
                    <div
                        key={index}
                        className={`${isFilled ? 'text-zinc-600' : 'text-white'} text-[15px] font-normal box-border caret-transparent leading-relaxed mb-4`}
                    >
                        {paragraph}
                    </div>
                ))}
            </div>
        </div>
    );
};
