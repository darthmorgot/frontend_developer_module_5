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

/**
 * Компонент заголовка.
 * @param {string} level Данные (props) об уровне заголовка поступают на месте применения.
 * @param {string} size Данные (props) о величине шрифта поступают на месте применения.
 * @param {string} children Данные (props) о контенте поступают на месте применения.
 * @returns {JSX.Element|null} Разметка заголовка.
 * @class
 */
function Title({level, size, children}) {
  return (
    <StyledTitle as={level} $size={size}>{children}</StyledTitle>
  );
}

export default Title;
