import { useState } from "react";
import InventoryCard from "../Component/Inventory/InventoryCard";
import {cars} from "../data/Cardata";

const Inventory = () => {
  const [search, setSearch] = useState("");

  return (
   < div className="bg-[#020202] min-h-screen text-white p-4 md:p-6">
                    {/* Main Container (NO BORDER) */}
                    <div className="relative overflow-hidden rounded-[30px] bg-black shadow-[0_0_80px_rgba(255,255,255,0.03)]">

    <div className="max-w-7xl mx-auto px-6 py-12 ">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        Inventory
      </h1>
      <div className="flex justify-center mb-10">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search cars..."
              className="w-full max-w-xl px-5 py-3 rounded-xl bg-[#111] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/30"
            />
          </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <InventoryCard key={car.id} car={{ ...car, year: String(car.year) }} />
        ))}
      </div>
    </div>
    </div>
    </div>
    
  );
};

export default Inventory;