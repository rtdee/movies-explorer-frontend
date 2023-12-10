import './Movies.css';

import React from 'react';

import Card from '../Card/Card';
import Preloader from '../Preloader/Preloader';

function Movies(props) {
  const [isShorfilmChecked, setIsShortfilmChecked] = React.useState(false);
  const [isMoreActive, setIsMoreActive] = React.useState(false);
  const [nothingFoundSaved, setNothingFoundSaved] = React.useState(false);
  const [nothingFound, setNothingFound] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(JSON.parse(localStorage.getItem('search')));
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [moviesCards, setMoviesCards] = React.useState([]);
  const [savedMoviesCards, setSavedMoviesCards] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (props.savedMovies !== undefined) {
      setSavedMovies(props.savedMovies);
    }
  }, [handleDeleteMovie, props.savedMovies]);

  React.useEffect(() => {
    if (!localStorage.getItem('movies')) {
      localStorage.setItem('movies', JSON.stringify([]));
    }

    if (!localStorage.getItem('search')) {
      localStorage.setItem('search', JSON.stringify(inputValue, isShorfilmChecked));
    }

    if (!localStorage.getItem('results')) {
      localStorage.setItem('results', JSON.stringify([]));
    }

    let res = JSON.parse(localStorage.getItem('results'));
    setMoviesCards(res.map((card) => {
      return (
        <Card card={card} isSaved={false} saveMovie={handleSaveMovie}/>
      )
    }));
  }, [])

  function handleSwitchClick() {
    setIsShortfilmChecked(!isShorfilmChecked);
  }

  React.useEffect(() => {
    if (isShorfilmChecked && !props.isSaved) {
      const moviesList = JSON.parse(localStorage.getItem('movies'));
      const filtered = moviesList.filter(item => item.duration <= 40);
      localStorage.setItem('results', JSON.stringify(filtered))
      let res = JSON.parse(localStorage.getItem('results'));
      setMoviesCards(res.map((card) => {
        return (
          <Card card={card} isSaved={false} saveMovie={handleSaveMovie}/>
        )
      }));
    }

    if (!isShorfilmChecked && !props.isSaved) {
      const moviesList = JSON.parse(localStorage.getItem('movies'));
      setMoviesCards(moviesList.map((card) => {
        return (
          <Card card={card} isSaved={false} saveMovie={handleSaveMovie}/>
        )
      }));
    }

    if (isShorfilmChecked && props.isSaved) {
      const savedMoviesList = savedMovies;
      const filtered = savedMoviesList.filter(item => item.duration <= 40);
      setSavedMovies(filtered);
    }
  }, [props.isSaved, isShorfilmChecked, savedMovies])

  function handleMoreClick() {
    let res = JSON.parse(localStorage.getItem('results'));
    if (window.innerWidth > 768) {
      setIsMoreActive(true);
      let newres = res.slice(moviesCards.length, 12)
      setMoviesCards(newres.map((card) => {
        return (
          <Card card={card} isSaved={true} deleteMovie={handleDeleteMovie}/>
         )
      }));
    } else if (window.innerWidth <= 768) {
      setIsMoreActive(true);
      let newres = res.slice(moviesCards.length, 8)
      setMoviesCards((moviesCards.push(...newres)).map((card) => {
        return (
          <Card card={card} isSaved={true} deleteMovie={handleDeleteMovie}/>
         )
      }));
    } else if (window.innerWidth <= 320) {
      setIsMoreActive(true);
      let newres = res.slice(moviesCards.length, 2)
      setMoviesCards((moviesCards.push(...newres)).map((card) => {
        return (
          <Card card={card} isSaved={true} deleteMovie={handleDeleteMovie}/>
         )
      }));
    }
  }

  function handleInputChange(evt) {
    setInputValue(evt.target.value);
  }

  React.useEffect(() => {
    setSavedMoviesCards(savedMovies.map((card) => {
      return (
        <Card card={card} isSaved={true} deleteMovie={handleDeleteMovie}/>
       )
    }));
  }, [handleDeleteMovie, savedMovies])

  React.useEffect(() => {
    if (savedMoviesCards.length < 1) {
      setNothingFoundSaved(true);
    } else {
      setNothingFoundSaved(false);
    }

    if (moviesCards.length < 1) {
      setNothingFound(true);
    } else {
      setNothingFound(false);
    }
  }, [moviesCards.length, savedMoviesCards.length]);

  
  function handleSaveMovie(movie) {
    props.saveMovie(movie);
    movie.saved(true);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleDeleteMovie(movie) {
    props.deleteMovie(movie)
    let filtered = savedMoviesCards.filter(e => e._id !== movie._id)
    setSavedMoviesCards(filtered.map((card) => {
      return (
        <Card card={card} isSaved={true} deleteMovie={handleDeleteMovie}/>
       )
    }));
  }

  function handleSubmit(evt) {
    setIsLoading(true);
    props.getMovies();
    evt.preventDefault();
    const moviesList = JSON.parse(localStorage.getItem('movies'));
    const filtered = moviesList.filter(item => item.nameRU.toLowerCase().includes(inputValue.toLowerCase()));
    localStorage.setItem('search', JSON.stringify(inputValue));
    setMoviesCards(filtered.map((card) => {
      return (
        <Card card={card} isSaved={false} saveMovie={handleSaveMovie}/>
      )
    }));
    localStorage.setItem('results', JSON.stringify(filtered));
    setIsLoading(false);
  }

  function handleSubmitSaved(evt) {
    evt.preventDefault();
    const savedMoviesList = savedMovies;
    const filtered = savedMoviesList.filter(item => item.nameRU.toLowerCase().includes(inputValue.toLowerCase()));
    setSavedMoviesCards(filtered.map((card) => {
      return (
        <Card card={card} isSaved={true} deleteMovie={handleDeleteMovie}/>
       )
    }));
  }

  React.useEffect(() => {
    let res = JSON.parse(localStorage.getItem('results'));
    if (!isMoreActive) {
      if (window.innerWidth > 768 && res.length > 12) {
        setIsMoreActive(true);
        let sliced = res.slice(0, 12)
        setMoviesCards(sliced.map((card) => {
          return (
            <Card card={card} isSaved={true} deleteMovie={handleDeleteMovie}/>
           )
        }));
      } else if (window.innerWidth <= 768 && res.length > 8) {
        setIsMoreActive(true);
        let sliced = res.slice(0, 8)
        setMoviesCards(sliced.map((card) => {
          console.log(card)
          return (
            <Card card={card} isSaved={true} deleteMovie={handleDeleteMovie}/>
           )
        }));
      } else if (window.innerWidth <= 320 && res.length > 5) {
        setIsMoreActive(true);
        let sliced = res.slice(0, 5)
        setMoviesCards(sliced.map((card) => {
          return (
            <Card card={card} isSaved={true} deleteMovie={handleDeleteMovie}/>
           )
        }));
      }
    }
  }, [])

  return (
    <section className='movies'>
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
      {isLoading ? <Preloader /> : <></>}
      {props.isSaved && nothingFoundSaved && <p className='nothing-found'>Ничего не найдено</p>}
      {!props.isSaved && nothingFound && <p className='nothing-found'>Ничего не найдено</p>}
      <div className='movies__container'>
        {!props.isSaved ? <>{moviesCards}</> : <>{savedMoviesCards}</>}
      </div>
      <button className='movies__button' onClick={handleMoreClick}>Ещё</button>
    </section>
  )
}

export default Movies;