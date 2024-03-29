import './card.css';

//@ts-expect-error obvious
const Card = ({ ad, title, bio }) => {
  return (
    <div className='card-container'>
      <img
        src={`src/assets/icons/asset ${76 + ad}.svg`}
        alt=''
        className='image-icon'
      />
      <div className='icon-text'>
        <div>{title}</div>
        <div>{bio}</div>
      </div>
    </div>
  );
};

export default Card;
