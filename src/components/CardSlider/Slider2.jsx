import React, { useRef, useState } from 'react';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import img from '../../assets/img/loginBack.png'
import first from '../../assets/img/dtmLogo.png'
import second from '../../assets/img/mygovlogo.png'
import third from '../../assets/img/yoshlogo.png'

import './Slider2.scss'

// import './styles.css';

// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);

export default function App() {

    const mockData=[
        {
            "id": 1,
            "img":first,
            "text_uz": "Davtlat  test markazi",
            "address": "https://dtm.uz/",
        },
        {
            "id": 2,
            "img":second,
            "text_uz": "Davtlat  test markazi",
            "address": "https://dtm.uz/",
        },
        {
            "id": 4,
            "img":first,
            "text_uz": "Davtlat  test markazi",
            "address": "https://dtm.uz/",
        },
        {
            "id": 3,
            "img":third,
            "text_uz": "My Gov",
            "address": "https://dtm.uz/",
        },
        
        {
            "id": 5,
            "img":second,
            "text_uz": "Davtlat  test markazi",
            "address": "https://dtm.uz/",
        },
        {
            "id": 6,
            "img":first,
            "text_uz": "Davtlat  test markazi",
            "address": "https://dtm.uz/",
        },
        {
            "id": 7,
            "img":second,
            "text_uz": "Davtlat  test markazi",
            "address": "https://dtm.uz/",
        }
    ]

  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, 'Slide ' + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        // centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'none',
        }}
        navigation={true}
        virtual
      >
        {/* {slides.map((slideContent, index) => (
          <SwiperSlide className='mySlide' key={slideContent} virtualIndex={index}>
              <img src={img} alt="" />
            {slideContent}
          </SwiperSlide>
        ))} */}
        
        {mockData.map((slideContent, index) => (
            
          <SwiperSlide className='mySlide' key={slideContent} virtualIndex={index}>
            <img src={slideContent.img} alt="" />
            {slideContent.text_uz}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <p className="append-buttons">
        <button onClick={() => prepend()} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={() => slideTo(1)} className="prepend-slide">
          Slide 1
        </button>
        <button onClick={() => slideTo(250)} className="slide-250">
          Slide 250
        </button>
        <button onClick={() => slideTo(500)} className="slide-500">
          Slide 500
        </button>
        <button onClick={() => append()} className="append-slides">
          Append Slide
        </button>
      </p> */}
    </>
  );
}
