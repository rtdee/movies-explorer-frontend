import './Promo.css';

import React from 'react';

import promologo from '../../images/promologo.svg';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <img className='promo__logo' src={promologo} alt='лого'></img>
        <h1 className='promo__header'>Учебный проект студента факультета Веб-разработки.</h1>
      </div>
    </section>
  )
}

export default Promo;