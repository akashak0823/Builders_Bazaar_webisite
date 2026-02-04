import { Header } from "@/sections/Header";
import { VideoHero } from "@/sections/VideoHero";
import { LegacySection } from "@/sections/LegacySection";
import { ExpertiseSection } from "@/sections/ExpertiseSection";
import { ProjectsShowcase } from "@/sections/ProjectsShowcase";
import { AboutUsSection } from "@/sections/AboutUsSection";
import { StrengthSection } from "@/sections/StrengthSection";
import { ContactSection } from "@/sections/ContactSection";
import { Footer } from "@/sections/Footer";

export const HomePage = () => {
    return (
        <div className="text-zinc-600 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc pointer-events-auto text-left indent-[0px] normal-case visible border-separate font-lato">
            <div className="box-border caret-transparent">
                <Header />
            </div>
            <VideoHero />
            <strong className="font-bold box-border caret-transparent">
                <LegacySection />
                <ExpertiseSection />
                <ProjectsShowcase />
                <AboutUsSection />
                <StrengthSection />

                <ContactSection />
                <div className="box-border caret-transparent">
                    <Footer />
                </div>
            </strong>
        </div>
    );
};
