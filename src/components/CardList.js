import React from 'react';
import Card from './Card';

const CardList = ({ businesses, determineWinner, round }) => {
  const businessFaceOff = businesses.slice(0, 2);
  return (
    <div className='cardList'>
      {round === 'WINNER' ? (
        <h1>WINNER!!!</h1>
      ) : round === 'FINALS' ? (
        <h1>{round}: SELECT YOUR WINNER</h1>
      ) : (
        <h1>
          {round}: Select {businesses.length / 2} more winner(s)!
        </h1>
      )}
      {businesses[1] ? (
        businessFaceOff.map((business, i) => {
          return (
            <Card
              key={i}
              id={businesses[i].id}
              name={businesses[i].name}
              image={businesses[i].image_url}
              url={businesses[i].url}
              rating={businesses[i].rating}
              determineWinner={determineWinner}
              businessFaceOff={businessFaceOff}
              round={round}
            />
          );
        })
      ) : (
        <Card
          key={businesses[0].id}
          id={businesses[0].id}
          name={businesses[0].name}
          image={businesses[0].image_url}
          url={businesses[0].url}
          rating={businesses[0].rating}
          determineWinner={determineWinner}
          businessFaceOff={businessFaceOff}
          round={round}
        />
      )}
    </div>
  );
};

export default CardList;
