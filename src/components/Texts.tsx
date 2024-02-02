import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Texts = () => {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);
  const scrollRef4 = useRef(null);
  const scrollRef5 = useRef(null);
  //ref 5 is bottom
  const scrollRef6 = useRef(null);
  const scrollRef7 = useRef(null);
  //ref 7 is bottom
  useGSAP(() => {
    const timeline1 = gsap.timeline();
    timeline1.to(scrollRef1.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: scrollRef1.current,
        start: 'bottom bottom',
        end: '10% top',
        scrub: 2,
      },
    });
    const timeline2 = gsap.timeline();
    timeline2.from(scrollRef2.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: scrollRef2.current,
        start: ' 10% top',
        end: 'bottom top',
        pin: scrollRef2.current,
        scrub: 5,
      },
    });
    const timeline3 = gsap.timeline();
    timeline3.from(scrollRef3.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: scrollRef3.current,
        start: ' 10% top',
        end: 'bottom top',
        pin: scrollRef3.current,
        scrub: 2,
      },
    });
    const timeline4 = gsap.timeline();
    timeline4.from(scrollRef4.current, {
      opacity: 0,
      stagger: 5,
      scrollTrigger: {
        trigger: scrollRef4.current,
        start: ' 10% top',
        end: 'bottom 20%',
        pin: scrollRef4.current,
        scrub: 2,
      },
    });
    // const timeline5 = gsap.timeline();
    // timeline5.from(scrollRef5.current, {
    //   opacity: 0,
    //   scrollTrigger: {
    //     trigger: scrollRef4.current,
    //     start: ' top 90%',
    //     end: 'bottom bottom',
    //     pin: scrollRef5.current,
    //     scrub: 2,
    //     markers: true,
    //   },
    // });
    const timeline6 = gsap.timeline();
    timeline6.from(scrollRef6.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: scrollRef6.current,
        start: ' 10% top',
        end: 'bottom top',
        pin: scrollRef6.current,
        scrub: 2,
      },
    });
    const timeline7 = gsap.timeline();
    timeline7.from(scrollRef7.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: scrollRef7.current,
        start: ' 30% top',
        end: 'bottom top',
        pin: scrollRef7.current,
        scrub: 2,
      },
    });
  }, []);
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '70px' }}></div>
      <div style={{ padding: '0 0 70px 70px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'end',
            fontSize: '75px',
            fontFamily: 'roboto',
            fontWeight: '400',
            width: '470px',
            lineHeight: '1',
            height: '100vh',
            overflow: 'hidden',
          }}
          className='scroll'
          ref={scrollRef1}
        >
          What makes your business stand out?
        </div>
        <div
          style={{
            fontFamily: 'roboto',
            fontSize: '30px',
            fontWeight: '300',
            width: '470px',
            lineHeight: '1.2',
            height: '150vh',
          }}
          ref={scrollRef2}
        >
          Why would a customer choose your business over your competitor?
        </div>
        <div
          style={{
            fontFamily: 'roboto',
            fontSize: '30px',
            fontWeight: '300',
            width: '470px',
            lineHeight: '1.2',
            height: '200vh',
          }}
          ref={scrollRef3}
        >
          What do you offer, and how does that offer benefit the customer you
          are targeting?
        </div>
        <div ref={scrollRef4}>
          <div
            style={{
              fontFamily: 'roboto',
              fontSize: '30px',
              fontWeight: '300',
              width: '470px',
              lineHeight: '1.2',
              height: '70vh',
            }}
          >
            In today’s highly competitive business environment, customers seem
            to have all the power; as so many businesses are vying to for the
            attention of the consumer market.
          </div>
          {/* <div
            style={{
              fontFamily: 'sans-serif',
              fontSize: '16px',
              fontWeight: '300',
              lineHeight: '1.2',
              width: '600px',
              marginTop: '50%',
            }}
          >
            So how does your business stand out, attract new customers and grow
            sales?
          </div> */}
        </div>
        <div
          style={{
            fontFamily: 'sans-serif',
            fontSize: '16px',
            fontWeight: '300',
            lineHeight: '1.2',
            width: 'auto',
            height: '200vh',
          }}
          ref={scrollRef5}
        >
          So how does your business stand out, attract new customers and grow
          sales?
        </div>
        <div
          style={{
            fontFamily: 'roboto',
            fontSize: '30px',
            fontWeight: '300',
            width: '470px',
            lineHeight: '1.2',
            height: '200vh',
          }}
          ref={scrollRef6}
        >
          Oferta24, we deliver custom, targeted, RISK FREE marketing campaigns
          that are guaranteed to make your business standout, and deliver
          results.
        </div>
        <div
          style={{
            fontSize: '50px',
            fontFamily: 'roboto',
            fontWeight: '400',
            lineHeight: '1.1',
            width: 'auto',
            height: '100vh',
          }}
          ref={scrollRef7}
        >
          NO RESULTS <br />
          NO COST… <br />
          IT’S JUST THAT SIMPLE!
        </div>
      </div>
    </div>
  );
};

export default Texts;
