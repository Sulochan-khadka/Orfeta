import { Link } from 'react-router-dom';
import image from '../assets/oferta.png';
import './home.css';

const Home = () => {
  return (
    <div className='container'>
      <div className='image-container'>
        <img src={image} alt='logo' className='image' />
        <div className='dot'>
          <div className='dots one'></div>
          <div className='dots two '></div>
          <div className='dots three'></div>
          <div className='dots four'></div>
          <div className='dots five'></div>
        </div>
      </div>
      <div className=' flex justify-center items-center p-4'>
        <Link to='/intro'>
          <div className=' bg-slate-500 mr-2 p-2 rounded-lg'>English</div>
        </Link>
        <div className=' bg-slate-500 ml-2'>Spanish</div>
      </div>
    </div>
  );
};

export default Home;
