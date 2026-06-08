import third from "../../assets/third.png";

const Section_2 = () => {
  return (
    <div>
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
  )
}

export default Section_2
