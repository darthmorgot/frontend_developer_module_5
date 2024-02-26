import React from 'react';
import Logo from '@/components/ui/logo/logo.jsx';
import {StyledFooter, FooterWrapper, FooterCopyright} from './style.js';

/**
 * Компонент футера на странице сайта.
 * @returns {JSX.Element} Разметка футера.
 * @class
 */
function Footer() {
  return (
    <StyledFooter>
      <FooterWrapper className='wrapper'>
        <Logo />
        <FooterCopyright>Создано 2021</FooterCopyright>
      </FooterWrapper>
    </StyledFooter>
  );
}

export default Footer;
