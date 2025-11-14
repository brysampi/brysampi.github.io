import './FullPage.css';
const FullPage = () => {
    return (
        <>
            <div className="snap-container" id="snap-container" tabIndex={0}>
                <section id="s1" role="region" aria-label="Welcome" tabIndex={0}>Section 1 — Welcome</section>
                <section id="s2" role="region" aria-label="About" tabIndex={0}>Section 2 — About</section>
                <section id="s3" role="region" aria-label="Work" tabIndex={0}>Section 3 — Work</section>
                <section id="s4" role="region" aria-label="Contact" tabIndex={0}>Section 4 — Contact</section>
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