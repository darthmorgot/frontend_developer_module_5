import styled from 'styled-components';
import aboutImagePng from 'Images/back.png';
import aboutImageWebp from 'Images/back.png?format=webp';
import {P} from '@/components/styled/index.js';

export const Section = styled.section`
  background-color: ${props => props.theme.pattensBlue};
`;

export const AboutWrapper = styled.div`
  padding-top: 184px;
  padding-bottom: 183px;
  background-image: image-set(
    url(${aboutImageWebp}) type("image/webp") 1x,
    url(${aboutImagePng}) 1x
  );
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

export const Description = styled(P)``;
