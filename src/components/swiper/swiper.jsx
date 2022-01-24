import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './swiper.scss';
// import Swiper core and required modules
import { A11y, EffectFade} from 'swiper';

import { Swiper, SwiperSlide} from 'swiper/react';

// import Swiper core and required modules
import SwiperCore, {
    Pagination,Navigation, Autoplay, Virtual
  } from 'swiper';
  
  // install Swiper modules
  SwiperCore.use([Pagination,Navigation, Autoplay]);
// install Virtual module
SwiperCore.use([Virtual]);
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import ModelD from '../3d/ModelD';


export default () => {
  const [swiperRef, setSwiperRef] = useState(null);
 

  const slides = Array.from({ length: 10 }).map(
    (_, index) => `Slide ${index + 1}`
  );

  return (
    <>
      <Swiper
      className='swiper__container'
      modules={[Navigation, A11y, EffectFade, Autoplay]}
      spaceBetween={80}
      breakpoints={{
        
        100: {
          spaceBetween: 20,
          slidesPerView: 1,
        },
        800: {
          spaceBetween: 80,
        }
      }}
      
      slidesPerView={1.5}
      pagination={false} 
      navigation={false}
      
      centeredSlides={true}
        onSwiper={setSwiperRef}
        virtual
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
             <div className='swiperSl'>
                  <div className='left'>
                    <h1 className='swipe-title'>Hammer</h1>
                    <ModelD />
                  </div>
                  <div className='right-side'>
                  hello
                  </div>
                </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}



