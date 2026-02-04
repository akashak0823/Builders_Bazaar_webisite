export const Copyright = () => {
    return (
        <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px] py-3">
            <div className="relative box-border caret-transparent basis-auto shrink max-w-none min-h-px w-full px-[15px] md:basis-6/12 md:shrink-0 md:max-w-[50%]">
                <p className="text-white text-[15px] font-normal box-border caret-transparent leading-[22.5px] mb-4">
                    All rights reserved Copyrights 2023.
                </p>
            </div>
            <div className="relative box-border caret-transparent basis-auto shrink max-w-none min-h-px text-left w-full px-[15px] md:basis-6/12 md:shrink-0 md:max-w-[50%] md:text-right">
                <p className="text-white text-[15px] font-normal box-border caret-transparent leading-[22.5px] text-left mb-4 md:text-right">
                    <a
                        href="./copyright-and-terms.html"
                        className="font-semibold box-border caret-transparent text-left md:text-right hover:underline"
                    >
                        Copyright &amp; Terms
                    </a>
                </p>
            </div>
        </div>
    );
};
