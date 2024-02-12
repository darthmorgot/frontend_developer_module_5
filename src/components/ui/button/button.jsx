import React from 'react';
import {StyledButton} from './style.js';

/**
 * Компонент кнопки
 * @param classButton props Данные о классе поступают на месте применения
 * @param link props Данные о ссылке поступают на месте применения
 * @param maxWidth props Данные о размере поступают на месте применения
 * @param dataButton props Данные о странице поступают на месте применения
 * @param handleButton props Коллбэк поступает на месте применения
 * @param children props Данные о контенте поступают на месте применения
 * @returns {JSX.Element} Разметка кнопки
 * @constructor
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
