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

import Users from '../user-component/users';

export default () => {
  const [swiperRef, setSwiperRef] = useState(<Users />);
 
  const slides = Array.from({ length: 10 }).map(
    (el, index) => `Slide ${index + 1}`
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
             
                    <Users />
                    
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}



