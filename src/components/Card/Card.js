import './Card.css';

import React from 'react';

import filmpic from '../../images/filmpic.jpg';

function Card() {
  const [isFilmSaved, setIsFilmSaved] = React.useState(false);
  
  function handleSaveFilmClick() {
    setIsFilmSaved(!false);
  }

  return (
    <div className='card'>
      <div className='card__img-container'>
        <img className='card__img' alt='img' src={filmpic}></img>
        <button className={`card__save-btn ${isFilmSaved && 'card__save-btn_active'}`} onClick={handleSaveFilmClick}>{!isFilmSaved && 'Сохранить'}</button>
      </div>
      <div className='card__text-container'>
        <p className='card__title'>33 слова о дизайне</p>
        <p className='card__duration'>1ч 17м</p>
      </div>
    </div>
  )
}

export default Card;