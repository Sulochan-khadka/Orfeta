import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css';
import { useGSAP } from '@gsap/react';
import Texts from './Texts';
//@ts-expect-error this
import imagesLoaded from 'imagesloaded';

const WebGi = () => {
  const canvasRef = useRef(null);
  // const [imageisLoaded, setImageisLoaded] = useState(false);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const canvas = canvasRef.current;
    if (!canvas) return;
    // @ts-expect-error Image width and height may not exist
    canvas.width = window.innerWidth;
    // @ts-expect-error Image width and height may not exist
    canvas.height = window.innerHeight;
    // @ts-expect-error Image width and height may not exist
    const context = canvas.getContext('2d');
    const frameCount = 546;

    const currentFrame = (index: number, extension: string) =>
      `https://finaleggscenes.s3.amazonaws.com/ImgTools.co-renamed-6/scene${
        index + 1
      }.${extension}`;
    // `https://d38k0tpz62drdj.cloudfront.net/slides/${String(
    //   index + 1
    // ).padStart(3, '0')}.${extension}`;

    const images: HTMLImageElement[] = [];
    const ball = { frame: 0 };

    const render = () => {
      if (!images.length) return;
      context.canvas.width = images[0].width;
      context.canvas.height = images[0].height;
      // @ts-expect-error Image width and height may not exist
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[ball.frame], 0, 0);
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      if (i < 282) {
        img.src = currentFrame(i, 'jpg');
      } else {
        img.src = currentFrame(i, 'png');
      }
      images.push(img);
    }
    imagesLoaded(images, { background: true }, () => {
      // setImageisLoaded(true);
    });
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
    <div>
      {imagesLoaded ? (
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            zIndex: '999',
          }}
        >
          <Texts />
          <canvas
            ref={canvasRef}
            className='canvas'
            style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
          ></canvas>
        </div>
      ) : (
        <div style={{ height: '100vh', overflow: 'hidden' }}>Hello</div>
      )}
    </div>
  );
};

export default WebGi;
