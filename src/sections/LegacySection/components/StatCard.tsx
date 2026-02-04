export type StatCardProps = {
    statNumber: string;
    statSuffix?: string;
    statUnit?: string;
    description: React.ReactNode;
    containerVariant: string;
    innerContainerVariant: string;
    additionalClasses?: string;
};

export const StatCard = (props: StatCardProps) => {
    return (
        <div
            className={`relative box-border caret-transparent w-full px-4 py-6 transition-all duration-300 hover:scale-105 hover:bg-zinc-50 rounded-lg group ${props.containerVariant} ${props.additionalClasses || ""}`}
        >
            <div
                className={`relative box-border caret-transparent flex flex-col items-center justify-center text-center ${props.innerContainerVariant}`}
            >
                <h2 className="text-violet-900 text-[48px] font-bold box-border caret-transparent leading-none mb-2 group-hover:text-amber-500 transition-colors">
                    <span className="box-border caret-transparent">
                        {props.statNumber}
                    </span>
                    {props.statSuffix}
                    {props.statUnit && (
                        <span className="text-[24px] box-border caret-transparent ml-1">
                            <b className="font-black box-border caret-transparent">
                                {props.statUnit}
                            </b>
                        </span>
                    )}
                </h2>
                <p className="text-zinc-600 text-[16px] font-medium uppercase tracking-wider box-border caret-transparent leading-relaxed">
                    {props.description}
                </p>
            </div>
        </div>
    );
};
