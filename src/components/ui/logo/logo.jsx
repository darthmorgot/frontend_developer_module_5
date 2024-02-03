import React from 'react';
import {StyledLogo, LogoText} from './style.js';
import LogoImage from 'Images/logo.svg?react';

function Logo() {
  return (
    <StyledLogo href='/' className='logo-link'>
      <LogoImage role='img' aria-label='Логотип Фермерского магазина'/>
      <LogoText>Фермерские продукты</LogoText>
    </StyledLogo>
  );
}

export default Logo;
