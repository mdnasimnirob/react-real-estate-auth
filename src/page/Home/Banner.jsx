import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Navigation, Pagination, } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Banner = () => {
    return (
        <div className=''>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                autoplay={{ delay: 2000 }}
                pagination={{ clickable: true }}
                className='rounded-md'

            >
                <SwiperSlide><img className='w-full max-h-screen rounded-md' src="https://i.ibb.co.com/TR3fb6L/banner1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-screen rounded-md' src="https://i.ibb.co.com/ZKNc2CZ/banner3.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-screen rounded-md' src="https://i.ibb.co.com/QHFWX4x/banner2.jpg" alt="" /></SwiperSlide>

            </Swiper>
        </div >

    );
};

export default Banner;