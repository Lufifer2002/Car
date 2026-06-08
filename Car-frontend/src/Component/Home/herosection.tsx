import herooo from '../../assets/herooo.png';
function Herosection() {
  return (
    <div>
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
    </div>
  )
}

export default Herosection
