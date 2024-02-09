import React from 'react';
import Logo from '../../ui/logo/logo';
import Nav from '../nav/nav';
import {StyledHeader, HeaderWrapper} from './style.js';

/**
 * Компонент хедера на странице сайта
 * @param page props Данные о странице сайта поступает из PageWrapper
 * @param setPage props Коллбэк поступает из PageWrapper
 * @returns {JSX.Element} Разметка хедера
 * @constructor
 */
function Header({page, setPage}) {
  return (
    <StyledHeader>
      <HeaderWrapper className='wrapper'>
        <Logo/>
        <Nav page={page} setPage={setPage}/>
      </HeaderWrapper>
    </StyledHeader>
  );
}

export default Header;
