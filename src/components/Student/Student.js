import './Student.css';

import React from 'react';
import { Link } from 'react-router-dom';

import studentimg from '../../images/studentimg.png';

function Student() {
  return (
    <section className='student' id='student'>
      <h2 className='student__header'>Студент</h2>
      <div className='student__divider'></div>
      <div className='wrapper'>
        <div className='student__text-container'>
          <strong className='student__name'>Виталий</strong>
          <em className='student__career'>Фронтенд-разработчик, 30 лет</em>
          <p className='student__about'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <Link className='student__link' to='https://github.com/'>Github</Link>
        </div>
        <img className='student__img' src={studentimg} alt='фото'></img>
      </div>
      <article className='portfolio'>
        <p className='portfolio__text'>Портфолио</p>
        <Link className='portfolio__link' to='#'>
          <p className='portfolio__link-text'>Статичный сайт</p>
          <p className='portfolio__link-text'>↗</p>
        </Link>
        <div className='portfolio__divider'></div>
        <Link className='portfolio__link' to='#'>
          <p className='portfolio__link-text'>Адаптивный сайт</p>
          <p className='portfolio__link-text'>↗</p>
        </Link>
        <div className='portfolio__divider'></div>
        <Link className='portfolio__link' to='#'>
          <p className='portfolio__link-text'>Одностраничное приложение</p>
          <p className='portfolio__link-text'>↗</p>
        </Link>
      </article>
    </section>
  )
}

export default Student;