import styled from 'styled-components';

export const StyleButton = styled.a`
  display: block;
  width: 260px;
  padding-top: 17px;
  padding-bottom: 16px;
  margin: 0 auto;
  background-color: ${props => props.theme.seaBuckthorn};
  text-align: center;
  color: ${props => props.theme.white};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.crusta};
  }

  &:active {
    box-shadow: 0 4px 0 0 rgba(0 0 0 / 0.14) inset;
  }

  &:focus {
    outline: 1px solid ${props => props.theme.crusta};
    outline-offset: 2px;
  }
`;
