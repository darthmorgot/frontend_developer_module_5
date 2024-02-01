import styled from 'styled-components';

export const StyledNav = styled.nav`
`;

export const Anchor = styled.a`
  display: block;
  margin-top: -5px;
  font-size: 18px;
  font-weight: 700;
  line-height: 150%;
  cursor: pointer;

  &:focus {
    outline: 1px solid ${props => props.theme.crusta};
    outline-offset: 2px;
  }
}
`;
