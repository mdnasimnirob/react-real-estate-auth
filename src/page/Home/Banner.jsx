import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Banner = () => {
    return (
        <div className="w-full">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                className="rounded-md"
            >
                {/* Swiper Slides */}
                <SwiperSlide>
                    <img
                        className="w-full h-[50vh] md:h-[60vh] lg:h-[80vh] object-cover rounded-md"
                        src="https://i.ibb.co/TR3fb6L/banner1.jpg"
                        alt="Banner 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full h-[50vh] md:h-[60vh] lg:h-[80vh] object-cover rounded-md"
                        src="https://i.ibb.co/ZKNc2CZ/banner3.jpg"
                        alt="Banner 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full h-[50vh] md:h-[60vh] lg:h-[80vh] object-cover rounded-md"
                        src="https://i.ibb.co/QHFWX4x/banner2.jpg"
                        alt="Banner 3"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
