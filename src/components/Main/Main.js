import './Main.css';

import React from 'react';

import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import Student from '../Student/Student';

function Main() {
  return (
    <section className='main'>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <Student />
    </section>
  )
}

export default Main;