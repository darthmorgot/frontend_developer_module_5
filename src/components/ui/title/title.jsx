import React from 'react';
import {StyledTitle} from './style.js';

export const TitleLevel = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3'
};

export const TitleSize = {
  BIG: 'big',
  MEDIUM: 'medium',
  SMALL: 'small'
};

function Title({level, size, children}) {
  return (
    <StyledTitle as={level} $size={size}>{children}</StyledTitle>
  );
}

export default Title;
