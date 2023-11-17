import './Footer.css'

import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <h1 className='footer__text'>Учебный проект Яндекс.Практикум x BeatFilm.</h1>
      <div className='footer__divider'></div>
      <div className='footer__container'>
        <p className='footer__container-item footer__year'>&copy; {currentYear}</p>
        <div className='footer__container-links'>
          <Link className='footer__container-item footer__link' to='https://practicum.yandex.ru/' target='_blank' rel='noopener noreferrer'>Яндекс.Практикум</Link>
          <Link className='footer__container-item footer__link' to='https://github.com/Yandex-Practicum' target='_blank' rel='noopener noreferrer'>Github</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;