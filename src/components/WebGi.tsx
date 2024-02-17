import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css';
import { useGSAP } from '@gsap/react';
import Texts from './Texts';

const WebGi = () => {
  const canvasRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvas.getContext('2d');
    const frameCount = 639;

    const currentFrame = (index: number) =>
      `https://d38k0tpz62drdj.cloudfront.net/slides/scene${index + 1}.jpg`;

    const images: HTMLImageElement[] = [];
    const ball = { frame: 0 };

    const render = () => {
      context.canvas.width = images[0].width;
      context.canvas.height = images[0].height;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[ball.frame], 0, 0);
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    gsap.to(ball, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        scrub: 2,
        pin: canvas,
        end: '1050%',
      },
      onUpdate: render,
    });

    images[0].onload = render;
  });

  return (
    <div
      style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}
    >
      <Texts />
      <canvas
        ref={canvasRef}
        className='canvas'
        style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
      ></canvas>
    </div>
  );
};

export default WebGi;
