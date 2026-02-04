export type NavbarDropdownProps = {
    variant: string;
    items: Array<{
        href: string;
        text: string;
        hasIcon?: boolean;
        subItems?: Array<{
            href: string;
            text: string;
            hasIcon?: boolean;
            subItems?: Array<{
                href: string;
                text: string;
            }>;
        }>;
    }>;
};

export const NavbarDropdown = (props: NavbarDropdownProps) => {
    if (props.variant === "nested") {
        return (
            <ul className="static text-neutral-800 text-base bg-clip-padding bg-white box-border caret-transparent hidden leading-6 min-w-40 z-[1000] pl-0 py-2 left-0 top-full md:absolute">
                {props.items.map((item, index) => (
                    <li
                        key={index}
                        className="static text-[15px] box-border caret-transparent leading-[22.5px] mb-[5px] md:relative"
                    >
                        <a
                            href={item.href}
                            className="text-blue-950 text-sm border-b-gray-600 border-l-blue-950 border-r-blue-950 border-t-blue-950 box-border caret-transparent clear-both block leading-[21px] text-right text-nowrap w-full px-[12.8px] py-1 border-b md:text-left hover:text-white hover:bg-blue-950 hover:border-t-white hover:border-x-white"
                        >
                            {item.text}
                            {item.hasIcon && (
                                <i className="text-amber-400 text-xs font-black box-border caret-transparent inline-block leading-3 text-right text-nowrap pl-[5px] font-font_awesome_5_free md:text-left before:accent-auto before:box-border before:caret-transparent before:text-amber-400 before:text-xs before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-3 before:list-outside before:list-none before:pointer-events-auto before:text-right before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-font_awesome_5_free before:md:text-left"></i>
                            )}
                        </a>
                        {item.subItems && (
                            <ul className="static text-base bg-clip-padding bg-white box-border caret-transparent hidden leading-6 min-w-40 z-[1000] pl-0 py-2 left-0 top-full md:absolute md:top-[-7px] md:left-full">
                                {item.subItems.map((subItem, subIndex) => (
                                    <li
                                        key={subIndex}
                                        className="static text-[15px] box-border caret-transparent leading-[22.5px] mb-[5px] md:relative"
                                    >
                                        <a
                                            href={subItem.href}
                                            className="text-blue-950 text-sm border-b-gray-600 border-l-blue-950 border-r-blue-950 border-t-blue-950 box-border caret-transparent clear-both block leading-[21px] text-right text-nowrap w-full px-[12.8px] py-1 border-b md:text-left hover:text-white hover:bg-blue-950 hover:border-t-white hover:border-x-white"
                                        >
                                            {subItem.text}
                                            {subItem.hasIcon && (
                                                <i className="text-amber-400 text-xs font-black box-border caret-transparent inline-block leading-3 text-right text-nowrap pl-[5px] font-font_awesome_5_free md:text-left before:accent-auto before:box-border before:caret-transparent before:text-amber-400 before:text-xs before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-3 before:list-outside before:list-none before:pointer-events-auto before:text-right before:indent-[0px] before:normal-case before:text-nowrap before:visible before:border-separate before:font-font_awesome_5_free before:md:text-left"></i>
                                            )}
                                        </a>
                                        {subItem.subItems && (
                                            <ul className="static text-base bg-clip-padding bg-white box-border caret-transparent hidden leading-6 min-w-40 z-[1000] pl-0 py-2 left-0 top-full md:absolute md:top-[-7px] md:left-full">
                                                {subItem.subItems.map((subSubItem, subSubIndex) => (
                                                    <li
                                                        key={subSubIndex}
                                                        className="static text-[15px] box-border caret-transparent leading-[22.5px] mb-[5px] md:relative"
                                                    >
                                                        <a
                                                            href={subSubItem.href}
                                                            className="text-blue-950 text-sm border-b-gray-600 border-l-blue-950 border-r-blue-950 border-t-blue-950 box-border caret-transparent clear-both block leading-[21px] text-right text-nowrap w-full px-[12.8px] py-1 border-b md:text-left hover:text-white hover:bg-blue-950 hover:border-t-white hover:border-x-white"
                                                        >
                                                            {subSubItem.text}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <div className="static text-neutral-800 text-base bg-clip-padding bg-white box-border caret-transparent hidden leading-6 min-w-40 z-[1000] py-2 left-0 top-full md:absolute">
            {props.items.map((item, index) => (
                <a
                    key={index}
                    href={item.href}
                    className="text-blue-950 text-sm border-b-gray-600 border-l-blue-950 border-r-blue-950 border-t-blue-950 box-border caret-transparent clear-both block leading-[21px] text-right text-nowrap w-full px-[12.8px] py-1 border-b md:text-left hover:text-white hover:bg-blue-950 hover:border-t-white hover:border-x-white"
                >
                    {item.text}
                </a>
            ))}
        </div>
    );
};
