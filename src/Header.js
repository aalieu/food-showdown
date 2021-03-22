import React from 'react';
import LoadingSpinner from './components/LoadingSpinner';

const Header = ({
  onZipCodeChange,
  onZipCodeSubmit,
  handleKeyPress,
  isLoading,
}) => (
  <header>
    <a href='https://aalieu.github.io/food-showdown/'>Food Showdown 🍽️</a>
    <input
      type='text'
      placeholder='Enter Zip Code'
      onChange={onZipCodeChange}
      onKeyDown={handleKeyPress}
    />
    <button onClick={onZipCodeSubmit}>Submit</button>
    {isLoading ? <LoadingSpinner /> : null}
  </header>
);

export default Header;
