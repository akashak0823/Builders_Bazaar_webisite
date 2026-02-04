export type FooterLinksProps = {
    variant: string;
    title?: string;
    paragraphs?: string[];
    links?: Array<{
        text: string;
        href: string;
    }>;
    contacts?: Array<{
        icon: React.ReactNode;
        text: string;
        href: string;
    }>;
};

export const FooterLinks = (props: FooterLinksProps) => {
    if (props.variant === "about") {
        return (
            <div className="relative box-border caret-transparent basis-auto shrink max-w-none min-h-px w-full px-[15px] md:shrink-0 md:basis-[33.3333%] md:max-w-[33.3333%]">
                <div className="box-border caret-transparent pt-0 pb-2 md:pt-2">
                    {props.paragraphs?.map((paragraph, index) => (
                        <p
                            key={index}
                            className="text-white text-[16px] font-normal box-border caret-transparent leading-relaxed mb-4"
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        );
    }

    if (props.variant === "quick-links") {
        return (
            <div className="relative box-border caret-transparent basis-auto shrink max-w-none min-h-px w-full px-[15px] md:shrink-0 md:basis-[16.6667%] md:max-w-[16.6667%]">
                <div className="box-border caret-transparent pt-0 pb-2 md:pt-2">
                    <h4 className="text-white text-[26px] box-border caret-transparent leading-tight mb-4 md:mb-6">
                        {props.title}
                    </h4>
                    <ul className="box-border caret-transparent list-none mb-4 pl-0">
                        {props.links?.map((link, index) => (
                            <li
                                key={index}
                                className="text-[16px] box-border caret-transparent leading-relaxed mb-3"
                            >
                                <a
                                    href={link.href}
                                    className="text-white font-normal box-border caret-transparent hover:underline"
                                >
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    if (props.variant === "contacts") {
        return (
            <div className="relative box-border caret-transparent basis-auto shrink max-w-none min-h-px w-full px-[15px] md:shrink-0 md:basis-3/12 md:max-w-[25%]">
                <div className="box-border caret-transparent pt-0 pb-2 md:pt-2">
                    <h4 className="text-white text-[26px] box-border caret-transparent leading-tight mb-4 md:mb-6">
                        {props.title}
                    </h4>
                    <ul className="box-border caret-transparent list-none mb-4 pl-0">
                        {props.contacts?.map((contact, index) => (
                            <li
                                key={index}
                                className="text-[16px] box-border caret-transparent leading-relaxed relative text-white w-9/12 mb-4 pl-[30px]"
                            >
                                {contact.icon}
                                <a
                                    href={contact.href}
                                    className="font-normal box-border caret-transparent hover:underline"
                                >
                                    {contact.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    return null;
};
