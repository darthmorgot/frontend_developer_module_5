import React from 'react';
import Logo from '../../ui/logo/logo';
import Nav from '../nav/nav';
import {StyledHeader, HeaderWrapper} from './style.js';

function Header({page, setPage}) {
  return (
    <StyledHeader>
      <HeaderWrapper className="wrapper">
        <Logo/>
        <Nav page={page} setPage={setPage}/>
      </HeaderWrapper>
    </StyledHeader>
  );
}

export default Header;
