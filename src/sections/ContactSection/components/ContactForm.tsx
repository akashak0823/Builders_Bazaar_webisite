import { Send } from "lucide-react";

export const ContactForm = () => {
    return (
        <div className="w-full">
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-1 bg-amber-400"></div>
                    <span className="text-zinc-800 font-bold uppercase tracking-wider text-sm">CONTACT US</span>
                </div>
                <h2 className="text-sky-950 text-5xl font-bold leading-tight">
                    Reach out <br />
                    to excellence
                </h2>
            </div>
            <form className="box-border caret-transparent">
                <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px]">
                    <div className="relative box-border caret-transparent basis-auto shrink max-w-none min-h-px w-full px-[15px] md:basis-6/12 md:shrink-0 md:max-w-[50%]">
                        <div className="box-border caret-transparent mb-6">
                            <input
                                type="text"
                                name="fullname"
                                placeholder="Full Name"
                                className="text-zinc-500 font-normal bg-white box-border caret-transparent block text-start w-full border border-zinc-300 px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors"
                            />
                        </div>
                    </div>
                    <div className="relative box-border caret-transparent basis-auto shrink max-w-none min-h-px w-full px-[15px] md:basis-6/12 md:shrink-0 md:max-w-[50%]">
                        <div className="box-border caret-transparent mb-6">
                            <input
                                type="number"
                                name="phone"
                                placeholder="Phone"
                                className="text-zinc-500 font-normal bg-white box-border caret-transparent block text-start w-full border border-zinc-300 px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors"
                            />
                        </div>
                    </div>
                </div>
                <div className="box-border caret-transparent mb-6">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="text-zinc-500 font-normal bg-white box-border caret-transparent block text-start w-full border border-zinc-300 px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                </div>
                <div className="box-border caret-transparent mb-6">
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows={6}
                        className="text-zinc-500 font-normal bg-white box-border caret-transparent block resize-y text-start w-full border border-zinc-300 px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors"
                    ></textarea>
                </div>
                <div className="box-border caret-transparent float-none md:float-right">
                    <button
                        type="submit"
                        className="text-sky-950 text-sm font-bold bg-amber-400 caret-transparent leading-[21px] text-center text-nowrap flex items-center gap-2 px-8 py-4 hover:bg-amber-500 transition-colors duration-300 uppercase tracking-wide"
                    >
                        SEND MESSAGE
                        <Send className="w-4 h-4" />
                    </button>
                </div>
            </form>
        </div>
    );
};
