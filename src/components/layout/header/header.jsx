import Logo from '@/components/ui/logo/logo.jsx';
import Nav from '@/components/layout/nav/nav.jsx';
import {StyledHeader, HeaderWrapper} from './style.js';

/**
 * Компонент хедера на странице сайта.
 * @returns {JSX.Element} Разметка хедера.
 * @class
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
