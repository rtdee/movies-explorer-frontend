import './HeaderMenu.css';

import React from 'react';

function HeaderMenu(props) {
  return (
    <>
      <button className='header-menu-btn' type='button' onClick={props.onClickMenu}></button>
    </>
  )
}

export default HeaderMenu;