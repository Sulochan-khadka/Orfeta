import { useRef } from 'react';
import './scroll.css';
import { motion, useInView } from 'framer-motion';

const Scroll = ({ text }) => {
  const wordRef = useRef(null);

  const isInView = useInView(wordRef);

  return (
    <div>
      <div className='texts'>
        <motion.span
          ref={wordRef}
          initial={{ opacity: 0, y: 0 }}
          animate={isInView ? { opacity: 1, y: -50 } : { opacity: 0 }}
          transition={{ staggerChildren: 0.9, duration: 1 }}
          aria-hidden
        >
          {/* {text.split('\n').map((line: string) => { */}
          {/* console.log(line); */}
          {/* return ( */}
          {/* <span className='inline-block'> */}
          {text.split(' ').map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: -50 }}
              className='inline-block'
            >
              {`${word}\u00A0`}
            </motion.span>
          ))}
          {/* </span> */}
          {/* ); */}
          {/* })} */}
        </motion.span>
      </div>
    </div>
  );
};

export default Scroll;
