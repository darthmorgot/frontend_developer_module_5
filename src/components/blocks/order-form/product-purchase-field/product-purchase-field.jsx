import {useState} from 'react';
import Title from '../../../ui/title/title.jsx';
import {TitleLevel, TitleSize} from '../../../ui/title/title-level-size.js';
import {
  OrderFieldset,
  Address,
  Label,
  HiddenLabelText,
  Input,
  HiddenInput,
  ShowPrice,
  SpanPrice,
  Output,
  SubmitButton
} from './style.js';

/**
 * Компонент поля формы с адресом, ценой и кнопкой покупки на странице каталога.
 * @param {number} price Данные (props) с ценой заказа поступают из OrderForm.
 * @param {Function} buy Коллбэк (props) поступает из OrderForm.
 * @param {boolean} isDisabled Данные (props) для активации/деактивации кнопки "Купить".
 * @returns {JSX.Element} Разметка поля формы.
 * @class
 */
function ProductPurchaseField({price = 0, buy, isDisabled}) {
  const [address, setAddress] = useState('');
  const isButtonEnable = isDisabled && address;

  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  return (
    <OrderFieldset>
      <Title level={TitleLevel.H3} size={TitleSize.SMALL}>Сделать заказ</Title>
      <Address>
        <Label>
          <HiddenLabelText>Введите адрес доставки</HiddenLabelText>
          <Input value={address} onChange={(e) => handleChangeAddress(e)} required/>
        </Label>
      </Address>
      <ShowPrice>
        <SpanPrice>Цена</SpanPrice>
        <Output>{price} руб.</Output>
        <HiddenInput value={price}/>
      </ShowPrice>
      <SubmitButton $maxWidth as={'button'} onClick={buy} disabled={!isButtonEnable}>Купить</SubmitButton>
    </OrderFieldset>
  );
}

export default ProductPurchaseField;
