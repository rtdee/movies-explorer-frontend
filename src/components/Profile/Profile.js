import './Profile.css';

import React from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [greetingName, setGreetingName] = React.useState('');
  const [isInputDisabled, setIsInputDisabled] = React.useState(true);
  const [isSaveDisabled, setIsSaveDisabled] = React.useState(false);
  const [isUsernameValid, setIsUsernameValid] = React.useState(true);
  const [isEmailValid, setIsEmailValid] = React.useState(true);

  React.useEffect(() => {
    setGreetingName(currentUser.username);
  }, []);

  React.useEffect(() => {
    setUsername(currentUser.username);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleUsernameInput(evt) {
    setUsername(evt.target.value);
    if (!evt.target.validity.valid) {
      setIsUsernameValid(false);
    } else {
      setIsUsernameValid(true);
    }
  }

  function handleEmailInput(evt) {
    setEmail(evt.target.value);
    if (!evt.target.validity.valid) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }
  }

  React.useEffect(() => {
    if (!isUsernameValid || !isEmailValid) {
      setIsSaveDisabled(true)
    } else {
      setIsSaveDisabled(false)
    }
  }, [isEmailValid, isUsernameValid]);

  function enableInput() {
    setIsInputDisabled(false);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsInputDisabled(true);
    props.onEditProfile({username, email});
  }

  return (
    <main>
    <div className='profile'>
      <h1 className='profile__title'>{`Привет, ${greetingName}!`}</h1>
      <form className='profile-form' onSubmit={handleSubmit}>
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
          {!isInputDisabled ? <button className='profile-form__button' disabled={isSaveDisabled}>Сохранить</button> :
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