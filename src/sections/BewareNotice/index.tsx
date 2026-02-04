export const BewareNotice = () => {
    return (
        <div className="box-border caret-transparent max-w-none w-full mt-12 mx-auto px-[15px] md:max-w-[1140px]">
            <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
                <div className="relative box-border caret-transparent basis-auto shrink max-w-none min-h-px w-full px-[15px] md:basis-full md:shrink-0 md:max-w-full">
                    <div className="items-center bg-blue-950 box-border caret-transparent flex justify-between">
                        <div className="text-white bg-red-500 box-border caret-transparent flex justify-center px-1 py-2">
                            <span className="items-center box-border caret-transparent flex">
                                <strong className="font-bold box-border caret-transparent block">
                                    BEWARE
                                </strong>
                            </span>
                        </div>
                        <strong className="font-bold box-border caret-transparent block">
                            <div className="box-border caret-transparent inline-block text-start text-nowrap w-[stretch] overflow-hidden">
                                <a
                                    href="./img/beware.jpg"
                                    title="BEWARE"
                                    className="text-white text-[15px] font-semibold box-border caret-transparent leading-[22.5px] text-nowrap hover:underline"
                                >
                                    Builders Bazaar does not charge any fee from jobseekers at any
                                    stage of the recruitment process. If you come across anyone
                                    demanding money in lieu of an offer letter, please bring such
                                    matters to our attention. For more information click on this
                                    link.
                                </a>
                                <span className="box-border caret-transparent text-nowrap"></span>
                            </div>
                        </strong>
                    </div>
                    <strong className="font-bold box-border caret-transparent"></strong>
                </div>
                <strong className="font-bold box-border caret-transparent block"></strong>
            </div>
            <strong className="font-bold box-border caret-transparent"></strong>
        </div>
    );
};
