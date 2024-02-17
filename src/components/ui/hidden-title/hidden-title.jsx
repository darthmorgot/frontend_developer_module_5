import React from 'react';

/**
 * Компонент скрытого заголовка.
 * @param {string} level Данные (props) об уровне заголовка определяется на месте применения.
 * @param {string} children Данные (props) текст заголовка определяется на месте применения.
 * @returns {JSX.Element} Разметка заголовка.
 * @class
 */
function HiddenTitle({level, children}) {
  return (
    <>
      {
        level
          ? <h1 className={'visually-hidden'}>{children}</h1>
          : <h2 className={'visually-hidden'}>{children}</h2>
      }
    </>
  );
}

export default HiddenTitle;
