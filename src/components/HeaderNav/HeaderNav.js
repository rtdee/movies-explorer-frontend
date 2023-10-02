import './HeaderNav.css';

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function HeaderNav(props) {
  const location = useLocation();
  
  return (
    <nav className='header-nav'>
      <ul className='header-nav__list'>
        <li><Link className='header-nav__link' to='/movies'>Фильмы</Link></li>
        <li><Link className='header-nav__link' to='/saved-movies'>Сохранённые фильмы</Link></li>
        <button className='profile-btn' type='button' onClick={props.onClickProfile}>
          <span className='profile-btn__text'>Аккаунт</span>
          <span className={`profile-btn__icon ${location.pathname === '/' ? 'profile-btn__icon_location_land' : 'profile-btn__icon__location_main'}`}></span>
        </button>
      </ul>
    </nav>
  )
}

export default HeaderNav;