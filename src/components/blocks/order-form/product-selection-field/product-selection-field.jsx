import React from 'react';
import Title, {TitleSize, TitleLevel} from '../../../ui/title/title.jsx';
import {
  SelectFieldset,
  SelectList,
  ListItem,
  Label,
  SpanName,
  Input,
  SpanMark
} from './style.js';

/**
 * Компонент поля формы для выбора товара из списка на странице каталога
 * @param goods props Данные продукта поступают из OrderForm
 * @param changed props Коллбэк поступает из OrderForm
 * @returns {JSX.Element} Разметка поля формы
 * @constructor
 */
function ProductSelectionField({goods, changed}) {
  return (
    <SelectFieldset>
      <Title level={TitleLevel.H3} size={TitleSize.SMALL}>Выберите продукты</Title>
      <SelectList>
        {goods && goods.length ? goods.map(item => (
            <ListItem key={item.id}>
              <Label>
                <SpanName>{item.title}</SpanName>
                <Input className='visually-hidden'
                       name={item.name}
                       checked={item.checked}
                       onChange={e => changed(item.id, e)}
                />
                <SpanMark></SpanMark>
              </Label>
            </ListItem>
          )
        ) : null}
      </SelectList>
    </SelectFieldset>
  );
}

export default ProductSelectionField;
