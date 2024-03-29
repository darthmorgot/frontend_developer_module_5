import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

const logoStyle = css`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  margin-top: 8px;

  svg {
    margin-right: 24px;
  }
`;

export const StyledLogo = styled(Link)`
  ${logoStyle}

  &:hover {
    text-decoration: underline;
    text-underline-offset: 8px;
  }

  &:focus {
    outline: 1px solid ${props => props.theme.crusta};
    outline-offset: 2px;
  }
`;

export const StyledLogoMainPage = styled.span`
  ${logoStyle}
`;

export const LogoText = styled.span`
  font-size: 28px;
  font-weight: 700;
  line-height: 115%;
`;
