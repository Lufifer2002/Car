import car1 from "../assets/one.png";
import car2 from "../assets/two.png";
import car3 from "../assets/three.png";
import car4 from "../assets/four.png"; 
import car5 from "../assets/five.png"; 
import car6 from "../assets/six.png"; 
import car7 from "../assets/seven.png"; 
import car8 from "../assets/eight.png";


export interface Car {
  id: number;
  name: string;
  year: number;
  price: string;
  mileage: string;
  image: string;
  description: string;
  engine: string;
  transmission: string;
  fuelType: string;
  horsepower: number;
  color: string;
  topSpeed: string;
  seats: number;
  features: string[];
}

export const cars: Car[] = [
  {
    id: 1,
    name: "Mercedes-Benz S-Class",
    year: 2024,
    price: "$125,000",
    mileage: "2,500 km",
    image: car1,
    description:
      "A flagship luxury sedan offering premium comfort, cutting-edge technology, and exceptional performance.",
    engine: "4.0L V8 Twin Turbo",
    transmission: "9-Speed Automatic",
    fuelType: "Petrol",
    horsepower: 496,
    color: "Obsidian Black",
    topSpeed: "250 km/h",
    seats: 5,
    features: [
      "Panoramic Sunroof",
      "360° Camera",
      "Leather Interior",
      "Adaptive Cruise Control",
      "Ambient Lighting",
    ],
  },
  {
    id: 2,
    name: "Pagani 009",
    year: 2024,
    price: "$118,000",
    mileage: "1,800 km",
    image: car2,
    description:
      "A stunning hypercar engineered for maximum performance and exclusivity.",
    engine: "6.0L V12 Twin Turbo",
    transmission: "7-Speed Sequential",
    fuelType: "Petrol",
    horsepower: 850,
    color: "Carbon Silver",
    topSpeed: "350 km/h",
    seats: 2,
    features: [
      "Carbon Fiber Body",
      "Launch Control",
      "Track Mode",
      "Premium Exhaust System",
      "Digital Instrument Cluster",
    ],
  },
  {
    id: 3,
    name: "BMW-07",
    year: 2024,
    price: "$110,000",
    mileage: "3,200 km",
    image: car3,
    description:
      "Luxury executive sedan combining comfort, performance, and innovative technology.",
    engine: "3.0L Inline-6 Turbo",
    transmission: "8-Speed Automatic",
    fuelType: "Hybrid",
    horsepower: 375,
    color: "Alpine White",
    topSpeed: "245 km/h",
    seats: 5,
    features: [
      "Head-Up Display",
      "Wireless Charging",
      "Gesture Control",
      "Lane Assist",
      "Premium Audio System",
    ],
  },
  {
    id: 4,
    name: "Lexus LS",
    year: 2024,
    price: "$105,000",
    mileage: "2,800 km",
    image: car4,
    description:
      "An elegant luxury sedan with refined craftsmanship and a smooth driving experience.",
    engine: "3.5L V6 Hybrid",
    transmission: "10-Speed Automatic",
    fuelType: "Hybrid",
    horsepower: 416,
    color: "Deep Blue Mica",
    topSpeed: "250 km/h",
    seats: 5,
    features: [
      "Mark Levinson Audio",
      "Ventilated Seats",
      "Panoramic Roof",
      "Blind Spot Monitoring",
      "Adaptive Suspension",
    ],
  },
  {
    id: 5,
    name: "Lamborghini Huracan",
    year: 2024,
    price: "$110,000",
    mileage: "3,200 km",
    image: car5,
    description:
      "A breathtaking supercar delivering exhilarating speed and aggressive styling.",
    engine: "5.2L Naturally Aspirated V10",
    transmission: "7-Speed Dual Clutch",
    fuelType: "Petrol",
    horsepower: 631,
    color: "Verde Mantis Green",
    topSpeed: "325 km/h",
    seats: 2,
    features: [
      "Sport Exhaust",
      "Launch Control",
      "Carbon Ceramic Brakes",
      "Driving Modes",
      "Digital Cockpit",
    ],
  },
  {
    id: 6,
    name: "Audi A8",
    year: 2024,
    price: "$110,000",
    mileage: "3,200 km",
    image: car6,
    description:
      "A premium luxury sedan featuring advanced technology and exceptional ride comfort.",
    engine: "3.0L V6 Turbo",
    transmission: "8-Speed Tiptronic",
    fuelType: "Petrol",
    horsepower: 335,
    color: "Daytona Gray",
    topSpeed: "250 km/h",
    seats: 5,
    features: [
      "Quattro AWD",
      "Virtual Cockpit",
      "Matrix LED Headlights",
      "Massage Seats",
      "Adaptive Air Suspension",
    ],
  },
  {
    id: 7,
    name: "Lamborghini Dirty Yellow",
    year: 2024,
    price: "$110,000",
    mileage: "3,200 km",
    image: car7,
    description:
      "A bold supercar finished in a unique yellow shade, designed to dominate the road.",
    engine: "5.2L V10",
    transmission: "7-Speed Dual Clutch",
    fuelType: "Petrol",
    horsepower: 640,
    color: "Dirty Yellow",
    topSpeed: "330 km/h",
    seats: 2,
    features: [
      "Carbon Fiber Spoiler",
      "Sport Suspension",
      "Launch Control",
      "Performance Brakes",
      "Premium Sound System",
    ],
  },
  {
    id: 8,
    name: "Mercedes-Benz Z-Class",
    year: 2024,
    price: "$110,000",
    mileage: "3,200 km",
    image: car8,
    description:
      "A futuristic luxury vehicle combining advanced technology with premium comfort.",
    engine: "3.0L Turbocharged Inline-6",
    transmission: "9-Speed Automatic",
    fuelType: "Hybrid",
    horsepower: 429,
    color: "Polar White",
    topSpeed: "260 km/h",
    seats: 5,
    features: [
      "MBUX Infotainment",
      "Burmester Audio",
      "360° Camera",
      "Panoramic Roof",
      "Driver Assistance Package",
    ],
  },
];