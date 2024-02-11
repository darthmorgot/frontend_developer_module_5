import styled from 'styled-components';

export const Dl = styled.dl`
  margin-top: 24px;
  margin-bottom: -2px;
`;

export const RowWrapper = styled.div`
  margin-bottom: 8px;
`;

export const Dt = styled.dt`
  display: inline;
  margin-right: 4px;
  color: ${props => props.theme.black};
  font-weight: 700;
`;

export const Dd = styled.dd`
  display: inline;
  margin: 0;
`;
