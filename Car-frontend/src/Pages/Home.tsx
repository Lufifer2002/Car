import Header from "../Component/header";
import herooo from "../assets/herooo.png";
import Footer from "../Component/Footer";
import second from "../assets/second.png";
function Home() {
    return (
        <div className="bg-[#020202] min-h-screen text-white p-4 md:p-6">
            {/* Main Container (NO BORDER) */}
            <div className="relative overflow-hidden rounded-[30px] bg-black shadow-[0_0_80px_rgba(255,255,255,0.03)]">

                {/* Header */}
                <Header />

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
                            <div className="relative z-20 mt-10 w-full max-w-4xl mx-auto h-[500px] overflow-hidden">
                                <img
                                    src={second}
                                    alt="Crafting the Future of Luxury"
                                    className="w-full h-full object-cover object-bottom opacity-80" />
                                {/* Overlay */}


                                {/* Overlay Container */}
                                <div className="absolute inset-0 z-30 flex items-end justify-start pb-10 px-6 gap-4 flex-wrap">

                                    {/* Card 1 */}
                                    <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl text-center w-40 md:w-52">
                                        <h2 className="text-3xl md:text-4xl font-bold">15+</h2>
                                        <p className="text-xs md:text-sm text-gray-300 mt-2">
                                            Global Presence
                                        </p>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl text-center w-40 md:w-52">
                                        <h2 className="text-3xl md:text-4xl font-bold">120+</h2>
                                        <p className="text-xs md:text-sm text-gray-300 mt-2">
                                            Global Dealers
                                        </p>
                                    </div>

                                    {/* Card 3 */}
                                    <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl text-center w-40 md:w-52">
                                        <h2 className="text-3xl md:text-4xl font-bold">15+</h2>
                                        <p className="text-xs md:text-sm text-gray-300 mt-2">
                                            Years Experience
                                        </p>
                                    </div>

                                    {/* Card 4 */}
                                    <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl text-center w-40 md:w-52">
                                        <h2 className="text-3xl md:text-4xl font-bold">98%</h2>
                                        <p className="text-xs md:text-sm text-gray-300 mt-2">
                                            Customer Satisfaction
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>



                    </section>
                </div>
                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}

export default Home;