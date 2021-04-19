import React from 'react';

const Home = () => {
  return (
    <div className='container'>
      <div className='intro'>
        <h2>What is Food Showdown about?</h2>
        <p>
          Everyone has had those moments where they think to themselves – "Hmm,
          what should I eat today?"
        </p>
        <p>
          Then they go on Yelp and search for food within their area. Everything
          looks good... But at the same time <em>nothing</em> looks good. Food
          Showdown was created to help those who are indecisive take control of
          their lives and pick what they're really feeling like eating.
        </p>
        <p>
          <strong>May the best food win.</strong>
        </p>
        <h2>Tell Me More</h2>
        <p>
          Food Showdown utilizes the Yelp Fusion API to randomly select 16
          businesses located near the zip code provided. From there, two
          businesses will be pit against each other until only one more business
          remains.
        </p>
        <p>Site is still a work in progress and thus some bugs do exist:</p>
        <li>Works in mobile, but design is not fully responsive</li>
        <p>*Only shows businesses currently open at time of search</p>
      </div>
    </div>
  );
};

export default Home;
