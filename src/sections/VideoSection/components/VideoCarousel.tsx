export const VideoCarousel = () => {
    return (
        <div className="relative box-border caret-transparent flex-wrap ml-[-15px] mr-[-15px]">
            <div className="static box-content caret-black md:relative md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="static box-content caret-black w-auto left-auto top-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-[760px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-0 md:top-0 before:md:accent-auto before:md:box-border before:md:caret-transparent before:md:text-zinc-600 before:md:table before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-bold before:md:tracking-[normal] before:md:leading-6 before:md:list-outside before:md:list-disc before:md:pointer-events-auto before:md:text-left before:md:no-underline before:md:indent-[0px] before:md:normal-case before:md:visible before:md:border-separate before:md:font-lato after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:clear-both after:md:text-zinc-600 after:md:table after:md:text-base after:md:not-italic after:md:normal-nums after:md:font-bold after:md:tracking-[normal] after:md:leading-6 after:md:list-outside after:md:list-disc after:md:pointer-events-auto after:md:text-left after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:border-separate after:md:font-lato">
                    <div className="box-border caret-transparent float-left min-h-px w-[345px] mb-0 px-[5px] md:w-[380px] md:mb-6">
                        <div className="relative box-border caret-transparent">
                            <video
                                controls={true}
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                className="aspect-[auto_320_/_240] box-border caret-transparent h-60 w-80"
                            >
                                <source
                                    src="./videos/Corporate_Film_28_08_2025-Low.mp4"
                                    type="video/mp4"
                                    className="text-black font-normal box-border caret-transparent leading-[normal] text-start font-times_new_roman"
                                />
                                Your browser does not support the video tag.
                            </video>
                            <p className="text-[15px] font-normal box-border caret-transparent leading-[22.5px] mb-4">
                                Corporate Film
                            </p>
                        </div>
                    </div>
                    <div className="box-border caret-transparent float-left min-h-px w-[345px] mb-0 px-[5px] md:w-[380px] md:mb-6">
                        <div className="relative box-border caret-transparent">
                            <iframe
                                src="https://www.youtube.com/embed/Q7tfsXgSFow?si=OUlH2ZIQaaWScbzu"
                                title="YouTube video player"
                                className="box-border caret-transparent h-60 w-80 -mb-2.5"
                            ></iframe>
                            <br className="box-border caret-transparent" />
                            <p className="text-[15px] font-normal box-border caret-transparent leading-[22.5px] mb-4">
                                Biography of Dr AVS Raju
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
