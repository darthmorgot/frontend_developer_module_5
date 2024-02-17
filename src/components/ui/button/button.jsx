import React from 'react';
import {StyledButton} from './style.js';

/**
 * Компонент кнопки.
 * @param {string} classButton Данные (props) о классе поступают на месте применения.
 * @param {string} link Данные (props) о ссылке поступают на месте применения.
 * @param {boolean} maxWidth Данные (props) о размере поступают на месте применения.
 * @param {string} dataButton Данные (props) о странице поступают на месте применения.
 * @param {Function} handleButton Коллбэк (props) поступает на месте применения.
 * @param {string} children Данные (props) о контенте поступают на месте применения.
 * @returns {JSX.Element} Разметка кнопки.
 * @class
 */
function Button({classButton, link, maxWidth, dataButton, handleButton, children}) {
  return (
    <StyledButton
      className={classButton ? classButton : null}
      {...(link ? {to: link} : {as: 'button'})}
      $maxWidth={maxWidth}
      data-page={dataButton}
      onClick={handleButton}
      tabIndex='0'
    >
      {children}
    </StyledButton>
  );
}

export default Button;
