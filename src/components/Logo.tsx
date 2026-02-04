export const Logo = () => {
    return (
        <div className="relative box-border caret-transparent shrink-0 min-h-px pl-0 pr-[15px] md:pl-4">
            <a
                href="./"
                className="text-black text-2xl font-bold box-border caret-transparent leading-[22.5px] hover:text-yellow-500 no-underline flex items-center gap-3"
            >
                <img src="/public/logo.png" alt="Logo" className="h-auto max-w-[100px] md:max-w-[140px] object-contain block" />
                <span className="text-blue-950 font-extrabold text-3xl tracking-wide">BUILDERS BAZAAR</span>
            </a>
        </div>
    );
};
