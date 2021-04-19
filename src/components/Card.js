import React from 'react';

const Card = ({
  id,
  name,
  image,
  rating,
  url,
  determineWinner,
  businessFaceOff,
  round,
}) => {
  return (
    <div className='card'>
      <img className='cardImage' src={image} alt='restaurant' />
      <div className='card-body'>
        <h5 className='cardTitle'>{name}</h5>
        <p className='cardRating'>Rating: {rating}/5</p>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={url}
          className='cardLink'
        >
          {url.split('?')[0]}
        </a>
        <div>
          {round !== 'WINNER' ? (
            <button
              className='likeBtn'
              onClick={() => determineWinner(id, businessFaceOff, round)}
            >
              ❤️
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
