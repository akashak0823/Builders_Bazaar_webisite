import { ExpertiseCard } from "@/sections/ExpertiseSection/components/ExpertiseCard";
import {
    BrickWall,
    Droplets,
    Zap,
    PaintRoller,
    Hammer,
    Bath,
    Layers,
} from "lucide-react";

export const ExpertiseSection = () => {
    return (
        <section className="bg-blue-950 box-border caret-transparent px-[15px] py-[60px] md:px-0">
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[1140px]">
                <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px] mb-6">
                    <div className="relative box-border caret-transparent basis-auto shrink max-w-none min-h-px w-full px-[15px] md:basis-6/12 md:shrink-0 md:max-w-[50%]">
                        <p className="relative text-white text-lg font-bold box-border caret-transparent leading-[21px] pl-[50px] before:accent-auto before:bg-amber-400 before:box-border before:caret-transparent before:text-white before:block before:text-sm before:not-italic before:normal-nums before:font-bold before:h-0.5 before:tracking-[normal] before:leading-[21px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-left before:indent-[0px] before:normal-case before:visible before:w-10 before:m-auto before:border-separate before:left-0 before:inset-y-0 before:font-lato">
                            OUR PRODUCT RANGE
                        </p>
                        <h2 className="text-white text-[48px] font-bold box-border caret-transparent leading-[55px] my-2.5">
                            Your One-Stop Shop for Quality Construction Materials
                        </h2>
                    </div>
                </div>
                <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
                    <ExpertiseCard
                        icon={BrickWall}
                        title="Construction Materials"
                        description="We provide the foundation for your dreams with high-quality cement, TMT bars, bricks, and aggregates. Our materials are sourced from trusted brands to ensure strength, durability, and longevity for every structure you build."
                    />
                    <ExpertiseCard
                        icon={Droplets}
                        title="Plumbing Solutions"
                        description="From residential to commercial projects, our comprehensive range of plumbing supplies includes durable pipes, fittings, pumps, and water storage solutions. We ensure leak-proof and efficient water management systems."
                    />
                    <ExpertiseCard
                        icon={Zap}
                        title="Electrical & Lighting"
                        description="Light up your world with our premium electrical goods. We stock a wide variety of wires, cables, switches, circuit breakers, and modern LED lighting fixtures that combine safety with energy efficiency."
                    />
                    <ExpertiseCard
                        icon={PaintRoller}
                        title="Paints & Finishes"
                        description="Add color to your life with our vibrant collection of interior and exterior paints, primers, and wall finishes. Our range includes top brands that offer superior coverage, weather resistance, and a lasting finish."
                    />
                    <ExpertiseCard
                        icon={Hammer}
                        title="Tools & Machinery"
                        description="Empower your work with our professional-grade power tools, hand tools, and safety equipment. Whether you are a DIY enthusiast or a professional contractor, we have the right tools to get the job done efficiently."
                    />
                    <ExpertiseCard
                        icon={Bath}
                        title="Sanitaryware & Bath"
                        description="Transform your bathroom into a sanctuary with our elegant range of faucets, showers, sanitaryware, and accessories. We offer designs that blend functionality with style to create the perfect space."
                    />
                    <ExpertiseCard
                        icon={Layers}
                        title="Flooring & Tiles"
                        description="Step onto luxury with our exquisite collection of vitrified tiles, granite, marble, and wooden flooring. Available in various patterns and textures, our flooring solutions add a touch of class to any interior."
                    />
                </div>
            </div>
        </section>
    );
};
