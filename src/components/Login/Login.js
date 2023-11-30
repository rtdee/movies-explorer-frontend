import { Link } from 'react-router-dom';
import './Login.css'
import React from 'react';
import Logo from '../Logo/Logo';

function Login(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [emailErrorVisible, setEmailErrorVisible] = React.useState(false);
  const [passwordErrorVisible, setPasswordErrorVisible] = React.useState(false);
  const [formErrorVisible, setFormErrorVisible] = React.useState(false);
  const [isBtnDisabled, setIsBtnDisabled] = React.useState(false);

  function handleEmailInput(evt) {
    setEmail(evt.target.value);
    if (!evt.target.validity.valid) {
      setEmailErrorVisible(true);
    } else {
      setEmailErrorVisible(false);
    }
  }

  function handlePasswordInput(evt) {
    setPassword(evt.target.value);
    if (!evt.target.validity.valid) {
      setPasswordErrorVisible(true);
    } else {
      setPasswordErrorVisible(false);
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (formErrorVisible) {
      return;
    }
    props.onSubmit({email, password});
  }

  React.useEffect(() => {
    if (emailErrorVisible || passwordErrorVisible) {
      setFormErrorVisible(true);
      setIsBtnDisabled(true);
    } else {
      setFormErrorVisible(false);
      setIsBtnDisabled(false);
    }
  }, [emailErrorVisible, passwordErrorVisible])

  React.useEffect(() => {
    setIsBtnDisabled(true);
  }, [])
  
  return (
    <main>
    <div className='login'>
      <div className='login__container'>
        <Logo />
        <h1 className='login__header'>Рады видеть!</h1>
        <form className='login-form' name='loginform' noValidate onSubmit={handleSubmit}>
          <label className='login-form__label' htmlFor='email-input'>E-mail</label>
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
            placeholder='E-mail'
          />
          <label className='login-form__label' htmlFor='password-input'>Пароль</label>
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
            placeholder='Пароль'
          />
          <span className={`login-form__error ${formErrorVisible && 'login-form__error_visible'}`}>Что-то пошло не так...</span>
          <button className='login-form__submit-button' type='submit' disabled={isBtnDisabled}>Войти</button>
        </form>
        <p className='login__text'>Ещё не зарегистрированы? <Link className='login__link' to='/signup'>Регистрация</Link></p>
      </div>
    </div>
    </main>
  )
}

export default Login;