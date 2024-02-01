import styled from 'styled-components';

export const StyledLogo = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  margin-top: 8px;

  &:focus {
    outline: 1px solid ${props => props.theme.crusta};
    outline-offset: 2px;
  }

  svg {
    margin-right: 24px;
  }
`;

export const LogoText = styled.span`
  font-size: 28px;
  font-weight: 700;
  line-height: 115%;
`;
