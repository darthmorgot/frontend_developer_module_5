import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow:
    0 0 1px 0 ${props => props.theme.blackZeroFour},
    0 2px 6px 0 ${props => props.theme.blackZeroFour},
    0 10px 20px 0 ${props => props.theme.blackZeroFour};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
