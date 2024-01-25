import React from 'react';
import Logo from '../../ui/logo/logo.jsx';
import Copyright from '../../ui/copyright/copyright.jsx';
import './style.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper wrapper">
        <Logo />
        <Copyright />
      </div>
    </footer>
  );
}

export default Footer;
