import React from 'react';
import LogoImage from 'Images/logo.svg?react';
import {AppRoute} from '../../../AppRoute.js';
import {useLocation} from 'react-router-dom';
import {StyledLogo, StyledLogoMainPage, LogoText} from './style.js';

/**
 * Компонент блока с логотипом
 * @returns {JSX.Element|null} Разметка блока
 * @constructor
 */
function Logo() {
  const {pathname} = useLocation();

  return pathname === AppRoute.MAIN ? (
    <StyledLogoMainPage>
      <LogoImage role="img" aria-label="Логотип Фермерского магазина"/>
      <LogoText>Фермерские продукты</LogoText>
    </StyledLogoMainPage>
  ) : (
    <StyledLogo to={AppRoute.MAIN} className="logo-link">
      <LogoImage role="img" aria-label="Логотип Фермерского магазина"/>
      <LogoText>Фермерские продукты</LogoText>
    </StyledLogo>
  );
}

export default Logo;
