import React, { useEffect, useRef, useState } from 'react';
import './usage.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiperSlide } from 'swiper/react';
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Mousewheel,
  Keyboard,
} from 'swiper/modules';
import { reach } from '../utils/itemsArray';
import 'swiper/css';
import 'swiper/css/bundle';

const Usage = () => {
  const swiperRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const swiperSlide = useSwiperSlide();
  const [active, setActive] = useState();
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
    // <div className='flex justify-center items-center'>
    <div className='usageContainer'>
      <div className='flex justify-center items-center'>
        <div className='reach-title'>REACH & USAGE</div>
      </div>
      <div className='swiper-container'>
        <div className='py-9'>
          <Swiper
            autoHeight={true}
            // effect={'coverflow'}
            spaceBetween={50}
            centeredSlides={true}
            slidesPerView={3}
            keyboard={{
              enabled: true,
            }}
            coverflowEffect={{
              rotate: 10,
              stretch: 0,
              depth: 50,
              modifier: 5,
              slideShadows: true,
            }}
            modules={[
              EffectCoverflow,
              Keyboard,
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              Mousewheel,
            ]}
            loop={true}
            mousewheel={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            // className='sliderCss'
            // onSlideChange={()=>{console.log('slide changed')}}
          >
            <div className='swiper-wrapper'>
              {reach.map((item, index) => (
                <SwiperSlide key={index} className='swiper-slide'>
                  {/* {({ isNext }) => setActive(true)} */}
                  <>
                    <div>
                      <img
                        src={item.image}
                        alt='item.title'
                        className='image'
                      />
                    </div>
                    {/* {isNext && (
                        <div className='active'>
                          <img
                            src={item.image}
                            alt='item.title'
                            className='image'
                          />
                        </div>
                      )}
                      {isActive && (
                        <div className='inactive'>
                          <img
                            src={item.image}
                            alt='item.title'
                            className='image'
                          />
                        </div>
                      )} */}
                  </>
                  {/* )} */}
                </SwiperSlide>
              ))}
            </div>
            <div
              className='slider-button slider-button-next'
              style={{ position: 'absolute', right: '-144px' }}
              ref={nextRef}
            ></div>
            <div
              className='slider-button slider-button-prev'
              style={{ position: 'absolute', left: '-144px' }}
              ref={prevRef}
            ></div>
          </Swiper>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Usage;
