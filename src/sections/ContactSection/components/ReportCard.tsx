export type ReportCardProps = {
    href: string;
    title: string;
    imageVariant: string;
};

export const ReportCard = (props: ReportCardProps) => {
    return (
        <div className="box-border caret-transparent float-left min-h-px w-[313px] md:w-[348px]">
            <a
                href={props.href}
                className="font-semibold box-border caret-transparent"
            >
                <div className="bg-white box-border caret-transparent flex flex-wrap justify-between ml-[-15px] mr-[-15px] min-h-[135px] md:min-h-[182px]">
                    <div className="relative border-b-zinc-600 border-l-zinc-600 border-r-red-200 border-t-zinc-600 box-border caret-transparent flex basis-6/12 flex-col shrink-0 justify-between max-w-[50%] min-h-px w-full pl-[30px] py-5 border-r-2">
                        <h6 className="font-bold box-border caret-transparent leading-[19.2px] w-full mb-[5px]">
                            {props.title}
                        </h6>
                        <p className="text-[15px] font-normal box-border caret-transparent leading-[22.5px] text-right w-full pr-10">
                            <i className="font-black box-border caret-transparent inline-block leading-[15px] font-font_awesome_5_free before:accent-auto before:box-border before:caret-transparent before:text-zinc-600 before:text-[15px] before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[15px] before:list-outside before:list-disc before:pointer-events-auto before:text-right before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_free"></i>
                        </p>
                    </div>
                    <div
                        className={`relative box-border caret-transparent basis-6/12 shrink-0 max-w-[50%] min-h-px w-full ${props.imageVariant}`}
                    >
                        <img className="box-border caret-transparent h-full max-w-full" />
                    </div>
                </div>
            </a>
        </div>
    );
};
