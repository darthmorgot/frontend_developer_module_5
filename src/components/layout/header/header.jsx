import React from 'react';
import Logo from '../../ui/logo/logo';
import Nav from '../nav/nav';
import './style.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper wrapper">
        <Logo/>
        <Nav/>
      </div>
    </header>
  );
}

export default Header;
