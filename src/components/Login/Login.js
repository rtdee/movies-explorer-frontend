import { Link } from 'react-router-dom';
import './Login.css'
import React from 'react';
import logo from '../../images/logo.svg';

function Login(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

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
    <div className='login'>
      <div className='login__container'>
        <img className='login__logo' src={logo} alt='лого' />
        <h1 className='login__header'>Рады видеть!</h1>
        <form className='login-form' name='loginform' noValidate onSubmit={handleSubmit}>
          <label className='login-form__label' for='email-input'>E-mail</label>
          <input
            className='login-form__input login-form__input_type_email'
            type='email'
            id='email-input'
            name='email'
            required
            minLength='2'
            maxLength='30'
            value={email}
            onChange={handleEmailInput}
          />
          <label className='login-form__label' for='password-input'>Пароль</label>
          <input
            className='login-form__input login-form__input_type_password'
            type='password'
            id='password-input'
            name='password'
            required
            minLength='2'
            maxLength='30'
            value={password}
            onChange={handlePasswordInput}
          />
          <button className='login-form__submit-button' type='submit'>Войти</button>
        </form>
        <p className='login__text'>Ещё не зарегистрированы? <Link className='login__link' to='/signup'>Регистрация</Link></p>
      </div>
    </div>
  )
}

export default Login;