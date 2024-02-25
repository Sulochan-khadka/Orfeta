import Slider from 'react-slick';
import { useRef } from 'react';
import './reach.css';

const Reach = () => {
  const arrowRef = useRef(null);
  const settings = {
    className: 'center',
    centerMode: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      style={{
        paddingLeft: '100px',
        paddingRight: '100px',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '400px',
          height: '270px',
          zIndex: '999',
          position: 'absolute',
          left: '7.2%',
          display: 'flex',
          justifyContent: 'right',
          alignItems: 'center',
        }}
        //@ts-expect-error ref element can never be null
        onClick={() => arrowRef.current.slickPrev()}
      >
        {/* <div
          style={{
            height: '50px',
            width: '50px',
            backgroundColor: '#00a3e9',
            borderRadius: '50%',
            color: 'white',
          }}
        >
          <IoIosArrowBack />
        </div> */}
      </div>
      <Slider ref={arrowRef} {...settings}>
        <div className='p-8'>
          <div
            style={{
              height: '200px',
              width: '320px',
              border: '20px solid gray',
              borderRadius: '10px',
              backgroundColor: 'whitesmoke',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className='roboto text-5xl'>Members</div>
          </div>
        </div>
        <div className='p-8'>
          <div
            style={{
              height: '200px',
              width: '320px',
              border: '20px solid gray',
              borderRadius: '10px',
              backgroundColor: 'whitesmoke',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className='roboto text-5xl'>Income Level</div>
          </div>
        </div>
        <div className='p-8'>
          <div
            style={{
              height: '200px',
              width: '320px',
              border: '20px solid gray',
              borderRadius: '10px',
              backgroundColor: 'whitesmoke',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className='roboto text-5xl'>Number of Children</div>
          </div>
        </div>
        <div className='p-8'>
          <div
            style={{
              height: '200px',
              width: '320px',
              border: '20px solid gray',
              borderRadius: '10px',
              backgroundColor: 'whitesmoke',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className='roboto text-5xl'>Education Level</div>
          </div>
        </div>
        <div className='p-8'>
          <div
            style={{
              height: '200px',
              width: '320px',
              border: '20px solid gray',
              borderRadius: '10px',
              backgroundColor: 'whitesmoke',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className='roboto text-5xl'>Demographic</div>
          </div>
        </div>
        <div className='p-8'>
          <div
            style={{
              height: '200px',
              width: '320px',
              border: '20px solid gray',
              borderRadius: '10px',
              backgroundColor: 'whitesmoke',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className='roboto text-5xl'>Geographic</div>
          </div>
        </div>
        <div className='p-8'>
          <div
            style={{
              height: '200px',
              width: '320px',
              border: '20px solid gray',
              borderRadius: '10px',
              backgroundColor: 'whitesmoke',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className='roboto text-5xl'>Total Victors</div>
          </div>
        </div>
        <div className='p-8'>
          <div
            style={{
              height: '200px',
              width: '320px',
              border: '20px solid gray',
              borderRadius: '10px',
              backgroundColor: 'whitesmoke',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className='roboto text-5xl'>Visits per member</div>
          </div>
        </div>
        <div className='p-8'>
          <div
            style={{
              height: '200px',
              width: '320px',
              border: '20px solid gray',
              borderRadius: '10px',
              backgroundColor: 'whitesmoke',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className='roboto text-5xl'>Coupons</div>
          </div>
        </div>
        <div className='p-8'>
          <div
            style={{
              height: '200px',
              width: '320px',
              border: '20px solid gray',
              borderRadius: '10px',
              backgroundColor: 'whitesmoke',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className='roboto text-5xl'>Redemptions per Member</div>
          </div>
        </div>
        <div className='p-8'>
          <div
            style={{
              height: '200px',
              width: '320px',
              border: '20px solid gray',
              borderRadius: '10px',
              backgroundColor: 'whitesmoke',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className='roboto text-5xl'>Available Savings</div>
          </div>
        </div>
        <div className='p-8'>
          <div
            style={{
              height: '200px',
              width: '320px',
              border: '20px solid gray',
              borderRadius: '10px',
              backgroundColor: 'whitesmoke',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className='roboto text-5xl'>Savings per Member</div>
          </div>
        </div>
        <div className='p-8'>
          <div
            style={{
              height: '200px',
              width: '320px',
              border: '20px solid gray',
              borderRadius: '10px',
              backgroundColor: 'whitesmoke',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className='roboto text-5xl'>Time spent on Oferta24</div>
          </div>
        </div>
      </Slider>
      <div
        style={{
          width: '400px',
          height: '270px',
          zIndex: '999',
          position: 'absolute',
          right: '6.5%',
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'center',
        }}
        //@ts-expect-error ref element can never be null
        onClick={() => arrowRef.current.slickNext()}
      >
        {/* <div
          style={{
            height: '50px',
            width: '50px',
            backgroundColor: '#00a3e9',
            borderRadius: '50%',
            color: 'white',
          }}
        >
          <IoIosArrowForward />
        </div> */}
      </div>
    </div>
  );
};

export default Reach;
