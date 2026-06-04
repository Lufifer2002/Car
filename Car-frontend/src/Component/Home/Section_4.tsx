import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import fifth from "../../assets/fifth.png";
const Section_4 = () => {
  return (
    <div>
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
  )
}

export default Section_4
