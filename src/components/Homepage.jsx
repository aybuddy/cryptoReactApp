import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  return (
    <>
      <h1 className='heading'>Global Crypto Stats</h1>
      <div className='row'>
        <div className='col'>
          <h2>Total Cryptocurrencies</h2>
          <h3>5</h3>
        </div>
        <div className='col'>
          <h2>Total Exchanges</h2>
          <h3>5</h3>
        </div>
        <div className='col'>
          <h2>Total Market Cap</h2>
          <h3>5</h3>
        </div>
        <div className='col'>
          <h2>Total 24h Volume</h2>
          <h3>5</h3>
        </div>
        <div className='col'>
          <h2>Total Markets</h2>
          <h3>5</h3>
        </div>
      </div>
    </>
  );
};

export default Homepage;
