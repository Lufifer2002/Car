
import herooo from "../assets/herooo.png";
import second from "../assets/second.png";
import third from "../assets/third.png";
import fourth from "../assets/fourth.png";
import fifth from "../assets/fifth.png";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
function Home() {
    return (
        <div className="bg-[#020202] min-h-screen text-white p-4 md:p-6">
            {/* Main Container (NO BORDER) */}
            <div className="relative overflow-hidden rounded-[30px] bg-black shadow-[0_0_80px_rgba(255,255,255,0.03)]">



                {/* Hero Section */}
                <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
                    <h1 className="absolute top-2 sm:top-4 md:top-5 z-0 
                        text-[60px] sm:text-[100px] md:text-[180px] lg:text-[240px] 
                        font-extrabold 
                        tracking-[8px] sm:tracking-[12px] md:tracking-[15px] 
                        leading-none select-none 
                        bg-gradient-to-t from-white via-white/60 to-black/50 
                        text-transparent bg-clip-text whitespace-nowrap">
                        LUXAUTO
                    </h1>

                    {/* Hero Image */}
                    <img
                        src={herooo}
                        alt="Luxury Car"
                        className="relative z-10 mt-20 w-[95%] max-w-7xl object-contain opacity-70"
                    />

                    {/* Bottom Glow */}
                    <div className="absolute bottom-0 h-24 w-full bg-gradient-to-t from-white/10 to-transparent blur-3xl z-20" />
                </section>

                {/* About Section */}
                <section className="relative z-20 pb-20 px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        About LuxAuto
                    </h2>
                    <p className="max-w-3xl mx-auto text-gray-400 leading-8 text-sm md:text-base">
                        Redefining luxury car trading worldwide through curated excellence,
                        transparent processes, bespoke services, and an uncompromising
                        commitment to prestige.
                    </p>
                </section>
                {/* Crafting Section */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-10" />

                    <section className="relative z-20 pb-20 px-6">

                        <div className="flex w-full gap-10">

                            {/* LEFT SIDE */}
                            <div className="flex-1 text-left">
                                <h3 className="text-4xl md:text-6xl font-bold mb-2">
                                    Crafting the Future
                                </h3>
                                <h3 className="text-4xl md:text-6xl font-bold mb-6">
                                    of Luxury
                                </h3>

                                <p className="text-gray-400 text-xs md:text-sm leading-5 mb-1">
                                    Redefining the art of luxury automotive
                                </p>
                                <p className="text-gray-400 text-xs md:text-sm leading-5 mb-1">
                                    ownership through trust, craftsmanship, and
                                </p>
                                <p className="text-gray-400 text-xs md:text-sm leading-5">
                                    global excellence.
                                </p>
                            </div>

                            {/* RIGHT SIDE */}
                            <div className="flex-3 flex justify-end">
                                <div className="w-full md:w-2/3 lg:w-1/2 ">
                                    <p className="text-gray-400 text-xs md:text-sm leading-5 mb-1 text-justify">
                                        Founder in 2022,LuxAuto was born from a passion for exceptional automobiles
                                    </p>
                                    <p className="text-gray-400 text-xs md:text-sm leading-5 mb-1 text-justify">
                                        and a vision to create the world's most trusted luxury car marketplace. We

                                    </p>
                                    <p className="text-gray-400 text-xs md:text-sm leading-5 text-justify mb-1">
                                        recognized the need for a platform that connects discerning buyers with verified
                                    </p>
                                    <p className="text-gray-400 text-xs md:text-sm leading-5 text-justify">
                                        dealers offering the finest vehicles.
                                    </p>
                                    <br />
                                    <p className="text-gray-400 text-xs md:text-sm leading-5 mb-1 text-justify">
                                        Today, we're proud to serve client across 15 countries, facilitating, transactions
                                    </p>
                                    <p className="text-gray-400 text-xs md:text-sm leading-5 text-justify mb-1">
                                        worth over $200 million and building lasting relationships within the luxury
                                    </p>
                                    <p className="text-gray-400 text-xs md:text-sm leading-5 text-justify">
                                        automotive community
                                    </p>

                                </div>
                            </div>

                        </div>
                        <div className="relative">

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none z-10" />

                            {/* Text */}
                            <h3 className="relative z-20 text-white text-4xl md:text-6xl font-bold mb-2 text-center">
                                Our Story
                            </h3>
                            <div className="relative z-20 w-full max-w-4xl mx-auto h-[500px] overflow-hidden">

                                <img
                                    src={second}
                                    alt="Crafting the Future of Luxury"
                                    className="w-full h-full object-cover object-bottom opacity-80" />
                                {/* Overlay */}


                                {/* Overlay Container */}
                                <div className="absolute bottom-10 left-0 right-0 z-30">
                                    <div className="flex justify-center items-end gap-6">

                                        {/* Card 1 */}
                                        <div className="bg-gray-900/30  border border-white/10 rounded-2xl w-40 md:w-52 h-52 flex flex-col items-center justify-center">
                                            <h2 className="text-3xl md:text-4xl font-bold">15+</h2>
                                            <p className="text-xs md:text-sm text-gray-300 mt-2 text-center">
                                                Global Presence
                                            </p>
                                        </div>

                                        {/* Card 2 - Lower */}
                                        <div className="bg-gray-900/30 border border-white/10 rounded-2xl w-40 md:w-52 h-52 flex flex-col items-center justify-center translate-y-10">
                                            <h2 className="text-3xl md:text-4xl font-bold">120+</h2>
                                            <p className="text-xs md:text-sm text-gray-300 mt-2 text-center">
                                                Global Dealers
                                            </p>
                                        </div>
                                        {/*Gap*/}
                                        <div className="flex justify-center items-end gap-6">
                                            <div className="mr-8"></div>
                                        </div>

                                        {/* Card 3 - Lower */}
                                        <div className="bg-gray-900/30  border border-white/10 rounded-2xl w-40 md:w-52 h-52 flex flex-col items-center justify-center translate-y-10">
                                            <h2 className="text-3xl md:text-4xl font-bold">15+</h2>
                                            <p className="text-xs md:text-sm text-gray-300 mt-2 text-center">
                                                Years Experience
                                            </p>
                                        </div>

                                        {/* Card 4 */}
                                        <div className="bg-gray-900/30  border border-white/10 rounded-2xl w-40 md:w-52 h-52 flex flex-col items-center justify-center">
                                            <h2 className="text-3xl md:text-4xl font-bold">98%</h2>
                                            <p className="text-xs md:text-sm text-gray-300 mt-2 text-center">
                                                Customer Satisfaction
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-10" />

                        <section className="relative z-20 pb-20 px-6">
                            <div className="flex w-full gap-10">

                                {/* LEFT SIDE — Image */}
                                <div className="flex-2 text-left">
                                    <img
                                        src={third}
                                        alt="Crafting the Future of Luxury"
                                        className="w-full h-[400px] object-cover object-bottom opacity-80 rounded-2xl"
                                    />
                                </div>

                                {/* RIGHT SIDE — Mission Content */}
                                <div className="flex-1 flex flex-col justify-center relative px-4">
                                    {/* Gold left border accent */}
                                    <div className="absolute left-0 top-[10%] bottom-[10%] w-px bg-gradient-to-b from-transparent via-[#b8975a]/40 to-transparent" />



                                    {/* Headline */}
                                    <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-2">
                                        Deliver Unmatched Luxury
                                        <br />
                                        <span className="text-white">Performance</span>
                                    </h2>

                                    {/* Sub-headline */}
                                    <h2 className="text-2xl md:text-5xl font-bold leading-tight text-white mb-2">
                                        and Exceptional Experiences
                                    </h2>


                                    {/* Body */}
                                    <p>experience that exceeds
                                        expectations. We believe luxury is not an option — it&apos;s a{" "}
                                        standard. Every interaction,
                                        every vehicle, and every transaction reflects our commitment to
                                        excellence.
                                    </p>
                                </div>

                            </div>
                        </section>
                    </div>
                </div>
                {/* Crafting Section */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-10" />

                    <section className="relative z-20 pb-20 px-6">
                        <div className="flex items-start justify-between gap-20">
                            {/* Left */}
                            <div className="w-3/5">
                                <h3 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                                    Shaping the Future of
                                    <br />
                                    Automotive Luxury
                                </h3>
                            </div>

                            {/* Right */}
                            <div className="w-2/5">
                                <p className="text-gray-300 text-base leading-7">
                                    To redefine premium car buying in the digital age. We envision a future
                                    where acquiring a luxury vehicle is as smooth and sophisticated as the
                                    cars we offer, setting new standards in the automotive industry.
                                </p>
                            </div>
                        </div>
                        <div className="w-[95%] max-w-7xl h-[500px] overflow-hidden mx-auto mt-20 border border-white/10 rounded-3xl">
                            <img
                                src={fourth}
                                alt="Crafting the Future of Luxury"
                                className="w-[100%] h-[100%] object-cover opacity-70 "
                            />
                        </div>
                    </section>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-10" />
                <div className="relative z-20 pb-20 px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Drive Beyond Expectaion
                    </h2>
                    <p className="max-w-3xl mx-auto text-gray-400 leading-8 text-sm md:text-base">
                        Embrace the art of refined performance.Let LuxeAuto guide you to your perfect
                        <p>car-with world-class service and unmatched sophistication.</p>
                    </p>

                    <Link to="/Inventory">
                        <button className="bg-yellow-500 text-black hover:bg-gray-200 font-bold py-2 px-4 border border-gray-300 rounded-3xl mt-6 inline-flex items-center gap-2 transition-colors duration-300">
                            Browse Cars <MdArrowOutward />
                        </button>
                    </Link>
                    <div className="w-[95%] max-w-8xl h-[500px] overflow-hidden mx-auto mt-20 border border-white/10 rounded-3xl">
                        <img
                            src={fifth}
                            alt="Crafting the Future of Luxury"
                            className="w-full h-full object-cover object-[50%_80%] opacity-70"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;