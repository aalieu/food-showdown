import React from 'react';
import CardList from './CardList';

const Showdown = ({ businesses, determineWinner, round }) => {
  return (
    <div>
      <CardList
        businesses={businesses}
        determineWinner={determineWinner}
        round={round}
      />
    </div>
  );
};

export default Showdown;
