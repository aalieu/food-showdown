import React from 'react';

const Header = ({ onZipCodeChange, onZipCodeSubmit, handleKeyPress }) => (
  <header>
    <a href='https://aalieu.github.io/food-showdown/'>Food Showdown 🍽️</a>
    <input
      type='text'
      placeholder='Enter Zip Code'
      onChange={onZipCodeChange}
      onKeyDown={handleKeyPress}
    />
    <button onClick={onZipCodeSubmit}>Submit</button>
  </header>
);

export default Header;
