import './Header.css';

import React from 'react';
import { useLocation } from 'react-router-dom';

import HeaderNav from '../HeaderNav/HeaderNav';
import HeaderReg from '../HeaderReg/HeaderReg';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import Logo from '../Logo/Logo';

function Header(props) {
  const location = useLocation();

  const [headerElement, setHeaderElement] = React.useState(<></>);

  React.useEffect(() => {
    if (props.loggedIn) {
      setHeaderElement(<HeaderNav onClickProfile={props.onClickProfile} />)
    } else {
      setHeaderElement(<HeaderReg onClickLogin={props.onClickLogin} />)
    }
  }, [location, props.loggedIn]);

  React.useEffect(() => {
    if (window.innerWidth <= 768 && props.loggedIn) {
      setHeaderElement(<HeaderMenu onClickMenu={props.onClickMenu}  />)
    }
  }, [props.loggedIn]);

  return (
    <header className={`header ${location.pathname === '/' ? 'header_location_land' : ''}`}>
      <Logo />
      {headerElement}
    </header>
  );
}

export default Header;