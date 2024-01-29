import React from 'react';
import Logo from '../../ui/logo/logo.jsx';
import './style.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper wrapper">
        <Logo />
        <p className="footer__copyright">Создано 2021</p>
      </div>
    </footer>
  );
}

export default Footer;
