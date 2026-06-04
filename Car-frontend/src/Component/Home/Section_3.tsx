import fourth from "../../assets/fourth.png";
const Section_3 = () => {
  return (
    <div>
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
    </div>
  )
}

export default Section_3
