import './Movies.css';

import React from 'react';

import searchicon from '../../images/searchicon.svg';

import Card from '../Card/Card';

function Movies() {
  const [isShorfilmChecked, setIsShortfilmChecked] = React.useState(false);

  function handleSwitchClick() {
    setIsShortfilmChecked(!isShorfilmChecked);
  }

  return (
    <section className='movies'>
      <search className='movies__search' role='search'>
        <form className='form'>
          <div className='form__wrapper'>
          <img className='form__icon' src={searchicon} alt='поиск'></img>
          <input className='form__input' type='text' placeholder='Фильм'></input>
          <button className='form__button'>Найти</button>
          </div>
          <div className='form__divider'></div>
          <div className='form__wrapper'>
          <input className='form__switch' type='checkbox' id='shortfilm' checked={isShorfilmChecked && true}></input>
          <div className={`switch-base ${isShorfilmChecked && 'switch-base_active'}`} onClick={handleSwitchClick}>
            <div className={`switch-inner ${isShorfilmChecked && 'switch-inner_active'}`}></div>
          </div>
          <label className='form__switch-label' for='shortfilm'>Короткометражки</label>
          </div>
        </form>
      </search>
      <div className='movies__divider'></div>
      <div className='movies__container'>
        <Card /><Card /><Card /><Card /><Card /><Card />
        <Card /><Card /><Card /><Card /><Card /><Card />
      </div>
      <button className='movies__button'>Ещё</button>
    </section>
  )
}

export default Movies;