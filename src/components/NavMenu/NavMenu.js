import './NavMenu.css';

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavMenu(props) {
  const location = useLocation();

  return (
    <nav className={`nav-menu ${props.isOpened ? 'nav-menu__opened' : ''}`}>
      <div className='nav-menu__container'>
        <button className='nav-menu__close-btn' aria-label='закрыть' type='button' onClick={props.onClose}></button>
        <ul className='nav-menu__links'>
          <li className={`nav-menu__links-item ${location.pathname === '/' && 'nav-menu__link_active'}`}><Link className='nav-menu__link' to='/' onClick={props.onClose}>Главная</Link></li>
          <li className={`nav-menu__links-item ${location.pathname === '/movies' && 'nav-menu__link_active'}`}><Link className='nav-menu__link' to='/movies' onClick={props.onClose}>Фильмы</Link></li>
          <li className={`nav-menu__links-item ${location.pathname === '/saved-movies' && 'nav-menu__link_active'}`}><Link className='nav-menu__link' to='/saved-movies' onClick={props.onClose}>Сохранённые фильмы</Link></li>
        </ul>
        <button className='profile-btn profile-btn_location_navmenu' type='button' onClick={props.onClickProfile}>
          <span className='profile-btn__text'>Аккаунт</span>
          <span className={`profile-btn__icon ${location.pathname === '/' ? 'profile-btn__icon_location_land' : 'profile-btn__icon__location_main'}`}></span>
        </button>
      </div>
    </nav>
  )
}

export default NavMenu;