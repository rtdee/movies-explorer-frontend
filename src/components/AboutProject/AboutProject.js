import './AboutProject.css';

import React from 'react';

function AboutProject() {
  return (
    <section className='project' id='about-project'>
      <h2 className='project__header'>О проекте</h2>
      <div className='project__divider'></div>
      <article className='project__description'>
        <div className='text-container'>
          <strong className='text-container__strong'>Дипломный проект включал 5 этапов</strong>
          <p className='text-container__paragraph'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='text-container'>
          <strong className='text-container__strong'>На выполнение диплома ушло 5 недель</strong>
          <p className='text-container__paragraph'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </article>
      <table className='project__graph'>
        <tr className='first-row'>
          <td className='graph-item first-row__first-item'>1 неделя</td>
          <td className='graph-item first-row__last-item'>4 недели</td>
        </tr>
        <tr className='last-row'>
          <td className='graph-item'>Back-end</td>
          <td className='graph-item'>Front-end</td>
        </tr>
      </table>
    </section>
  )
}

export default AboutProject;