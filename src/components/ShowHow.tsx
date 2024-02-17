import { useEffect, useState } from 'react';
import './showHow.css';
import { motion } from 'framer-motion';
import logo from '../assets/oferta blue.png';

const ShowHow = () => {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    // @ts-expect-error Image width and height may not exist

    const mouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePos.x - 8,
      y: mousePos.y - 8,
    },
  };
  return (
    <div>
      <motion.div className='cursor' variants={variants} animate='default' />
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='black-container'>
        <div className='blue-text py-8'>Let us show you how</div>
        <div
          className='roboto text-7xl text-white font-light'
          style={{ lineHeight: '1.2' }}
        >
          At Oferta24, we believe no business is the same; each with unique
          challenges, objectives and market conditions. That is why we have
          created a marketing platform that provide flexible, customizable and
          measureable marketing strategies to compliment the unique needs of any
          business…including yours.
        </div>
        <div className='button'>
          <div>Get your FREE Campaign</div>
        </div>
      </div>
    </div>
  );
};

export default ShowHow;
