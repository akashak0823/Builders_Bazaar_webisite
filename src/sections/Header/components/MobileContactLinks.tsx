export type MobileContactLinksProps = {
    href: string;
    title: string;
    subtitle: string;
    icon?: React.ReactNode;
    className?: string;
};

export const MobileContactLinks = (props: MobileContactLinksProps) => {
    return (
        <li
            className={`relative text-blue-950 text-xs box-border caret-transparent leading-[18px] mr-0 mb-[5px] p-[5px] md:text-sm md:leading-[21px] md:mr-6 md:px-2.5 md:py-5 before:accent-auto before:bg-zinc-300 before:box-border before:caret-transparent before:text-blue-950 before:hidden before:text-xs before:not-italic before:normal-nums before:font-normal before:h-[70px] before:tracking-[normal] before:leading-[18px] before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-left before:indent-[0px] before:normal-case before:visible before:w-px before:m-auto before:border-separate before:-right-2.5 before:top-[15px] before:bottom-0 before:font-lato before:md:text-sm before:md:leading-[21px] ${props.className || ""}`}
        >
            <a
                href={props.href}
                className="text-[15px] font-semibold box-border caret-transparent hidden leading-[22.5px] md:block"
            >
                <span className="text-neutral-500 font-normal box-border caret-transparent">
                    {props.icon}
                    {props.title}
                </span>
                <br className="box-border caret-transparent" />
                <span className="box-border caret-transparent">{props.subtitle}</span>
            </a>
            <a
                href={props.href}
                className="text-[15px] font-semibold box-border caret-transparent block leading-[22.5px] md:hidden"
            >
                <i className="font-black box-border caret-transparent inline-block leading-[15px] font-font_awesome_5_free before:accent-auto before:box-border before:caret-transparent before:text-blue-950 before:text-[15px] before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[15px] before:list-outside before:list-none before:pointer-events-auto before:text-left before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_free"></i>
            </a>
        </li>
    );
};
