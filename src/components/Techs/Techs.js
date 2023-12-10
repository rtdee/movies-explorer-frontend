import './Techs.css';

import React from 'react';

function Techs() {
  return (
    <section className='techs' id='techs'>
      <div className='techs__container'>
        <h2 className='techs__header'>Технологии</h2>
        <h3 className='techs__strong'>7 технологий</h3>
        <p className='techs__paragraph'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className='techs__icons-container'>
          <li className='techs__icon'><p className='techs__icon-text'>HTML</p></li>
          <li className='techs__icon'><p className='techs__icon-text'>CSS</p></li>
          <li className='techs__icon'><p className='techs__icon-text'>JS</p></li>
          <li className='techs__icon'><p className='techs__icon-text'>React</p></li>
          <li className='techs__icon'><p className='techs__icon-text'>Git</p></li>
          <li className='techs__icon'><p className='techs__icon-text'>Express.js</p></li>
          <li className='techs__icon'><p className='techs__icon-text'>mongoDB</p></li>
        </ul>
      </div>
    </section>
  )
}

export default Techs;