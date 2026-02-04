import { StatCard } from "./StatCard";

export const StatsGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto px-4">
            <StatCard description="Years of Experience" statNumber="40+" containerVariant="" innerContainerVariant="" />
            <StatCard description="Projects Completed" statNumber="500+" containerVariant="" innerContainerVariant="" />
            <StatCard description="Happy Clients" statNumber="1000+" containerVariant="" innerContainerVariant="" />
        </div>
    );
};
