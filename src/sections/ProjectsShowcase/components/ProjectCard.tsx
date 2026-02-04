export type ProjectCardProps = {
    title: string;
    images: Array<{
        href: string;
        title: string;
    }>;
    backgroundVariant: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
    return (
        <div className="box-border caret-transparent float-left min-h-px w-[345px] mb-0 px-[5px] md:w-[380px] md:mb-6 hover:scale-105 transition-transform duration-300">
            <div className="relative box-border caret-transparent">
                {props.images.map((image, index) => (
                    <a
                        key={index}
                        href={image.href}
                        title={image.title}
                        className="text-blue-600 text-[15px] font-semibold box-border caret-transparent leading-[22.5px] hover:text-sky-700 hover:underline hover:border-sky-700"
                    >
                        {index === 0 && (
                            <div
                                className={`bg-no-repeat bg-cover box-border caret-transparent min-h-[110px] bg-center mb-2.5 md:min-h-[260px] ${props.backgroundVariant}`}
                            ></div>
                        )}
                    </a>
                ))}
                <p className="absolute text-white text-sm font-normal bg-blue-950 box-border caret-transparent leading-[21px] text-center w-full p-[5px] bottom-5 md:text-lg md:leading-[27px] md:px-5">
                    {props.title}
                </p>
            </div>
        </div>
    );
};
