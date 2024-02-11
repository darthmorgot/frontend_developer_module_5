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
 * @param products props Данные продукта поступают из OrderForm
 * @param selectedValues props Данные о выбранных продуктах поступают из OrderForm
 * @param setSelectedValues props Коллбэк поступает из OrderForm
 * @param slideToSelectProduct props Коллбэк поступает из OrderForm
 * @returns {JSX.Element} Разметка поля формы
 * @constructor
 */
function ProductSelectionField({
                                 products,
                                 selectedValues,
                                 setSelectedValues = () => {},
                                 slideToSelectProduct = () => {}
}) {
  return (
    <SelectFieldset>
      <Title level={TitleLevel.H3} size={TitleSize.SMALL}>Выберите продукты</Title>
      <SelectList>
        {products && products.length ? products.map((item, index) => (
            <ListItem key={item.id}>
              <Label>
                <SpanName>{item.title}</SpanName>
                <Input className='visually-hidden'
                       name={item.name}
                       value={item.id}
                       checked={selectedValues.includes(item.id)}
                       onChange={() => setSelectedValues(item.id)}
                       onClick={() => slideToSelectProduct(item.id, index)}
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
