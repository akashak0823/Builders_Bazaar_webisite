export const NavbarToggle = () => {
    return (
        <button
            type="button"
            aria-label="Toggle navigation"
            className="text-black text-xl bg-transparent caret-transparent block leading-5 min-h-[auto] min-w-[auto] text-center border px-3 py-1 rounded-bl rounded-br rounded-tl rounded-tr border-solid border-transparent md:hidden md:min-h-0 md:min-w-0"
        >
            <span className="text-white items-center bg-no-repeat bg-size-[100%_100%] box-border caret-transparent content-[''] flex h-[30px] justify-center align-middle w-[30px] bg-center">
                <i className="font-black box-border caret-transparent block min-h-[auto] min-w-[auto] font-font_awesome_5_free md:min-h-0 md:min-w-0 before:accent-auto before:box-border before:caret-transparent before:text-white before:text-xl before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_free"></i>
            </span>
        </button>
    );
};
