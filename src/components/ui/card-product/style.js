import styled from 'styled-components';
import {Img} from '@/components/styled/index.js';

export const Card = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 0 20px;
  padding: 19px;
  border: 1px solid ${props => props.theme.blackZeroTen};
  background: ${props => props.theme.white};

  & h2 {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    margin: 0 0 16px;
  }
`;

export const Picture = styled.picture`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  height: 248px;
`;

export const Source = styled.source``;

export const Image = styled(Img)`
  width: 248px;
  height: 248px;
`;
