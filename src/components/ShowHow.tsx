import { useEffect, useRef, useState } from 'react';
import './showHow.css';
import { motion } from 'framer-motion';
import logo from '../assets/oferta.png';
import Oferta from './Oferta';
import Reach from './Reach';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
// import Features from './Features';
import Results from './Results';

const ShowHow = () => {
  gsap.registerPlugin(ScrollTrigger);
  const path = useRef(null);
  const arrowRef = useRef(null);
  const widthRef = useRef(null);
  const svg = useRef(null);
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });
  // const [cursorVariant, setCursorVariant] = useState('default');
  useEffect(() => {
    // @ts-expect-error Image width and height may not exist

    const mouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
      const posx = e.clientX / window.innerWidth;
      const posy = e.clientY / window.innerHeight;
      // @ts-expect-error Image width and height may not exist

      path.current.setAttribute(
        'd',
        `M0,50 Q${posx * 600},${posy * 100} 500,50`
      );
    };
    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);
  useGSAP(() => {
    const t1 = gsap.timeline();
    t1.to(widthRef.current, {
      height: '75px',
      scrollTrigger: {
        trigger: arrowRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });
  });

  const variants = {
    default: {
      x: mousePos.x - 8,
      y: mousePos.y - 8,
    },
  };
  return (
    <div ref={arrowRef} style={{ position: 'relative' }}>
      <motion.div className='cursor' variants={variants} animate='default' />
      <div
        className='logo'
        style={{ position: 'fixed', top: '0', left: '0', zIndex: '888' }}
      >
        <img src={logo} alt='logo' />
      </div>
      <div className='arrow'>
        <div
          style={{
            height: '75px',
            width: '75px',
            borderRadius: '50%',
            // backgroundColor: 'white',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: '85%',
            left: '90%',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              zIndex: 888,
              height: 'auto',
              width: '50px',
              color: 'white',
            }}
          >
            <svg
              width='800px'
              height='800px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12 6V18M12 18L7 13M12 18L17 13'
                stroke='#000000'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </div>
          <div
            ref={widthRef}
            style={{
              position: 'absolute',
              top: '0',
              backgroundColor: '#00a3e9',
              width: '75px',
              height: '0px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 0.5,
            }}
          ></div>
        </div>
      </div>
      <div className='black-container'>
        <div className='blue-text py-8'>Let us show you how</div>
        <div
          className='roboto text-7xl text-white font-light'
          style={{ lineHeight: '1.2', marginRight: '240px' }}
        >
          At Oferta24, we believe no business is the same; each with unique
          challenges, objectives and market conditions. That is why we have
          created a marketing platform that provide flexible, customizable and
          measureable marketing strategies to compliment the unique needs of any
          business…including yours.
        </div>
        <div className='button'>Get your FREE Campaign</div>
        <div>
          <svg
            ref={svg}
            viewBox='0 0 600 200'
            preserveAspectRatio='xMinyMid meet'
          >
            <path d='M0,50 Q300,25 600,50' ref={path} />
          </svg>
        </div>
        <div style={{ color: 'white' }}>now services section</div>
        <Oferta />
        <div style={{ height: '100vh' }}></div>
        <Reach />
        {/* <Features /> */}
        <Results />
      </div>
    </div>
  );
};

export default ShowHow;
