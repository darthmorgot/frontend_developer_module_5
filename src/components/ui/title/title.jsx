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
 * Компонент заголовка
 * @param level props Данные об уровне заголовка поступают на месте применения
 * @param size props Данные о величине шрифта поступают на месте применения
 * @param children props Данные о контенте поступают на месте применения
 * @returns {JSX.Element|null} Разметка заголовка
 * @constructor
 */
function Title({level, size, children}) {
  return (
    <StyledTitle as={level} $size={size}>{children}</StyledTitle>
  );
}

export default Title;
