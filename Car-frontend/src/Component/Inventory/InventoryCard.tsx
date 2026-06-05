interface Car {
  image: string;
  name: string;
  year: string;
  mileage: string;
  price: string;
}

interface InventoryCardProps {
  car: Car;
}

const InventoryCard = ({ car }: InventoryCardProps) => {
  return (
    <div className="bg-[#111] rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-60 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-semibold text-white">
          {car.name}
        </h3>

        <div className="flex justify-between mt-3 text-gray-400 text-sm">
          <span>{car.year}</span>
          <span>{car.mileage}</span>
        </div>

        <div className="mt-4 text-2xl font-bold text-white">
          {car.price}
        </div>

        <button className="mt-4 w-full bg-white text-black py-2 rounded-lg font-medium">
          View Details
        </button>
      </div>
    </div>
  );
};

export default InventoryCard;