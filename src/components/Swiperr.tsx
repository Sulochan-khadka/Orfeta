import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../assets/thumb-france-tv.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './swiperr.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Swiperr() {
  const swiperRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  useEffect(() => {
    const prevHandler = () => {
      swiperRef.current.slidePrev();
    };

    const nextHandler = () => {
      swiperRef.current.slideNext();
    };
    nextRef.current.addEventListener('click', nextHandler);
    prevRef.current.addEventListener('click', prevHandler);
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Pagination, Navigation]}
        className='mySwiper'
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <SwiperSlide key={i} style={{ transition: 'all 0ms ease 0' }}>
            {({ isActive, isNext, isPrev }) => (
              <>
                {isActive && (
                  <div className='imageDiv'>
                    <img src={image1} alt='' style={{ height: '100%' }} />
                  </div>
                )}
                {isPrev && (
                  <div className='imageDiv'>
                    <img src={image1} alt='' style={{ height: '190px' }} />
                  </div>
                )}
                {isNext && (
                  <div className='imageDiv'>
                    <img src={image1} alt='' style={{ height: '190px' }} />
                  </div>
                )}
              </>
            )}
          </SwiperSlide>
        ))}
        <div className='slider-button slider-button-prev' ref={prevRef}></div>
        <div className='slider-button slider-button-next' ref={nextRef}></div>
      </Swiper>
    </>
  );
}
