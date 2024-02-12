import React from 'react';
import Logo from '../../ui/logo/logo';
import Nav from '../nav/nav';
import {StyledHeader, HeaderWrapper} from './style.js';

/**
 * Компонент хедера на странице сайта
 * @returns {JSX.Element} Разметка хедера
 * @constructor
 */
function Header() {
  return (
    <StyledHeader>
      <HeaderWrapper className='wrapper'>
        <Logo/>
        <Nav/>
      </HeaderWrapper>
    </StyledHeader>
  );
}

export default Header;
