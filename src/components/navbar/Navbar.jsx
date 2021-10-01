import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// icons
import icon from '../../images/cryptocurrency.png';
import { GoHome } from 'react-icons/go';
import {
  AiFillFund,
  AiOutlineMoneyCollect,
  AiOutlineBulb,
} from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <div className='avatar'>
          <img src={icon} alt='' />
        </div>
        {/* TODO Fix link styling and hover styling */}
        <div className='logo'>
          <Link to='/'>Cryptoverse</Link>
        </div>
      </div>
      <ul className='menu'>
        <li className='menu-item'>
          <GoHome />
          <Link to='/'>Home</Link>
        </li>
        <li className='menu-item'>
          <AiFillFund />
          <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
        </li>
        <li className='menu-item'>
          <AiOutlineMoneyCollect />
          <Link to='/exchanges'>Exchanges</Link>
        </li>
        <li className='menu-item'>
          <AiOutlineBulb />
          <Link to='/news'>News</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
