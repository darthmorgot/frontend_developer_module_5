import React from 'react';
import {StyledTitle} from './style.js';

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
