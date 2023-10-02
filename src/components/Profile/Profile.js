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

  return (
    <div className='profile'>
      <h1 className='profile__title'>Привет, Виталий!</h1>
      <form className='profile-form'>
        <div className='profile-form__input-container'>
          <label className='profile-form__label' for='username-input'>Имя</label>
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
          />
        </div>
        <div className='profile-form__divider'></div>
        <div className='profile-form__input-container'>
          <label className='profile-form__label' for='email-input'>E-mail</label>
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
          />
        </div>
        <ul className='profile-form__links'>
          <li className='profile-form__links-item'><Link className='profile-form__link profile-form__edit-link' to='#' onClick={props.onEditProfile}>Редактировать</Link></li>
          <li className='profile-form__links-item'><Link className='profile-form__link profile-form__logout-link' to='#' onClick={props.onLogout}>Выйти из аккаунта</Link></li>
        </ul>
      </form>
    </div>
  )
}

export default Profile;