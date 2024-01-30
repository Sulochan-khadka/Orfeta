import React from 'react';
import image from '../assets/oferta blue.png';
import './home.css';

const Home = () => {
  return (
    <div className='container'>
      <div className='image-container'>
        <img src={image} alt='logo' className='image' />
        <div className='dot'>
          <div className='dots one'></div>
          <div className='dots two '></div>
          <div className='dots three'></div>
          <div className='dots four'></div>
          <div className='dots five'></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
