import { useRef } from 'react';
import { gsap } from 'gsap/all';
import SplitText from 'gsap-trial/SplitText';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const Features = () => {
  const staticRef = useRef(null);
  const scrollRef = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const para3Ref = useRef(null);
  const para4Ref = useRef(null);
  const para5Ref = useRef(null);
  const para6Ref = useRef(null);
  const para7Ref = useRef(null);
  const para8Ref = useRef(null);
  const para9Ref = useRef(null);

  useGSAP(() => {
    const staticPart = staticRef.current;
    const scrollPart = scrollRef.current;

    gsap.timeline({
      scrollTrigger: {
        trigger: scrollPart,
        start: 'top top',
        end: `bottom 70%`,
        pin: staticPart,
        scrub: true,
        onEnter: () => console.log('Pin starts'),
        onLeave: () => console.log('Pin ends'),
      },
    });
    const t1 = gsap.timeline();
    const mySplitText = new SplitText(para1Ref.current, { type: 'chars' });
    const chars = mySplitText.chars;
    t1.from(chars, {
      opacity: 0,
      stagger: {
        each: 0.5,
      },
      scrollTrigger: {
        trigger: chars,
        start: 'top 50%',
        end: 'bottom 45%',
        // markers: true,
        scrub: true,
      },
    });
    const t2 = gsap.timeline();
    const mySplitText2 = new SplitText(para2Ref.current, { type: 'chars' });
    const chars2 = mySplitText2.chars;
    t2.from(chars2, {
      opacity: 0,
      stagger: {
        each: 0.5,
      },
      scrollTrigger: {
        trigger: chars2,
        start: 'top 50%',
        end: 'bottom 45%',
        // markers: true,
        scrub: true,
      },
    });
    const t3 = gsap.timeline();
    const mySplitText3 = new SplitText(para3Ref.current, { type: 'chars' });
    const chars3 = mySplitText3.chars;
    t3.from(chars3, {
      opacity: 0,
      stagger: {
        each: 0.5,
      },
      scrollTrigger: {
        trigger: chars3,
        start: 'top 50%',
        end: 'bottom 45%',
        // markers: true,
        scrub: true,
      },
    });
    const t4 = gsap.timeline();
    const mySplitText4 = new SplitText(para4Ref.current, { type: 'chars' });
    const chars4 = mySplitText4.chars;
    t4.from(chars4, {
      opacity: 0,
      stagger: {
        each: 0.5,
      },
      scrollTrigger: {
        trigger: chars4,
        start: 'top 50%',
        end: 'bottom 45%',
        // markers: true,
        scrub: true,
      },
    });
    const t5 = gsap.timeline();
    const mySplitText5 = new SplitText(para5Ref.current, { type: 'chars' });
    const chars5 = mySplitText5.chars;
    t5.from(chars5, {
      opacity: 0,
      stagger: {
        each: 0.5,
      },
      scrollTrigger: {
        trigger: chars5,
        start: 'top 50%',
        end: 'bottom 45%',
        // markers: true,
        scrub: true,
      },
    });
    const t6 = gsap.timeline();
    const mySplitText6 = new SplitText(para6Ref.current, { type: 'chars' });
    const chars6 = mySplitText6.chars;
    t6.from(chars6, {
      opacity: 0,
      stagger: {
        each: 0.5,
      },
      scrollTrigger: {
        trigger: chars6,
        start: 'top 50%',
        end: 'bottom 45%',
        // markers: true,
        scrub: true,
      },
    });
    const t7 = gsap.timeline();
    const mySplitText7 = new SplitText(para7Ref.current, { type: 'chars' });
    const chars7 = mySplitText7.chars;
    t7.from(chars7, {
      opacity: 0,
      stagger: {
        each: 0.5,
      },
      scrollTrigger: {
        trigger: chars7,
        start: 'top 50%',
        end: 'bottom 45%',
        // markers: true,
        scrub: true,
      },
    });
    const t8 = gsap.timeline();
    const mySplitText8 = new SplitText(para8Ref.current, { type: 'chars' });
    const chars8 = mySplitText8.chars;
    t8.from(chars8, {
      opacity: 0,
      stagger: {
        each: 0.5,
      },
      scrollTrigger: {
        trigger: chars8,
        start: 'top 50%',
        end: 'bottom 45%',
        // markers: true,
        scrub: true,
      },
    });
    const t9 = gsap.timeline();
    const mySplitText9 = new SplitText(para9Ref.current, { type: 'chars' });
    const chars9 = mySplitText9.chars;
    t9.from(chars9, {
      opacity: 0,
      stagger: {
        each: 0.5,
      },
      scrollTrigger: {
        trigger: chars9,
        start: 'top 50%',
        end: 'bottom 45%',
        // markers: true,
        scrub: true,
      },
    });
  }, []);
  return (
    <div className='flex'>
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
