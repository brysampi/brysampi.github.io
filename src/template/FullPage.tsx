// import './FullPage.css';
const FullPage = () => {
    return (
        <>
            <div className="w-full h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth" id="snap-container" tabIndex={0}>
                <section className="min-h-screen snap-start focus:outline-[3px] focus:outline-black/12"
                    id="s1" role="region" aria-label="Welcome" tabIndex={0}>
                    Section 1 — Welcome
                </section>
                <section className="min-h-screen snap-start focus:outline-[3px] focus:outline-black/12"
                    id="s2" role="region" aria-label="About" tabIndex={0}>
                    Section 2 — About
                </section>
                <section className="min-h-screen snap-start focus:outline-[3px] focus:outline-black/12"
                    id="s3" role="region" aria-label="Work" tabIndex={0}>
                    Section 3 — Work
                </section>
                <section className="min-h-screen snap-start focus:outline-[3px] focus:outline-black/12"
                    id="s4" role="region" aria-label="Contact" tabIndex={0}>
                    Section 4 — Contact
                </section>
            </div>

            <nav className="dot-nav" aria-label="Section navigation">
                <button className="dot" data-target="s1" aria-label="Go to section 1" aria-current="true"></button>
                <button className="dot" data-target="s2" aria-label="Go to section 2"></button>
                <button className="dot" data-target="s3" aria-label="Go to section 3"></button>
                <button className="dot" data-target="s4" aria-label="Go to section 4"></button>
            </nav>
        </>
    )
}
export default FullPage;