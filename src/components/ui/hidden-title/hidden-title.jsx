import React from 'react';

/**
 * Компонент скрытого заголовка
 * @param level props Данные об уровне заголовка определяется на месте применения
 * @param children props Данные текст заголовка определяется на месте применения
 * @returns {JSX.Element} Разметка заголовка
 * @constructor
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
