import React from 'react';
import logo from '/src/assets/img/logo.svg';
import './style.scss';

function Logo() {
  return (
    <a href="/" className="logo-link">
      <img src={logo} alt="Логотип Фермерского магазина"/>
      <span>Фермерские продукты</span>
    </a>
  );
}

export default Logo;
