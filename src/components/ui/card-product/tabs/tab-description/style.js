import styled from 'styled-components';

const Paragraph = styled.p`
  margin: 0;
`;

export const Text = styled(Paragraph)`
  margin-bottom: 14px;
`;

export const Price = styled(Paragraph)`
  width: fit-content;
  padding: 4px 8px;
  background-color: ${props => props.theme.pattensBlue};
  font-size: 14px;
  font-weight: 700;
`;
