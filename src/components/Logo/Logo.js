import './Logo.css';

import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

function Logo() {
  return (
    <Link to='/'><img className='logo' src={logo} alt='лого' /></Link>
  )
}

export default Logo;