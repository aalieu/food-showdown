import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Showdown from './components/Showdown';
import Home from './components/Home';
import './App.css';

let advancingBusinesses = [];

const App = () => {
  const [zipCode, setZipCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [businesses, setBusinesses] = useState([]);
  const [winningBusinesses, setWinningBusinesses] = useState([]);
  const [round, setRound] = useState('SWEET 16');

  const mounted = useRef();

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else if (businesses.length < 1 && round === 'SWEET 16') {
      advancingBusinesses = [];
      setBusinesses(winningBusinesses);
      setRound('QUARTERFINALS');
    } else if (businesses.length < 1 && round === 'QUARTERFINALS') {
      advancingBusinesses = [];
      setBusinesses(winningBusinesses);
      setRound('SEMIFINALS');
    } else if (businesses.length < 1 && round === 'SEMIFINALS') {
      advancingBusinesses = [];
      setBusinesses(winningBusinesses);
      setRound('FINALS');
    } else if (businesses.length < 2 && round === 'FINALS') {
      advancingBusinesses = [];
      setBusinesses(winningBusinesses);
      setRound('WINNER');
    }
  }, [businesses, round, winningBusinesses]);

  // Monitors input field to grab zip code being entered
  const onZipCodeChange = (event) => setZipCode(event.target.value);

  // RegEx to check if zip code entered is valid or not
  const isValidZipCode = (zipCode) => /^\d{5}[-\s]?(?:\d{4})?$/gm.test(zipCode);

  // Set loading state to opposite of previous state
  const previousLoadingState = () => {
    setLoading((prevLoading) => !prevLoading);
  };

  const restartRound = () => {
    setRound('SWEET 16');
  };

  // On clicking submit with a valid zip code, makes a request to Yelp Fusion API with random parameters
  // Once call is successful, return JSON response and run a function to randomize the order of businesses  returned
  // Set state to store businesses
  // Return previous loading state
  const onZipCodeSubmit = () => {
    previousLoadingState();
    restartRound();
    const bearer = `Bearer ${process.env.REACT_APP_API_KEY}`;
    const corsAnywhere = `${process.env.REACT_APP_CORS_ANYWHERE}`;
    const randomOffset = Math.floor(Math.random() * 26);

    if (isValidZipCode(zipCode)) {
      fetch(
        `${corsAnywhere}https://api.yelp.com/v3/businesses/search?limit=48&offset=${randomOffset}&location=${zipCode}&open_now=true&term=food`,
        {
          method: 'get',
          headers: { Authorization: bearer },
        }
      )
        .then((response) => response.json())
        .then((data) => shuffleArray(data.businesses, 3))
        .then((result) => setBusinesses(result))
        .then(() => previousLoadingState());
    } else {
      alert('Not a valid zip code.');
    }
  };

  // Allowing input submit with enter key
  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      onZipCodeSubmit();
    }
  };

  // Function that takes in an array and size n and utilizes an algorithm that will shuffle the businesses in the array
  const shuffleArray = (array, n) => {
    const splitArrayBy = array.length / n;

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    const splicedArray = array.splice(0, splitArrayBy);
    return splicedArray;
  };

  // Function that filters the array of businesses and removes the businesses that contain a matching id
  const removeBusinessFromArray = (businessIds) =>
    businesses.filter((business) => !businessIds.includes(business.id));

  // Function that saves the id of winning business and pushes the business into an empty array
  // At the end of each round, the array of winners will be stored in state in winningBusinesses array
  // useEffect hook sets new round and sets businesses array with data stored in the winningBusinesses array
  // Continue until a winner is decided
  const determineWinner = (id, businessFaceOff, round) => {
    const winner = businesses.filter((business) => business.id === id);
    const businessIds = businessFaceOff.map((obj) => obj.id);
    advancingBusinesses.push(winner[0]);

    switch (round) {
      case 'SWEET 16':
        if (businesses.length > 3) {
          setBusinesses(removeBusinessFromArray(businessIds));
        } else if (businesses.length < 3) {
          setBusinesses(removeBusinessFromArray(businessIds));
          setWinningBusinesses(shuffleArray(advancingBusinesses, 1));
        }
        break;
      case 'QUARTERFINALS':
        if (businesses.length > 3) {
          setBusinesses(removeBusinessFromArray(businessIds));
        } else if (businesses.length < 3) {
          setBusinesses(removeBusinessFromArray(businessIds));
          setWinningBusinesses(shuffleArray(advancingBusinesses, 1));
        }
        break;
      case 'SEMIFINALS':
        if (businesses.length > 3) {
          setBusinesses(removeBusinessFromArray(businessIds));
        } else if (businesses.length < 3) {
          setBusinesses(removeBusinessFromArray(businessIds));
          setWinningBusinesses(shuffleArray(advancingBusinesses, 1));
        }
        break;
      case 'FINALS':
        setBusinesses(removeBusinessFromArray(businessIds));
        setWinningBusinesses(advancingBusinesses);
        break;
      case 'WINNER':
        setBusinesses(winningBusinesses);
        break;
      default:
        return null;
    }
  };

  // Function to render dynamic information depending on which round it is
  const renderShowdown = () => {
    if (!businesses[0] && round === 'SWEET 16') {
      return <Home />;
    } else if (businesses[1] && round === 'SWEET 16') {
      return (
        <Showdown
          businesses={businesses}
          determineWinner={determineWinner}
          round={round}
        />
      );
    } else if (businesses[1] && round === 'QUARTERFINALS') {
      return (
        <Showdown
          businesses={businesses}
          determineWinner={determineWinner}
          round={round}
        />
      );
    } else if (businesses[1] && round === 'SEMIFINALS') {
      return (
        <Showdown
          businesses={businesses}
          determineWinner={determineWinner}
          round={round}
        />
      );
    } else if (businesses[1] && round === 'FINALS') {
      return (
        <Showdown
          businesses={businesses}
          determineWinner={determineWinner}
          round={round}
        />
      );
    } else if (businesses[0] && round === 'WINNER') {
      return (
        <Showdown
          businesses={businesses}
          determineWinner={determineWinner}
          round={round}
        />
      );
    }
  };

  return (
    <div className='App'>
      <Header
        onZipCodeChange={onZipCodeChange}
        onZipCodeSubmit={onZipCodeSubmit}
        handleKeyPress={handleKeyPress}
        isLoading={loading}
      />
      {renderShowdown()}
    </div>
  );
};

export default App;
