import './Card.css';

import React from 'react';

import filmpic from '../../images/filmpic.jpg';

function Card(props) {
  const [isFilmSaved, setIsFilmSaved] = React.useState(false);
  
  function handleSaveFilmClick() {
    setIsFilmSaved(!false);
  }

  return (
    <article className='card'>
      <div className='card__img-container'>
        <img className='card__img' alt='img' src={filmpic}></img>
        {props.isSaved ? <button className='saved-card__delete-btn'></button> :
        <button className={`card__save-btn ${isFilmSaved && 'card__save-btn_active'}`} onClick={handleSaveFilmClick}>{!isFilmSaved && 'Сохранить'}</button>}
      </div>
      <div className='card__text-container'>
        <h2 className='card__title'>33 слова о дизайне</h2>
        <p className='card__duration'>1ч 17м</p>
      </div>
    </article>
  )
}

export default Card;