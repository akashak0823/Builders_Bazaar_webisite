import { ProjectCarousel } from "@/sections/ProjectsShowcase/components/ProjectCarousel";

export const ProjectsShowcase = () => {
    return (
        <section className="bg-yellow-500 box-border caret-transparent px-[15px] py-[60px] md:px-0">
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[1140px]">
                <p className="relative text-stone-700 text-sm box-border caret-transparent leading-[21px] pl-[50px] before:accent-auto before:bg-amber-400 before:box-border before:caret-transparent before:text-stone-700 before:block before:text-sm before:not-italic before:normal-nums before:font-bold before:h-0.5 before:tracking-[normal] before:leading-[21px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-left before:indent-[0px] before:normal-case before:visible before:w-10 before:m-auto before:border-separate before:left-0 before:inset-y-0 before:font-lato">
                    PROJECTS SHOWCASE
                </p>
                <h2 className="text-blue-900 text-[38px] box-border caret-transparent leading-[45.6px] my-2.5">
                    Key Projects
                </h2>
                <div className="box-border caret-transparent mt-6">
                    <ProjectCarousel />
                </div>
            </div>
        </section>
    );
};
