import { useRef } from 'react';
import image1 from '../assets/oferta24/alex-hu-g-1o77uBwRQ-unsplash.jpg';
import image2 from '../assets/oferta24/gonzalo-facello-TLb0Sax_oZI-unsplash.jpg';
import image3 from '../assets/oferta24/julia-solonina-aIcqT3J7xko-unsplash.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './oferta.css';
const Oferta = () => {
  gsap.registerPlugin(ScrollTrigger);
  // const refTitle = useRef(null);
  const refcontent = useRef(null);
  const refTop = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const refo = useRef(null);
  const reff = useRef(null);
  const refe = useRef(null);
  const refr = useRef(null);
  const reft = useRef(null);
  const refa = useRef(null);
  const refl2 = useRef(null);
  const refl4 = useRef(null);
  // const reft1 = useRef(null);
  useGSAP(() => {
    const scrollTriggerOptions1 = {
      trigger: refcontent.current,
      start: 'top 30%',
      end: 'top top',
      scrub: true,
    };
    const scrollTriggerOptions2 = {
      trigger: refcontent.current,
      start: '14% 30%',
      end: '14% top',
      scrub: true,
    };
    const scrollTriggerOptions3 = {
      trigger: refcontent.current,
      start: '28% 30%',
      end: '28% top',
      scrub: true,
    };
    const scrollTriggerOptions4 = {
      trigger: refcontent.current,
      start: '42% 30%',
      end: '42% top',
      scrub: true,
    };
    const scrollTriggerOptions5 = {
      trigger: refcontent.current,
      start: '56% 30%',
      end: '56% top',
      scrub: true,
    };
    const scrollTriggerOptions6 = {
      trigger: refcontent.current,
      start: '70% 30%',
      end: '70% top',
      scrub: true,
    };
    const scrollTriggerOptions7 = {
      trigger: refcontent.current,
      start: '84% 30%',
      end: '84% top',
      scrub: true,
    };
    const scrollTriggerOptions8 = {
      trigger: refcontent.current,
      start: '98% 30%',
      end: '98% top',
      scrub: true,
    };
    gsap.to(refTop.current, {
      scrollTrigger: {
        trigger: refTop.current,
        pin: refTop.current,
        pinSpacing: false,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
    const t1 = gsap.timeline({
      scrollTrigger: scrollTriggerOptions1,
    });
    const t2 = gsap.timeline({
      scrollTrigger: scrollTriggerOptions2,
    });
    const t3 = gsap.timeline({
      scrollTrigger: scrollTriggerOptions3,
    });
    const t4 = gsap.timeline({
      scrollTrigger: scrollTriggerOptions4,
    });
    const t5 = gsap.timeline({
      scrollTrigger: scrollTriggerOptions5,
    });
    const t6 = gsap.timeline({
      scrollTrigger: scrollTriggerOptions6,
    });
    const t7 = gsap.timeline({
      scrollTrigger: scrollTriggerOptions7,
    });
    const t8 = gsap.timeline({
      scrollTrigger: scrollTriggerOptions8,
    });
    //for o
    t1.from(ref1.current, {
      scale: 17,
      opacity: 0,
    })
      .to(ref1.current, {
        translateX: '-100%',
        // opacity: 0,
        scrollTrigger: {
          trigger: refcontent.current,
          // pin: ref1.current,
          start: '7% 20%',
          end: '7% 10%',
          scrub: true,
        },
      })
      .to(refo.current, {
        opacity: 1,
        width: '15.4%',
      });
    //for f
    t2.from(ref2.current, {
      scale: 17,
      opacity: 0,
    })
      .to(ref2.current, {
        translateX: '-100%',
        // opacity: 0,
        scrollTrigger: {
          trigger: refcontent.current,
          // pin: ref1.current,
          start: '21% 20%',
          end: '21% 10%',
          scrub: true,
        },
      })
      .to(reff.current, {
        opacity: 1,
        width: '10.7%',
      });
    //for e
    t3.from(ref3.current, {
      scale: 17,
      opacity: 0,
    })
      .to(ref3.current, {
        translateX: '-100%',
        // opacity: 0,
        scrollTrigger: {
          trigger: refcontent.current,
          // pin: ref1.current,
          start: '35% 20%',
          end: '35% 10%',
          scrub: true,
        },
      })
      .to(refe.current, {
        opacity: 1,
        width: '10.7%',
      });
    //for r
    t4.from(ref4.current, {
      scale: 17,
      opacity: 0,
    })
      .to(ref4.current, {
        translateX: '-100%',
        // opacity: 0,
        scrollTrigger: {
          trigger: refcontent.current,
          // pin: ref1.current,
          start: '49% 20%',
          end: '49% 10%',
          scrub: true,
        },
      })
      .to(refr.current, {
        opacity: 1,
        width: '12.7%',
      });
    //for t
    t5.from(ref5.current, {
      scale: 17,
      opacity: 0,
    })
      .to(ref5.current, {
        translateX: '-100%',
        // opacity: 0,
        scrollTrigger: {
          trigger: refcontent.current,
          // pin: ref1.current,
          start: '63% 20%',
          end: '63% 10%',
          scrub: true,
        },
      })
      .to(reft.current, {
        opacity: 1,
        width: '11.6%',
      });
    //for a
    t6.from(ref6.current, {
      scale: 17,
      opacity: 0,
    })
      .to(ref6.current, {
        translateX: '-100%',
        // opacity: 0,
        scrollTrigger: {
          trigger: refcontent.current,
          // pin: ref1.current,
          start: '77% 20%',
          end: '77% 10%',
          scrub: true,
        },
      })
      .to(refa.current, {
        opacity: 1,
        width: '14.4%',
      });
    //for 2
    t7.from(ref7.current, {
      scale: 17,
      opacity: 0,
    })
      .to(ref7.current, {
        translateX: '-100%',
        // opacity: 0,
        scrollTrigger: {
          trigger: refcontent.current,
          // pin: ref1.current,
          start: '91% 20%',
          end: '91% 10%',
          scrub: true,
        },
      })
      .to(refl2.current, {
        opacity: 1,
        width: '11.3%',
      });
    // for 4
    t8.from(ref8.current, {
      scale: 17,
      opacity: 0,
    }).to(refl4.current, {
      opacity: 1,
      width: '12.4%',
    });
  });
  return (
    <div ref={refTop} style={{}}>
      <div className='flex relative' style={{ paddingLeft: '20%' }}>
        <div
          className='font-poppins font-bold'
          style={{
            fontSize: '160px',
            color: 'rgb(67, 67, 67)',
          }}
        >
          OFERTA24
        </div>
        <div
          className='font-poppins font-bold absolute flex text-white'
          style={{ fontSize: '160px' }}
        >
          <div ref={refo} style={{ width: '0%', opacity: '0' }}>
            O
          </div>
          <div ref={reff} style={{ width: '0%', opacity: '0' }}>
            F
          </div>
          <div ref={refe} style={{ width: '0%', opacity: '0' }}>
            E
          </div>
          <div ref={refr} style={{ width: '0%', opacity: '0' }}>
            R
          </div>
          <div ref={reft} style={{ width: '0%', opacity: '0' }}>
            T
          </div>
          <div ref={refa} style={{ width: '0%', opacity: '0' }}>
            A
          </div>
          <div
            ref={refl2}
            style={{ width: '0%', opacity: '0', color: '#00a3e9' }}
          >
            2
          </div>
          <div
            ref={refl4}
            style={{ width: '0%', opacity: '0', color: '#00a3e9' }}
          >
            4
          </div>
        </div>
      </div>
      <div ref={refcontent} style={{ height: '800vh' }}>
        <div className='flex px-40 justify-evenly absolute' ref={ref1}>
          <div
            style={{
              width: '30%',
              height: '50vh',
              paddingRight: '10px',
              position: 'relative',
              borderRadius: '20px',
            }}
          >
            <img src={image1} alt='' className='ofrImg' />
          </div>
          <div style={{ width: '50%', paddingLeft: '10px', color: 'white' }}>
            <div style={{ fontSize: '50px' }}>
              Choose City & Select Target Market
            </div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae sed
            placeat odio quibusdam, distinctio, temporibus voluptatum velit
            commodi aliquam facere cumque laudantium hic ipsum nostrum ex natus!
            Esse, repellendus aliquid?
          </div>
        </div>
        <div className='flex px-40 justify-evenly absolute' ref={ref2}>
          <div
            style={{
              width: '30%',
              height: '50vh',
              paddingRight: '10px',
              position: 'relative',
              borderRadius: '20px',
            }}
          >
            <img src={image2} alt='' className='ofrImg' />
          </div>
          <div style={{ width: '50%', paddingLeft: '10px', color: 'white' }}>
            <div style={{ fontSize: '50px' }}>Create Offer & Schedule date</div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae sed
            placeat odio quibusdam, distinctio, temporibus voluptatum velit
            commodi aliquam facere cumque laudantium hic ipsum nostrum ex natus!
            Esse, repellendus aliquid?
          </div>
        </div>
        <div className='flex px-40 justify-evenly absolute' ref={ref3}>
          <div
            style={{
              width: '30%',
              height: '50vh',
              paddingRight: '10px',
              position: 'relative',
              borderRadius: '20px',
            }}
          >
            <img src={image3} alt='' className='ofrImg' />
          </div>
          <div style={{ width: '50%', paddingLeft: '10px', color: 'white' }}>
            <div style={{ fontSize: '50px' }}>Publish Offer</div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae sed
            placeat odio quibusdam, distinctio, temporibus voluptatum velit
            commodi aliquam facere cumque laudantium hic ipsum nostrum ex natus!
            Esse, repellendus aliquid?
          </div>
        </div>
        <div className='flex px-40 justify-evenly absolute' ref={ref4}>
          <div
            style={{
              width: '30%',
              height: '50vh',
              paddingRight: '10px',
              position: 'relative',
              borderRadius: '20px',
            }}
          >
            <img src={image3} alt='' className='ofrImg' />
          </div>
          <div style={{ width: '50%', paddingLeft: '10px', color: 'white' }}>
            <div style={{ fontSize: '50px' }}>
              Members Receive Instant Alert
            </div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae sed
            placeat odio quibusdam, distinctio, temporibus voluptatum velit
            commodi aliquam facere cumque laudantium hic ipsum nostrum ex natus!
            Esse, repellendus aliquid?
          </div>
        </div>
        <div className='flex px-40 justify-evenly absolute' ref={ref5}>
          <div
            style={{
              width: '30%',
              height: '50vh',
              paddingRight: '10px',
              position: 'relative',
              borderRadius: '20px',
            }}
          >
            <img src={image3} alt='' className='ofrImg' />
          </div>
          <div style={{ width: '50%', paddingLeft: '10px', color: 'white' }}>
            <div style={{ fontSize: '50px' }}>Offer Downloaded</div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae sed
            placeat odio quibusdam, distinctio, temporibus voluptatum velit
            commodi aliquam facere cumque laudantium hic ipsum nostrum ex natus!
            Esse, repellendus aliquid?
          </div>
        </div>
        <div className='flex px-40 justify-evenly absolute' ref={ref6}>
          <div
            style={{
              width: '30%',
              height: '50vh',
              paddingRight: '10px',
              position: 'relative',
              borderRadius: '20px',
            }}
          >
            <img src={image3} alt='' className='ofrImg' />
          </div>
          <div style={{ width: '50%', paddingLeft: '10px', color: 'white' }}>
            <div style={{ fontSize: '50px' }}>
              Member redeems offer, and become your customer
            </div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae sed
            placeat odio quibusdam, distinctio, temporibus voluptatum velit
            commodi aliquam facere cumque laudantium hic ipsum nostrum ex natus!
            Esse, repellendus aliquid?
          </div>
        </div>
        <div className='flex px-40 justify-evenly absolute' ref={ref7}>
          <div
            style={{
              width: '30%',
              height: '50vh',
              paddingRight: '10px',
              position: 'relative',
              borderRadius: '20px',
            }}
          >
            <img src={image3} alt='' className='ofrImg' />
          </div>
          <div style={{ width: '50%', paddingLeft: '10px', color: 'white' }}>
            <div style={{ fontSize: '50px' }}>
              Real time monitoring & Analytics
            </div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae sed
            placeat odio quibusdam, distinctio, temporibus voluptatum velit
            commodi aliquam facere cumque laudantium hic ipsum nostrum ex natus!
            Esse, repellendus aliquid?
          </div>
        </div>
        <div className='flex px-40 justify-evenly' ref={ref8}>
          <div
            style={{
              width: '30%',
              height: '50vh',
              paddingRight: '10px',
              position: 'relative',
              borderRadius: '20px',
            }}
          >
            <img src={image3} alt='' className='ofrImg' />
          </div>
          <div style={{ width: '50%', paddingLeft: '10px', color: 'white' }}>
            <div style={{ fontSize: '50px' }}>No Result… No Cost!</div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae sed
            placeat odio quibusdam, distinctio, temporibus voluptatum velit
            commodi aliquam facere cumque laudantium hic ipsum nostrum ex natus!
            Esse, repellendus aliquid?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oferta;
