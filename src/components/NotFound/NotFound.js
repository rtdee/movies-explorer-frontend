import './NotFound.css'

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  return(
    <main>
    <div className='not-found'>
      <h1 className='not-found__header'>404</h1>
      <h2 className='not-found__text'>Страница не найдена</h2>
      <Link className='not-found__link' to={navigate(-1)}>Назад</Link>
    </div>
    </main>
  )
}

export default NotFound;