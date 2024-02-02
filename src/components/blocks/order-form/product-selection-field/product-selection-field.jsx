import React from 'react';
import Title, {TitleSize, TitleLevel} from '../../../ui/title/title.jsx';
import {SelectFieldset, SelectList, ListItem, Label, SpanName, Input, SpanMark} from './style.js';

// Блок формы для выбора товара из списка на странице каталога
function ProductSelectionField({goods, changed}) {
  const createList = goods && goods.length ? goods.map(item => (
      <ListItem key={item.id}>
        <Label>
          <SpanName>{item.content}</SpanName>
          <Input className="visually-hidden"
                 name={item.name}
                 checked={item.checked}
                 onChange={e => changed(item.id, e)}
          />
          <SpanMark></SpanMark>
        </Label>
      </ListItem>
    )
  ) : null;

  return (
    <SelectFieldset>
      <Title level={TitleLevel.H3} size={TitleSize.SMALL}>Выберите продукты</Title>
      <SelectList>
        {createList}
      </SelectList>
    </SelectFieldset>
  );
}

export default ProductSelectionField;
