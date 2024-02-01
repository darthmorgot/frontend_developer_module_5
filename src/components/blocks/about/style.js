import styled from 'styled-components';
import aboutImage from 'Images/back.png';

export const Section = styled.section`
  background-color: ${props => props.theme.pattensBlue};
`;

export const AboutWrapper = styled.div`
  padding-top: 184px;
  padding-bottom: 183px;
  background-image: url(${aboutImage});
  background-repeat: no-repeat;
  background-position: 97.1% 37px;
`;

export const TextWrapper = styled.div`
  width: 538px;
  margin: 0;

  & h1 {
    margin-bottom: 24px;
  }
`;

export const Description = styled.p`
  margin: 0;
`;
