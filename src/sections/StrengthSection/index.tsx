import { StrengthCard } from "@/sections/StrengthSection/components/StrengthCard";
import { LeadershipSection } from "@/sections/StrengthSection/components/LeadershipSection";
import { Lightbulb, Shield, Building, Rocket, Award, Layers } from "lucide-react";

export const StrengthSection = () => {
    return (
        <section className="bg-blue-950 box-border caret-transparent px-[15px] py-[60px] md:px-0">
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[1140px]">
                <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px] mb-12 pb-12 border-b border-zinc-700">
                    <StrengthCard
                        variant="hero"
                        label="OUR STRENGTH"
                        icon={Layers}
                        title={
                            <>
                                Comprehensive Hardware
                                <br /> Solutions
                            </>
                        }
                        listItems={[
                            "Wide range of quality products",
                            "Expert guidance for all projects",
                            "Trusted brands and authentic materials",
                            "Competitive pricing and bulk deals",
                            "Timely delivery to your site",
                        ]}
                    />
                    <StrengthCard
                        variant="bordered"
                        icon={Lightbulb}
                        title={
                            <>
                                Led by Industry <br className="box-border caret-transparent" /> Experts
                            </>
                        }
                        paragraphs={[
                            <>
                                Guided by a team with decades of experience in the construction industry, Builders Bazaar understands the unique challenges of every project.
                            </>,
                            <>
                                "We believe that the right materials are the foundation of every great structure. Our mission is to provide not just products, but solutions that last a lifetime."
                            </>,
                        ]}
                    />
                    <StrengthCard
                        variant="filled"
                        icon={Shield}
                        title={
                            <>
                                Built on Trust <br className="box-border caret-transparent" />
                                & Quality
                            </>
                        }
                        paragraphs={[
                            <>
                                At Builders Bazaar, we believe that trust is earned through quality. We are committed to supplying only the best materials that meet rigorous safety and durability standards.
                                Values of honesty, integrity, and transparency are the pillars of our business, ensuring you get exactly what you pay for.
                            </>,
                        ]}
                    />
                    <StrengthCard
                        variant="bordered"
                        icon={Building}
                        title="Partner in Major Projects"
                        paragraphs={[
                            "From small home renovations to large-scale commercial complexes, Builders Bazaar has been a reliable partner for countless builders and contractors. Our ability to supply bulk quantities on time has made us a preferred choice for major construction projects in the region.",
                        ]}
                    />
                    <StrengthCard
                        variant="filled"
                        icon={Rocket}
                        title={
                            <>
                                Innovative Product <br className="box-border caret-transparent" />
                                Range
                            </>
                        }
                        paragraphs={[
                            "We constantly update our inventory with the latest innovations in construction technology. Whether it's eco-friendly materials, smart home solutions, or advanced tools, Builders Bazaar brings the future of construction to your doorstep.",
                        ]}
                    />
                    <StrengthCard
                        variant="bordered"
                        icon={Award}
                        title="Commitment to Excellence"
                        paragraphs={[
                            "Our team of knowledgeable staff is always ready to assist you in selecting the right materials for your specific needs. We pride ourselves on our technical expertise and our commitment to customer satisfaction, ensuring excellence in every interaction.",
                        ]}
                    />
                </div>
                <LeadershipSection />
            </div>
        </section>
    );
};
