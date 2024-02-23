import React from 'react';
import {useLocation} from 'react-router-dom';
import Button from '../../ui/button/button.jsx';
import {AppRoute} from '@/AppRoute.js';
import {StyledNav, Anchor} from './style.js';

const navElements = [
  {
    to: AppRoute.MAIN,
    item: <Button key={AppRoute.BUY} link={AppRoute.BUY}>Купить</Button>
  },
  {
    to: AppRoute.BUY,
    item: <Anchor key={AppRoute.MAIN} to={AppRoute.MAIN} tabIndex='0'>Главная</Anchor>
  },
];

/**
 * Компонент блока навигации в шапке сайте.
 * @returns {JSX.Element} Разметка блока.
 * @class
 */
function Nav() {
  const {pathname} = useLocation();

  return (
    <StyledNav>
      {
        navElements
          .filter(navElement => navElement.to === pathname)
          .map(navElement => navElement.item)
      }
    </StyledNav>
  );
}

export default Nav;
