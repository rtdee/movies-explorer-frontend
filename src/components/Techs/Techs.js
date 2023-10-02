import './Techs.css';

import React from 'react';

function Techs() {
  return (
    <section className='techs' id='techs'>
      <h2 className='techs__header'>Технологии</h2>
      <div className='techs__divider'></div>
      <strong className='techs__strong'>7 технологий</strong>
      <p className='techs__paragraph'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <figure className='techs__icons-container'>
        <div className='techs__icon'><p className='techs__icon-text'>HTML</p></div>
        <div className='techs__icon'><p className='techs__icon-text'>CSS</p></div>
        <div className='techs__icon'><p className='techs__icon-text'>JS</p></div>
        <div className='techs__icon'><p className='techs__icon-text'>React</p></div>
        <div className='techs__icon'><p className='techs__icon-text'>Git</p></div>
        <div className='techs__icon'><p className='techs__icon-text'>Express.js</p></div>
        <div className='techs__icon'><p className='techs__icon-text'>mongoDB</p></div>
      </figure>
    </section>
  )
}

export default Techs;