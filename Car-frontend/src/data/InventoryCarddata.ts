import car1 from "../assets/one.png";
import car2 from "../assets/two.png";
import car3 from "../assets/three.png";
import car4 from "../assets/four.png";
import car5 from "../assets/five.png";
import car6 from "../assets/six.png";
import car7 from"../assets/seven.png";
import car8 from"../assets/eight.png";


export interface Car {
  id: number;
  name: string;
  year: number;
  price: string;
  mileage: string;
  image: string;
}

export const cars: Car[] = [
  {
    id: 1,
    name: "Mercedes-Benz S-Class",
    year: 2024,
    price: "$125,000",
    mileage: "2,500 km",
    image: car1,
  },
  {
    id: 2,
    name: "Pagani'009",
    year: 2024,
    price: "$118,000",
    mileage: "1,800 km",
    image: car2,
  },
  {
    id: 3,
    name: "BMW-07",
    year: 2024,
    price: "$110,000",
    mileage: "3,200 km",
    image: car3,
  },
   {
    id: 4,
    name: "Lexus LS",
    year: 2024,
    price: "$105,000",
    mileage: "2,800 km",
    image: car4,
  },
   {
    id:5,
    name: "Huracan ",
    year: 2024,
    price: "$110,000",
    mileage: "3,200 km",
    image: car5,
  },
   {
    id: 6,
    name: "Audi A8",
    year: 2024,
    price: "$110,000",
    mileage: "3,200 km",
    image: car6,
  },
   {
    id: 7,
    name: "Lamborghini Dirty Yellow",
    year: 2024,
    price: "$110,000",
    mileage: "3,200 km",
    image: car7,
  },
   {
    id: 8,
    name: "Mercedes-Benz Z-class",
    year: 2024,
    price: "$110,000",
    mileage: "3,200 km",
    image: car8,
  },
];