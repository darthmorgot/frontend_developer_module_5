import React from 'react';
import Button from '../../ui/button/button.jsx';
import {StyledNav, Anchor} from './style.js';

/**
 * Компонент блока навигации в шапке сайте
 * @param page props Данные о странице сайта поступает из Header
 * @param setPage props Коллбэк поступает из Header
 * @returns {JSX.Element} Разметка блока
 * @constructor
 */
function Nav({page, setPage}) {
  return (
    <StyledNav>
      {
        page === 'main-page'
          ? <Button link dataButton={'catalog-page'} handleButton={setPage}>Купить</Button>
          : <Anchor data-page='main-page' onClick={setPage} tabIndex='0'>Главная</Anchor>
      }
    </StyledNav>
  );
}

export default Nav;
