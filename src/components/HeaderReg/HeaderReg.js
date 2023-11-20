import './HeaderReg.css';
import React from 'react';
import { Link } from 'react-router-dom';

function HeaderReg() {

  return (
    <nav className='header-reg'>
      <Link className='header-reg__link header-reg__link_type_signup' to='/signup'>Регистрация</Link>
      <Link className='header-reg__link header-reg__link_type_login' to='/login'>Войти</Link>
    </nav>
  )
}

export default HeaderReg;