import './Card.css';

import React from 'react';
import { Link } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function Card(props) {
  const [isFilmSaved, setIsFilmSaved] = React.useState(false);
  const currentUser = CurrentUserContext;

  const filmURL = 'https://api.nomoreparties.co';

  function handleSaveFilmClick() {
    if (!isFilmSaved) {
      setIsFilmSaved(!isFilmSaved);
      props.saveMovie(props.card);
    }
  }

  function handleDeleteFilmClick() {
    setIsFilmSaved(false);
    props.deleteMovie(props.card);
  }

  React.useEffect(() => {
    if (props.card.saved === true) {
      setIsFilmSaved(true);
    }
  }, []);

  return (
    <article className='card'>
      <div className='card__img-container'>
        {props.isSaved ? <button className='saved-card__delete-btn' onClick={handleDeleteFilmClick}></button> :
        <button className={`card__save-btn ${isFilmSaved ? 'card__save-btn_active' : ''}`} onClick={!isFilmSaved ? handleSaveFilmClick : handleDeleteFilmClick}>{!isFilmSaved && 'Сохранить'}</button>}
        <Link className='card__trailerlink' to={props.card.trailerLink}/>
        <img className='card__img' alt='img' src={`${filmURL}${props.card.image.url}`}></img>
      </div>
      <div className='card__text-container'>
        <h2 className='card__title'>{props.card.nameRU}</h2>
        <p className='card__duration'>{`${Math.floor(props.card.duration / 60)}ч ${props.card.duration % 60}м`}</p>
      </div>
    </article>
  )
}

export default Card;