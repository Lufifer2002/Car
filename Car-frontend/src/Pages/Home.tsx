import Herosection from "../Component/Home/herosection";
import InventoryCard from "../Component/Inventory/InventoryCard";
import { cars } from "../data/InventoryCarddata";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Choose_us from "../Component/Home/Choose_us";

function Home() {
    return (
        <div className="bg-[#020202] min-h-screen text-white p-4 md:p-6">
            <div className="relative overflow-hidden rounded-[30px] bg-black shadow-[0_0_80px_rgba(255,255,255,0.03)]">
                
                <Herosection/>
                
                {/* Featured Cars Horizontal Carousel */}
                <div className="px-2 py-8">
                    <h2 className="text-3xl font-bold text-white mb-6">Featured Vehicles</h2>
                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="pb-12"
                    >
                        {cars.slice(0, 6).map((car) => (
                            <SwiperSlide key={car.id}>
                                <InventoryCard car={{ ...car, year: String(car.year) }} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <style >{`
                .swiper-button-next,
                .swiper-button-prev {
                    color: white !important;
                    background: rgba(255,255,255,0.1);
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                }
                .swiper-button-next:after,
                .swiper-button-prev:after {
                    font-size: 14px !important;
                }
                
            `}</style>
            <Choose_us/>
        </div>
    );
}

export default Home;