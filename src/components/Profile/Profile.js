import './Profile.css';

import React from 'react';
import { Link } from 'react-router-dom';

function Profile(props) {
  const [username, setUsername] = React.useState('Виталий');
  const [email, setEmail] = React.useState('pochta@yandex.ru');

  function handleUsernameInput(evt) {
    setUsername(evt.target.value);
  }

  function handleEmailInput(evt) {
    setEmail(evt.target.value);
  }

  const [isInputDisabled, setIsInputDisabled] = React.useState(true);

  function enableInput() {
    setIsInputDisabled(false);
  }

  function handleClickSave(evt) {
    evt.preventDefault();
    setIsInputDisabled(true);
  }

  return (
    <main>
    <div className='profile'>
      <h1 className='profile__title'>Привет, Виталий!</h1>
      <form className='profile-form'>
        <div className='profile-form__input-container'>
          <label className='profile-form__label' htmlFor='username-input'>Имя</label>
          <input
            className='profile-form__input profile-form__input_type_username'
            type='text'
            id='username-input'
            name='username'
            required
            minLength='2'
            maxLength='30'
            value={username}
            onChange={handleUsernameInput}
            disabled={isInputDisabled}
            placeholder='Ваше имя'
          />
        </div>
        <div className='profile-form__divider'></div>
        <div className='profile-form__input-container'>
          <label className='profile-form__label' htmlFor='email-input'>E-mail</label>
          <input
            className='profile-form__input profile-form__input_type_email'
            type='email'
            id='email-input'
            name='email'
            required
            minLength='2'
            maxLength='30'
            value={email}
            onChange={handleEmailInput}
            disabled={isInputDisabled}
            placeholder='Ваш E-mail'
          />
        </div>
        <div className='profile-form__links'>
          {!isInputDisabled ? <button className='profile-form__button' onClick={handleClickSave}>Сохранить</button> :
            <>
            <div className='profile-form__link profile-form__edit-link' onClick={enableInput}>Редактировать</div>
            <Link className='profile-form__link profile-form__logout-link' to='/' onClick={props.onLogout}>Выйти из аккаунта</Link>
            </>
          }
        </div>
      </form>
    </div>
    </main>
  )
}

export default Profile;