import React from 'react';
import {Dl, RowWrapper, Dt, Dd} from './style.js';

/**
 * Компонент списка свойств для карточки товара
 * @param list props Данные о свойствах товара поступают из места применения
 * @returns {JSX.Element} Разметка списка
 * @constructor
 */
function OptionList({list = []}) {
  return (
    <Dl>
      {list.map((item, index) => (
        item.value
          ? <RowWrapper key={index}>
            <Dt>{item.property}:</Dt>
            <Dd>{item.value}</Dd>
          </RowWrapper>
          : null
      ))}
    </Dl>
  );
}

export default OptionList;
