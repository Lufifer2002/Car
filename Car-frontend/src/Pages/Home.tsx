import Header from "../Component/header";
import herooo from "../assets/herooo.png";
import Footer from "../Component/Footer";

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
                    <section className="relative z-20 pb-20 px-6 text-left">
                        <h3 className="text-4xl md:text-6xl font-bold mb-2">
                            Crafting the Future
                        </h3>
                        <h3 className="text-4xl md:text-6xl font-bold mb-6">
                            of Luxury
                        </h3>
                        <div className="text-left w-full">
                            <div className="">
                                <p className="text-gray-400 text-xs md:text-sm leading-5 mb-1">
                                    Redefining the art of luxury automotive
                                </p>
                                <p className="text-gray-400 text-xs md:text-sm leading-5 mb-1">
                                    ownership through trust, craftsmanship, and
                                </p>
                                <div className="flex flex-wrap items-center justify-start gap-x-2 gap-y-2">
                                    <p className="text-gray-400 text-xs md:text-sm leading-5">
                                        global excellence.
                                    </p>
                                    <h3 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent whitespace-nowrap">
                                        Our Story
                                    </h3>
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