import { useRef } from 'react';
import SplitType from 'split-type';
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import './scroll.css';

gsap.registerPlugin(ScrollTrigger);

const Scroll = () => {
  const wordRef = useRef(null);
  const word = new SplitType(wordRef.current);

  useGSAP(() => {
    gsap.to(wordRef.current, {
      y: 0,
      // opacity:1,
      stagger: 0.05,
      scrollTrigger: {
        trigger: wordRef.current,
        start: 'top 30%',
        end: 'bottom 30%',
        markers: true,
        scrub: true,
      },
    });
  });

  return (
    <div>
      <div ref={wordRef} className='texts'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At laboriosam
        tempore dolor doloribus exercitationem a optio laborum, excepturi, rem,
        esse voluptatibus non quod qui ipsa dolore doloremque? Aspernatur,
        soluta optio. Impedit hic voluptatem laudantium facere dolorem. Sint
        quaerat architecto rem.
      </div>
    </div>
  );
};

export default Scroll;
