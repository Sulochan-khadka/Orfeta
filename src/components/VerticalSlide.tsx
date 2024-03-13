import React from 'react';
import Card from './Card';
import Slider from 'react-slick';
import './verticalslide.css';
import { details } from '../utils/array.ts';

const VerticalSlide = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1,
    slidesToShow: 4,
    slidesToScroll: 19,
    vertical: true,
    verticalSwiping: true,
    speed: 60000,
  };
  return (
    <div>
      <Slider {...settings}>
        {details.map((item, index) => (
          <div className='SlideCard'>
            <Card key={index} ad={index} title={item.title} bio={item.bio} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VerticalSlide;
