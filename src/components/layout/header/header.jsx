import React from 'react';
import Logo from '../../ui/logo/logo';
import Nav from '../nav/nav';
import './style.scss';

function Header({page, setPage}) {
  return (
    <header className="header">
      <div className="header__wrapper wrapper">
        <Logo/>
        <Nav page={page} setPage={setPage}/>
      </div>
    </header>
  );
}

export default Header;
