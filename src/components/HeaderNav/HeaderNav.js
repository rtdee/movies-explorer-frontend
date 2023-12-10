import './HeaderNav.css';

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function HeaderNav(props) {
  const location = useLocation();
  
  return (
    <nav className='header-nav'>
      <div className='header-nav__list'>
        <Link className={`header-nav__link ${location.pathname === '/movies' && 'header-nav__link_active'}`} to='/movies'>Фильмы</Link>
        <Link className={`header-nav__link ${location.pathname === '/saved-movies' && 'header-nav__link_active'}`} to='/saved-movies'>Сохранённые фильмы</Link>
        <button className='profile-btn' type='button' onClick={props.onClickProfile}>
          <span className='profile-btn__text'>Аккаунт</span>
          <span className={`profile-btn__icon ${location.pathname === '/' ? 'profile-btn__icon_location_land' : 'profile-btn__icon_location_main'}`}></span>
        </button>
      </div>
    </nav>
  )
}

export default HeaderNav;