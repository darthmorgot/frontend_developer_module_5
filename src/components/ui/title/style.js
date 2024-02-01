import styled from 'styled-components';
import {TitleSize} from './title.jsx';

export const StyledTitle = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: ${props => {
    if (props.$size === TitleSize.BIG) {
      return '44px';
    }
    if (props.$size === TitleSize.MEDIUM) {
      return '24px';
    }
    if (props.$size === TitleSize.SMALL) {
      return '18px';
    }
  }};
  line-height: ${props => {
    if (props.$size === TitleSize.BIG) {
      return '115%';
    }
    if (props.$size === TitleSize.MEDIUM) {
      return '130%';
    }
    if (props.$size === TitleSize.SMALL) {
      return '150%';
    }
  }};
`;
