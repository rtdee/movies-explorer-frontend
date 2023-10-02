import { Link } from 'react-router-dom';
import './Register.css'
import React from 'react';
import logo from '../../images/logo.svg';

function Register(props) {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleUsernameInput(evt) {
    setUsername(evt.target.value);
  }

  function handleEmailInput(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordInput(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onSubmit({email, password});
  }
  return (
    <div className='register'>
      <div className='register__container'>
        <img className='register__logo' src={logo} alt='лого' />
        <h1 className='register__header'>Добро пожаловать!</h1>
        <form className='register-form' name='registerform' noValidate onSubmit={handleSubmit}>
          <label className='register-form__label' for='username-input'>Имя</label>
          <input
            className='register-form__input register-form__input_type_username'
            type='text'
            id='username-input'
            name='username'
            required
            minLength='2'
            maxLength='30'
            value={username}
            onChange={handleUsernameInput}
          />
          <span className='register-form__error'>Что-то пошло не так...</span>
          <label className='register-form__label' for='email-input'>E-mail</label>
          <input
            className='register-form__input register-form__input_type_email'
            type='email'
            id='email-input'
            name='email'
            required
            minLength='2'
            maxLength='30'
            value={email}
            onChange={handleEmailInput}
          />
          <span className='register-form__error'>Что-то пошло не так...</span>
          <label className='register-form__label' for='password-input'>Пароль</label>
          <input
            className='register-form__input register-form__input_type_password'
            type='password'
            id='password-input'
            name='password'
            required
            minLength='2'
            maxLength='30'
            value={password}
            onChange={handlePasswordInput}
          />
          <span className='register-form__error'>Что-то пошло не так...</span>
          <button className='register-form__submit-button' type='submit'>Зарегистрироваться</button>
        </form>
        <p className='register__text'>Уже зарегистрированы? <Link className='register__link' to='/login'>Войти</Link></p>
      </div>
    </div>
  )
}

export default Register;