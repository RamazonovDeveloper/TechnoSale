import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import 'swiper/css';

const Slider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                
            </Swiper>
        </div>
    );
}

export default Slider;


// Import Swiper React components

// Import Swiper styles

// export default () => {
//   return (
    
//   );
// };