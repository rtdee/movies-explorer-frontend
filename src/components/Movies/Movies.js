import './Movies.css';

import React from 'react';

import Card from '../Card/Card';

function Movies(props) {
  const [isShorfilmChecked, setIsShortfilmChecked] = React.useState(false);
  const [isMoreActive, setIsMoreActive] = React.useState(false);
  const [nothingFoundSaved, setNothingFoundSaved] = React.useState(false);
  const [nothingFound, setNothingFound] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(JSON.parse(localStorage.getItem('search')));
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [moviesCards, setMoviesCards] = React.useState([]);
  const movies = JSON.parse(localStorage.getItem('movies'));

  React.useEffect(() => {
    if (props.savedMovies !== undefined) {
      setSavedMovies(props.savedMovies);
    }
  }, []);

  React.useEffect(() => {
    if (!localStorage.getItem('movies')) {
      localStorage.setItem('movies', JSON.stringify([]));
    }

    if (!localStorage.getItem('search')) {
      localStorage.setItem('search', JSON.stringify(inputValue));
    }
  }, [])

  function handleSwitchClick() {
    setIsShortfilmChecked(!isShorfilmChecked);
  }

  React.useEffect(() => {
    if (isShorfilmChecked && !props.isSaved) {
      const moviesList = JSON.parse(localStorage.getItem('movies'));
      const filtered = moviesList.filter(item => item.duration < 60);
      localStorage.setItem('movies', JSON.stringify(filtered));
    }

    if (isShorfilmChecked && props.isSaved) {
      const savedMoviesList = savedMovies;
      const filtered = savedMoviesList.filter(item => item.duration < 60);
      setSavedMovies(filtered);
    }
  }, [props.isSaved, isShorfilmChecked, savedMovies])

  function handleMoreClick() {
    setIsMoreActive(true);
  }

  function handleInputChange(evt) {
    setInputValue(evt.target.value);
  }

  const savedMoviesCards = savedMovies.map((card) => {
    return (
      <Card card={card} isSaved={true} deleteMovie={handleDeleteMovie}/>
     )
  });

  React.useEffect(() => {
    if (savedMovies.length < 1) {
      setNothingFoundSaved(true);
    } else {
      setNothingFoundSaved(false);
    }

    if (movies.length < 1) {
      setNothingFound(true);
    } else {
      setNothingFound(false);
    }
  }, [movies.length, savedMovies.length]);

  
  function handleSaveMovie(movie) {
    props.saveMovie(movie);
  }

  function handleDeleteMovie(movie) {
    const filtered = savedMoviesCards.filter(item => item.props.card._id === movie.id);
    setSavedMovies(filtered);
    console.log(savedMovies)
    console.log(savedMoviesCards)
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const moviesList = JSON.parse(localStorage.getItem('movies'));
    const filtered = moviesList.filter(item => item.nameRU.toLowerCase().includes(inputValue.toLowerCase()));
    localStorage.setItem('search', JSON.stringify(inputValue));
    setMoviesCards(filtered.map((card) => {
      return (
        <Card card={card} isSaved={false} saveMovie={handleSaveMovie}/>
      )
    })); 
  }

  function handleSubmitSaved(evt) {
    evt.preventDefault();
    const savedMoviesList = JSON.parse(localStorage.getItem('savedMovies'));
    const filtered = savedMoviesList.filter(item => item.nameRU.toLowerCase().includes(inputValue.toLowerCase()));
    localStorage.setItem('savedMovies', JSON.stringify(filtered));
    localStorage.setItem('search', JSON.stringify(inputValue));
  }

  return (
    <section className={`movies ${!isMoreActive ? 'hidden' : ''}`}>
      <search className='movies__search' role='search'>
        <form className='form' onSubmit={!props.isSaved ? handleSubmit : handleSubmitSaved}>
          <div className='form__wrapper'>
            <input className='form__input' type='text' placeholder='Фильм' value={inputValue} onChange={handleInputChange}></input>
            <button className='form__button'>Найти</button>
          </div>
          <div className='form__divider'></div>
          <div className='form__wrapper'>
            <input className='form__switch' type='checkbox' id='shortfilm' defaultChecked={isShorfilmChecked && true}></input>
            <div className={`switch-base ${isShorfilmChecked && 'switch-base_active'}`} onClick={handleSwitchClick}>
              <div className={`switch-inner ${isShorfilmChecked && 'switch-inner_active'}`}></div>
            </div>
            <label className='form__switch-label' htmlFor='shortfilm' onClick={handleSwitchClick}>Короткометражки</label>
          </div>
        </form>
      </search>
      <div className='movies__divider'></div>
      {props.isSaved && nothingFoundSaved && <p className='nothing-found'>Ничего не найдено</p>}
      {!props.isSaved && nothingFound && <p className='nothing-found'>Ничего не найдено</p>}
      <div className='movies__container'>
        {!props.isSaved ? <>{moviesCards}</> : <>{savedMoviesCards}</>}
      </div>
      {!props.isSaved && !isMoreActive && <button className={!isMoreActive ? 'movies__button' : 'hidden'} onClick={handleMoreClick}>Ещё</button>}
    </section>
  )
}

export default Movies;