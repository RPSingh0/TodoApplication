function Section({heading, children}) {

    const baseStyle = 'flex flex-col gap-2 w-full sm:w-2/3 overflow-auto';

    return (
        <section className={baseStyle}>
            <header className={"text-lg font-bold"}>
                {heading}
            </header>
            <div className={"overflow-auto flex flex-col sm:gap-6 gap-8 hiddenScrollbar"}>
                {children}
            </div>
        </section>
    );
}

export default Section;