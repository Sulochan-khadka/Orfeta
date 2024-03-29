import { useEffect, useRef } from 'react';
// import arrowLeft from '../assets/arrow-l-white.svg';
// import arrowRight from '../assets/arrow-r-white.svg';
import './usage.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { useSwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
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
  useEffect(() => {
    const prevHandler = () => {
      //@ts-expect-error obvious
      swiperRef.current.slidePrev();
    };

    const nextHandler = () => {
      //@ts-expect-error obvious
      swiperRef.current.slideNext();
    };
    //@ts-expect-error obvious
    nextRef.current.addEventListener('click', nextHandler);
    //@ts-expect-error obvious
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
            modules={[Keyboard, Navigation, Pagination, Scrollbar, Mousewheel]}
            loop={true}
            mousewheel={true}
            //@ts-expect-error obvious
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            // className='sliderCss'
            // onSlideChange={()=>{console.log('slide changed')}}
          >
            <div className='swiper-wrapper'>
              {reach.map((item, index) => (
                <SwiperSlide key={index} className='swiper-slide'>
                  <>
                    <div className='w-10vw px-5'>
                      <img
                        src={item.image}
                        alt='item.title'
                        className='image'
                      />
                    </div>
                  </>
                </SwiperSlide>
              ))}
            </div>

            {/* <div className='arrow arrow-right z-10'>
              <img
                src={arrowLeft}
                alt=''
                style={{ transform: 'rotateY(180deg)' }}
              />
            </div> */}
            {/* <div className='arrow arrow-left z-10'>
              <img src={arrowLeft} alt='' />
            </div> */}
            <div
              className='slider-button slider-button-next'
              style={{ position: 'absolute', right: '-40px' }}
              ref={nextRef}
            ></div>
            <div
              className='slider-button slider-button-prev'
              style={{ position: 'absolute', left: '-95px' }}
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
