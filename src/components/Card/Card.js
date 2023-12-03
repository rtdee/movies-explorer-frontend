import './Card.css';

import React from 'react';

function Card(props) {
  const [isFilmSaved, setIsFilmSaved] = React.useState(false);

  const filmURL = 'https://api.nomoreparties.co';

  function handleSaveFilmClick() {
    setIsFilmSaved(!isFilmSaved);
    props.saveMovie(props.card);
  }

  function handleDeleteFilmClick() {
    setIsFilmSaved(false);
    props.deleteMovie(props.card);
  }

  return (
    <article className='card'>
      <div className='card__img-container'>
        <img className='card__img' alt='img' src={!props.isSaved ? `${filmURL}${props.card.image.url}` : props.card.image}></img>
        {props.isSaved ? <button className='saved-card__delete-btn' onClick={handleDeleteFilmClick}></button> :
        <button className={`card__save-btn ${isFilmSaved && 'card__save-btn_active'}`} onClick={!isFilmSaved ? handleSaveFilmClick : handleDeleteFilmClick}>{!isFilmSaved && 'Сохранить'}</button>}
      </div>
      <div className='card__text-container'>
        <h2 className='card__title'>{props.card.nameRU}</h2>
        <p className='card__duration'>{`${Math.floor(props.card.duration / 60)}ч ${props.card.duration % 60}м`}</p>
      </div>
    </article>
  )
}

export default Card;