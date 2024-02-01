import React from 'react';
import Logo from '../../ui/logo/logo.jsx';
import {StyledFooter, FooterWrapper, FooterCopyright} from './style.js';

function Footer() {
  return (
    <StyledFooter>
      <FooterWrapper className="wrapper">
        <Logo />
        <FooterCopyright>Создано 2021</FooterCopyright>
      </FooterWrapper>
    </StyledFooter>
  );
}

export default Footer;
