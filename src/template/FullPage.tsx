import HeroHeader from '../components/HeroHeading';
import GameHUD from '../components/GameHUD';
import ClickCounter from '../components/ClickCounter';
const FullPage = () => {
    return (
        <>
            <div className="w-full h-screen overflow-y-auto snap-y snap-mandatory no-scrollbar select-none" id="snap-container" tabIndex={0}>
                <section className="h-full snap-start focus:outline-none flex justify-center pt-16"
                    id="s1" role="region" aria-label="Welcome" tabIndex={0}>
                    <HeroHeader />
                </section>
                <section className="h-full snap-start focus:outline-none flex justify-center pt-16"
                    id="s2" role="region" aria-label="About" tabIndex={0}>
                    <HeroHeader />
                </section>
                <section className="h-full snap-start focus:outline-none flex justify-center pt-16"
                    id="s3" role="region" aria-label="Work" tabIndex={0}>
                    <HeroHeader />
                </section>
                <section className="h-full snap-start focus:outline-none flex justify-center pt-16"
                    id="s4" role="region" aria-label="Contact" tabIndex={0}>
                    {/* <HeroHeader /> */}
                    test
                </section>
            </div>
            <GameHUD sectionIds={['s1', 's2', 's3', 's4']} scrollContainerId="snap-container" />
            <ClickCounter />
        </>
    )
}
export default FullPage;