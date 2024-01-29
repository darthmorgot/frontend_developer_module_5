import React from 'react';
import Title, {TitleSize, Heading} from '../../ui/title/title.jsx';

function ProductPurchaseField({prices}) {
  return (
    <fieldset className="form__fieldset form__fieldset--order">
      <Title heading={Heading.H3} size={TitleSize.SMALL}>Сделать заказ</Title>
      <div className="form__address">
        <label>
          <input type="text" name="address" placeholder="Введите адрес доставки"/>
        </label>
      </div>
      <div className="form__show-price">
        <span>Цена</span>
        <output className="form__output">1 200 руб.</output>
      </div>
      <button type="submit" className="form__submit button">Купить</button>
    </fieldset>
  );
}

export default ProductPurchaseField;
