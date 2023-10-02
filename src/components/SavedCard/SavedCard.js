import './SavedCard.css';

import React from 'react';

import filmpic from '../../images/filmpic.jpg';

function SavedCard() {

  return (
    <div className='saved-card'>
      <div className='saved-card__img-container'>
        <img className='saved-card__img' alt='img' src={filmpic}></img>
        <button className='saved-card__delete-btn'></button>
      </div>
      <div className='saved-card__text-container'>
        <p className='saved-card__title'>33 слова о дизайне</p>
        <p className='saved-card__duration'>1ч 17м</p>
      </div>
    </div>
  )
}

export default SavedCard;