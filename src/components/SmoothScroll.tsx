import { ReactLenis } from '@studio-freight/react-lenis';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const SmoothScroll: React.FC<Props> = ({ children }) => {
  // const lenis = useLenis(({ scroll }) => {
  //   // called every scroll
  // });

  return <ReactLenis root>{children}</ReactLenis>;
};

export default SmoothScroll;
