import React from 'react';
import Title, {TitleSize, TitleLevel} from '../../../ui/title/title.jsx';
import {OrderFieldset, Address, Label, HiddenLabelText, Input, ShowPrice, SpanPrice, Output, SubmitButton} from './style.js';

// Блок формы с адресом, ценой и кнопкой покупки на странице каталога
function ProductPurchaseField({prices}) {
  return (
    <OrderFieldset>
      <Title level={TitleLevel.H3} size={TitleSize.SMALL}>Сделать заказ</Title>
      <Address>
        <Label>
          <HiddenLabelText>Введите адрес доставки</HiddenLabelText>
          <Input/>
        </Label>
      </Address>
      <ShowPrice>
        <SpanPrice>Цена</SpanPrice>
        <Output>1 200 руб.</Output>
      </ShowPrice>
      <SubmitButton $maxWidth as={'button'}>Купить</SubmitButton>
    </OrderFieldset>
  );
}

export default ProductPurchaseField;
