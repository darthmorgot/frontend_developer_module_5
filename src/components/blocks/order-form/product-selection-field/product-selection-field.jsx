import React from 'react';
import Title from '../../../ui/title/title.jsx';
import {TitleLevel, TitleSize} from '../../../ui/title/title-level-size.js';
import {
  SelectFieldset,
  SelectList,
  ListItem,
  StyledLabel,
  SpanName,
  Input,
  SpanMark
} from './style.js';

/**
 * Компонент поля формы для выбора товара из списка на странице каталога.
 * @param {object} products Данные (props) продукта поступают из OrderForm.
 * @param {object} selectedValues Данные (props) о выбранных продуктах поступают из OrderForm.
 * @param {Function} setSelectedValues Коллбэк (props) поступает из OrderForm.
 * @param {Function} slideToSelectProduct Коллбэк (props) поступает из OrderForm.
 * @returns {JSX.Element} Разметка поля формы.
 * @class
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
              <StyledLabel>
                <SpanName>{item.title}</SpanName>
                <Input className='visually-hidden'
                       name={item.name}
                       value={item.id}
                       checked={selectedValues.includes(item.id)}
                       onChange={() => setSelectedValues(item.id)}
                       onClick={() => slideToSelectProduct(item.id, index)}
                />
                <SpanMark></SpanMark>
              </StyledLabel>
            </ListItem>
          )
        ) : null}
      </SelectList>
    </SelectFieldset>
  );
}

export default ProductSelectionField;
