import styled, {css} from 'styled-components';

const TitleStyleValue = {
  big: {
    fontSize: '44px',
    lineHeight: '115%'
  },
  medium: {
    fontSize: '24px',
    lineHeight: '130%'
  },
  small: {
    fontSize: '18px',
    lineHeight: '150%'
  }
};

export const StyledTitle = styled.h1`
  margin: 0;
  font-weight: 700;
  ${props => {
    return css`
      font-size: ${TitleStyleValue[props.$size].fontSize};
      line-height: ${TitleStyleValue[props.$size].lineHeight};
    `;
  }};
`;
