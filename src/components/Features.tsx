import { useEffect, useRef } from 'react';
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import SplitType from 'split-type';
import Splitting from 'splitting';
import './features.css';

// Splitting();
gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  // const textRef = useRef(null);

  // useEffect(() => {
  //   Splitting({
  //     target: overRef.current,
  //     by: 'words',
  //     animation: {
  //       chars: {
  //         opacity: 0,
  //         translateY: '100%',
  //         duration: 0.6,
  //         delay: (charIndex, charLength) => charIndex * 0.05,
  //         easing: 'easeOutCubic',
  //         from: 'top',
  //       },
  //     },
  //   });
  // }, []);
  const staticRef = useRef(null);
  const scrollRef = useRef(null);
  const overRef = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const para3Ref = useRef(null);
  const para4Ref = useRef(null);
  const para5Ref = useRef(null);
  const para6Ref = useRef(null);
  const para7Ref = useRef(null);
  const para8Ref = useRef(null);
  const para9Ref = useRef(null);
  // const text = new SplitType(overRef.current, { types: 'words' });
  // const line = new SplitType(staticRef.current, { types: 'lines' });
  // const word = new SplitType(overRef.current, { types: 'words' });
  // console.log('text is: ', text);

  useGSAP(() => {
    const staticPart = staticRef.current;
    const scrollPart = scrollRef.current;
    // console.log(overRef.current);

    gsap.timeline({
      scrollTrigger: {
        trigger: scrollPart,
        start: 'top top',
        end: `bottom 70%`,
        pin: staticPart,
        scrub: true,
        // markers: true,
        onEnter: () => console.log('Pin starts'),
        onLeave: () => console.log('Pin ends'),
      },
    });
    // gsap.from('.word', {
    //   y: 220,
    //   stagger: 0.5,
    //   delay: 2,
    // scrollTrigger: {
    //   trigger: overRef.current,
    //   start: 'top 50%',
    //   end: 'bottom top',
    //   markers: true,
    //   scrub: 4,
    // },
    // });
  });
  return (
    <div className='flex' ref={overRef}>
      <div
        className='poppins text-8xl text-white py-20'
        style={{ width: '60%', height: '100vh' }}
        ref={staticRef}
      >
        We deliver targeted, customizable, Risk-Free marketing solutions.
      </div>
      <div
        style={{ width: '40%', color: 'white', paddingRight: '100px' }}
        ref={scrollRef}
      >
        <div ref={para1Ref} style={{ overflow: 'hidden', opacity: '1' }}>
          <div
            className='text-2xl'
            style={{ paddingTop: '80%', paddingBottom: '10px' }}
            // ref={textRef}
          >
            Targeted Marketing Solutions
          </div>
          <div style={{ paddingBottom: '20px' }}>
            Campaign on Oferta24 will target members based on interest,
            demographics, geographic, education, family size, and language.
          </div>
        </div>
        <div ref={para2Ref} style={{ opacity: '1' }}>
          <div
            className='text-2xl'
            style={{ paddingTop: '20px', paddingBottom: '10px' }}
          >
            Exclusivity
          </div>
          <div style={{ paddingBottom: '20px' }}>
            Never compete for exposure on Oferta24, each campaign will enjoy
            category exclusivity, providing maximum opportunity to convert your
            promotion into new customer acquisitions.
          </div>
        </div>
        <div ref={para3Ref} style={{ opacity: '1' }}>
          <div
            className='text-2xl'
            style={{ paddingTop: '20px', paddingBottom: '10px' }}
          >
            Drive Foot-traffic
          </div>
          <div style={{ paddingBottom: '20px' }}>
            To redeem an Oferta24 coupon, our members must visit the designated
            retail location of your choosing; driving an increase in visitors
            traffic, and proving an excellent opportunity for you to sell
            additional products & services.
          </div>
        </div>
        <div ref={para4Ref} style={{ opacity: '1' }}>
          <div
            className='text-2xl'
            style={{ paddingTop: '20px', paddingBottom: '10px' }}
          >
            Flexibility
          </div>
          <div style={{ paddingBottom: '20px' }}>
            Each campaign on Oferta24 will allow you to maximum flexibility on
            your offer, the date of your campaign, the locations your offer can
            be redeemed, and most importantly, the total coupons you wish to
            include.
          </div>
        </div>
        <div ref={para5Ref} style={{ opacity: '1' }}>
          <div
            className='text-2xl'
            style={{ paddingTop: '20px', paddingBottom: '10px' }}
          >
            Cost-effective Customer Acquisition
          </div>
          <div style={{ paddingBottom: '20px' }}>
            From Pay-as-you-Go to Prepaid campaigns, with Oferta24 you will
            benefit from the lowest customer acquisition cost in Panama starting
            at $1.00.
          </div>
        </div>
        <div ref={para6Ref} style={{ opacity: '1' }}>
          <div
            className='text-2xl'
            style={{ paddingTop: '20px', paddingBottom: '10px' }}
          >
            FREE Brand Exposure
          </div>
          <div style={{ paddingBottom: '20px' }}>
            Through strategic logo placement, and targeted notifications,
            regardless of conversion, your campaign on Oferta24 will deliver
            your brand tens of thousands of impressions FREE.
          </div>
        </div>
        <div ref={para7Ref} style={{ opacity: '1' }}>
          <div
            className='text-2xl'
            style={{ paddingTop: '20px', paddingBottom: '10px' }}
          >
            in-depth Marketing Insights
          </div>
          <div style={{ paddingBottom: '20px' }}>
            Oferta24 tracks all member actions, interests and usage history,
            providing your company with unparalleled insights to ensure your
            campaign success.
          </div>
        </div>
        <div ref={para8Ref} style={{ opacity: '1' }}>
          <div
            className='text-2xl'
            style={{ paddingTop: '20px', paddingBottom: '10px' }}
          >
            Detailed Reporting
          </div>
          <div style={{ paddingBottom: '20px' }}>
            Never guess who your advertising campaign reached again. With
            Oferta24, each campaign will include detailed reporting including
            the day of the week and time of day each coupon was redeemed, along
            with the demographic & geographical data of each redemption.
          </div>
        </div>
        <div ref={para9Ref} style={{ opacity: '1' }}>
          <div
            className='text-2xl'
            style={{ paddingTop: '20px', paddingBottom: '10px' }}
          >
            No Risk!
          </div>
          <div style={{ paddingBottom: '20px' }}>
            Enjoy the benefit of NO RISK when you advertise with Oferta24. No
            result, no cost… it‘s that simple!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
