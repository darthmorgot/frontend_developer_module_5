import styled from 'styled-components';

export const ListItem = styled.li`
  width: 727px;
  margin-bottom: 12px;
`;

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

export const Image = styled.img`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
`;
