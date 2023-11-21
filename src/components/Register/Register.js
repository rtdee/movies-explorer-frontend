import { Link } from 'react-router-dom';
import './Register.css'
import React from 'react';
import Logo from '../Logo/Logo';

function Register(props) {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [usernameErrorVisible, setUsernameErrorVisible] = React.useState(false);
  const [emailErrorVisible, setEmailErrorVisible] = React.useState(false);
  const [passwordErrorVisible, setPasswordErrorVisible] = React.useState(false);
  const [formErrorVisible, setFormErrorVisible] = React.useState(false);

  function handleUsernameInput(evt) {
    setUsername(evt.target.value);
    if (!evt.target.validity.valid) {
      setUsernameErrorVisible(true);
    } else {
      setUsernameErrorVisible(false);
    }
  }

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

  React.useEffect(() => {
    if (usernameErrorVisible || emailErrorVisible || passwordErrorVisible) {
      setFormErrorVisible(true);
    } else {
      setFormErrorVisible(false);
    }
  }, [usernameErrorVisible, emailErrorVisible, passwordErrorVisible])

  function handleSubmit(evt) {
    evt.preventDefault();
    if (formErrorVisible) {
      return;
    }
    // props.onSubmit({email, password});
  }
  return (
    <main>
    <div className='register'>
      <div className='register__container'>
        <Logo />
        <h1 className='register__header'>Добро пожаловать!</h1>
        <form className='register-form' name='registerform' noValidate onSubmit={handleSubmit}>
          <label className='register-form__label' htmlFor='username-input'>Имя</label>
          <input
            className={`register-form__input register-form__input_type_username ${usernameErrorVisible && 'register-form__input_error'}`}
            type='text'
            id='username-input'
            name='username'
            required
            minLength='2'
            maxLength='30'
            value={username}
            placeholder='Имя'
            onChange={handleUsernameInput}
          />
          <label className='register-form__label' htmlFor='email-input'>E-mail</label>
          <input
            className={`register-form__input register-form__input_type_email ${emailErrorVisible && 'register-form__input_error'}`}
            type='email'
            id='email-input'
            name='email'
            required
            minLength='2'
            maxLength='30'
            value={email}
            placeholder='E-mail'
            onChange={handleEmailInput}
          />
          <label className='register-form__label' htmlFor='password-input'>Пароль</label>
          <input
            className={`register-form__input register-form__input_type_password ${passwordErrorVisible && 'register-form__input_error'}`}
            type='password'
            id='password-input'
            name='password'
            required
            minLength='2'
            maxLength='30'
            value={password}
            placeholder='Пароль'
            onChange={handlePasswordInput}
          />
          <span className={`register-form__error ${formErrorVisible && 'register-form__error_visible'}`}>Что-то пошло не так...</span>
          <button className='register-form__submit-button' type='submit'>Зарегистрироваться</button>
        </form>
        <p className='register__text'>Уже зарегистрированы? <Link className='register__link' to='/login'>Войти</Link></p>
      </div>
    </div>
    </main>
  )
}

export default Register;