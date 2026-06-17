import { useParams, NavLink } from "react-router-dom";
import { cars } from "../data/InventoryCarddata";

const CarDetails = () => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === Number(id));

  if (!car) {
    return (
      <div className="bg-[#020202] min-h-screen text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/40 text-lg mb-4">Car not found.</p>
          <NavLink to="/inventory" className="text-white underline text-sm">← Back to Inventory</NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#020202] min-h-screen text-white p-4 md:p-6">
      <div className="relative overflow-hidden rounded-[30px] bg-black shadow-[0_0_80px_rgba(255,255,255,0.03)] max-w-5xl mx-auto p-8">
        
        <NavLink to="/inventory" className="text-white/40 hover:text-white text-sm transition mb-8 inline-block">
          ← Back to Inventory
        </NavLink>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
          <img
            src={car.image}
            alt={car.name}
            className="w-full rounded-2xl object-cover h-72 md:h-full"
          />

          <div className="flex flex-col justify-center">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Vehicle Detail</p>
            <h1 className="text-4xl font-light text-white mb-1">{car.name}</h1>
            <p className="text-white/30 text-sm mb-6">{car.year}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 border border-white/[0.07] rounded-xl p-4">
                <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Price</p>
                <p className="text-white text-xl font-semibold">{car.price}</p>
              </div>
              <div className="bg-white/5 border border-white/[0.07] rounded-xl p-4">
                <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Mileage</p>
                <p className="text-white text-xl font-semibold">{car.mileage}</p>
              </div>
              </div>
            
            <div className="bg-white/5 border border-white/[0.07] rounded-xl p-4">
                <p className="text-white/30 text-xs uppercase tracking-widest mb-1">engine</p>
                <p className="text-white text-xl font-semibold">{car.engine}</p>
              </div>
              <div className="bg-white/5 border border-white/[0.07] rounded-xl p-4">
                <p className="text-white/30 text-xs uppercase tracking-widest mb-1">transmission</p>
                <p className="text-white text-xl font-semibold">{car.transmission}</p>
              </div>
              <div className="bg-white/5 border border-white/[0.07] rounded-xl p-4">
                <p className="text-white/30 text-xs uppercase tracking-widest mb-1">fuelType</p>
                <p className="text-white text-xl font-semibold">{car.fuelType}</p>
              </div>
              <div className="bg-white/5 border border-white/[0.07] rounded-xl p-4">
                <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Horsepower</p>
                <p className="text-white text-xl font-semibold">{car.horsepower}</p>
              </div>
              <div className="bg-white/5 border border-white/[0.07] rounded-xl p-4">
                <p className="text-white/30 text-xs uppercase tracking-widest mb-1">color</p>
                <p className="text-white text-xl font-semibold">{car.color}</p>
              </div>
              <div className="bg-white/5 border border-white/[0.07] rounded-xl p-4">
                <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Topspeed</p>
                <p className="text-white text-xl font-semibold">{car.topSpeed}</p>
              </div>
              <div className="bg-white/5 border border-white/[0.07] rounded-xl p-4">
                <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Seats</p>
                <p className="text-white text-xl font-semibold">{car.seats}</p>
              </div>
              <div className="bg-white/5 border border-white/[0.07] rounded-xl p-4">
                <p className="text-white/30 text-xs uppercase tracking-widest mb-1">Features</p>
                <p className="text-white text-xl font-semibold">{car.features}</p>
              </div>
            

            <button className="w-full py-3 mt-10 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition">
              Schedule a Test Drive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;