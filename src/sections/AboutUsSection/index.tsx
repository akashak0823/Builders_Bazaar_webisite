export const AboutUsSection = () => {
    return (
        <section className="bg-white box-border caret-transparent px-[15px] py-[60px] md:px-0">
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-[15px] md:max-w-[1140px]">
                <div className="flex flex-wrap items-center -mx-[15px]">
                    <div className="w-full md:w-1/2 px-[15px] mb-8 md:mb-0">
                        <h2 className="text-zinc-800 text-[38px] font-normal box-border caret-transparent leading-[45.6px] mb-6">
                            About <span className="font-bold">Builders Bazaar</span>
                        </h2>
                        <p className="text-zinc-600 text-[15px] font-normal box-border caret-transparent leading-[26px] mb-6 text-justify">
                            Builders Bazaar brings a wide range of capabilities to major infrastructure
                            projects. Our integrated approach, adaptability, and dedication to quality over
                            the past 4 decades has placed us at the forefront of infrastructure
                            development across sectors. We strive to consistently maintain a pioneering
                            spirit and take pride in our strong record of timely project delivery.
                        </p>

                    </div>
                    <div className="w-full md:w-1/2 px-[15px]">
                        <img
                            src="/about.jpg"
                            alt="About Builders Bazaar"
                            className="w-full h-auto max-h-[500px] object-contain mx-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

