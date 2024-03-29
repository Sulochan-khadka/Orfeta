import { useRef } from 'react';
import image from '../assets/results/phone@2x.png';
import video from '../assets/results/hello.mp4';
import gsap from 'gsap';
import imageBlue from '../assets/results/wcard-sm@2x.png';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './results.css';

const Results = () => {
  gsap.registerPlugin(ScrollTrigger);
  const horRef = useRef(null);
  const triggerRef = useRef(null);
  const imageRef=useRef(null)

  useGSAP(() => {
    //@ts-expect-error ref can never be null
    const racesWidth = triggerRef.current.offsetWidth;
    const amountToScroll = racesWidth - window.innerWidth;
    const tween = gsap.to(triggerRef.current, {
      x: -amountToScroll,
      duration: 3,
      ease: 'none',
    });
    ScrollTrigger.create({
      trigger: horRef.current,
      start: 'top top',
      end: '+=' + amountToScroll,
      pin: true,
      animation: tween,
      scrub: 1,
    });
  });

  useGSAP(()=>{
    gsap.to(imageRef.current,{
      rotation:-16,
      transformOrigin: 'bottom',
      scrollTrigger:{
        trigger:imageRef.current,
        start:'top 60%',
        end:'top 30%',
        // markers:true,
        scrub:2
      }
    })
  },[])

  return (
    <div style={{ overflowX: 'hidden' }}>
      <div
        className='flex flex-col justify-center align-middle'
        style={{ height: '100vh', overflowX: 'hidden' }}
      >
        <div className='flex justify-center align-middle text-center'>
          <div
            className='poppins text-8xl relative text-white '
            style={{ fontWeight: '500' }}
          >
            How Do We <br />
            Measure Results&nbsp;?
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflowX: 'hidden',
        }}
      >
        <img src={imageBlue} alt='' className='blueCard' ref={imageRef}/>
        <img
          src={image}
          alt='image'
          style={{ height: '600px', position: 'relative', overflowX: 'clip' }}
        />
        <video
          preload='auto'
          loop
          muted
          autoPlay
          playsInline
          style={{
            position: 'absolute',
            height: '580px',
            borderRadius: '30px',
          }}
        >
          <source src={video} type='video/mp4'></source>
        </video>
      </div>
      <div
        ref={horRef}
        style={{
          position: 'relative',
          overflowX: 'auto',
        }}
      >
        <div
          style={{
            position: 'relative',
            display: 'flex',
            width: '400vw',
          }}
          ref={triggerRef}
        >
          <div
            style={{
              width: '100vw',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontFamily: 'poppins',
              fontSize: 50,
              //   backgroundColor: 'red',
              color: 'white',
            }}
          >
            Pay Per Result Advertising.
            <br /> No Result, No Cost!... <br />
            It’s just that simple!
          </div>
          <div
            style={{
              width: '100vw',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontFamily: 'poppins',
              fontSize: 50,
              //   backgroundColor: 'red',
              color: 'white',
            }}
          >
            Real Time Analytics
          </div>
          <div
            style={{
              width: '100vw',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontFamily: 'poppins',
              fontSize: 50,
              //   backgroundColor: 'red',
              color: 'white',
            }}
          >
            Detailed Reporting
          </div>
          <div
            style={{
              width: '100vw',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontFamily: 'poppins',
              fontSize: 50,
              //   backgroundColor: 'red',
              color: 'white',
            }}
          >
            Customer Feedback Surveys
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
