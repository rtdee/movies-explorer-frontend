import './HeaderReg.css';
import React from 'react';
import { Link } from 'react-router-dom';

function HeaderReg(props) {

  return (
    <nav className='header-reg'>
      <Link className='header-reg__link' to='/signup'>Регистрация</Link>
      <button className='header-reg__login-btn' type='button' onClick={props.onClickLogin}>Войти</button>
    </nav>
  )
}

export default HeaderReg;