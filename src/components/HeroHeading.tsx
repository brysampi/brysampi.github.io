import avatar from '../assets/avatar/main.png';

function HeroHeading() {
    return (
        <>
            {/* <div className="glass-pane">
                <p></p>
            </div> */}
            <div className="w-full flex flex-col md:flex-row justify-center md:justify-around items-center p-6 gap-8">
                <div className=" relative w-48 md:w-1/4 lg:w-1/5 flex justify-center flex-shrink-0 order-2 md:order-1 mt-12 md:mt-0">
                    <img src={avatar} alt="Avatar" className="w-full h-auto rounded-lg" />
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2 w-max max-w-xs bg-white dark:bg-slate-800 p-3 rounded-lg shadow-lg">
                        <p className="text-sm text-center md:text-left text-slate-700 dark:text-slate-200">I'm Bell, his avatar. Welcome to the portfolio!</p>
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] md:left-[-8px] md:top-1/2 md:-translate-y-1/2 w-0 h-0 border-t-8 border-t-white dark:border-t-slate-800 border-l-8 border-l-transparent border-r-8 border-r-transparent md:border-l-0 md:border-r-8 md:border-r-white dark:md:border-r-slate-800 md:border-t-transparent md:border-b-transparent"></div>
                    </div>
                </div>
                <div className="text-center md:text-left order-1 md:order-2">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-2">I'm [Your Name], a [Your Profession]. Explore my work and get in touch!</p>
                </div>
            </div>
            

        </>
    );
}
export default HeroHeading;