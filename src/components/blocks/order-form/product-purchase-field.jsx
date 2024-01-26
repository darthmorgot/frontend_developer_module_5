import React from 'react';

function ProductPurchaseField({prices}) {
  return (
    <fieldset className="form__fieldset form__fieldset--order">
      <h3 className="form__title">Сделать заказ</h3>
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
