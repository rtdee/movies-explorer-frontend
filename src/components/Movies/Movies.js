import './Movies.css';

import React from 'react';

import Card from '../Card/Card';

function Movies(props) {
  const [isShorfilmChecked, setIsShortfilmChecked] = React.useState(false);
  const [isMoreActive, setIsMoreActive] = React.useState(false);

  function handleSwitchClick() {
    setIsShortfilmChecked(!isShorfilmChecked);
  }

  function handleMoreClick() {
    setIsMoreActive(true);
  }

  return (
    <section className={`movies ${!isMoreActive ? 'hidden' : ''}`}>
      <search className='movies__search' role='search'>
        <form className='form'>
          <div className='form__wrapper'>
            <input className='form__input' type='text' placeholder='Фильм'></input>
            <button className='form__button'>Найти</button>
          </div>
          <div className='form__divider'></div>
          <div className='form__wrapper'>
            <input className='form__switch' type='checkbox' id='shortfilm' defaultChecked={isShorfilmChecked && true}></input>
            <div className={`switch-base ${isShorfilmChecked && 'switch-base_active'}`} onClick={handleSwitchClick}>
              <div className={`switch-inner ${isShorfilmChecked && 'switch-inner_active'}`}></div>
            </div>
            <label className='form__switch-label' htmlFor='shortfilm'>Короткометражки</label>
          </div>
        </form>
      </search>
      <div className='movies__divider'></div>
      <div className='movies__container'>
        {!props.isSaved ?
          <>
            <Card isSaved={false}/><Card isSaved={false}/><Card isSaved={false}/>
            <Card isSaved={false}/><Card isSaved={false}/><Card isSaved={false}/>
            <Card isSaved={false}/><Card isSaved={false}/><Card isSaved={false}/>
            <Card isSaved={false}/><Card isSaved={false}/><Card isSaved={false}/>
          </> :
          <>
            <Card isSaved={true} /><Card isSaved={true} /><Card isSaved={true} />
          </>}
      </div>
      {!props.isSaved && !isMoreActive && <button className='movies__button' onClick={handleMoreClick}>Ещё</button>}
    </section>
  )
}

export default Movies;