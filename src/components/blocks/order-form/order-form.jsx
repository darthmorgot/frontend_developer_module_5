import React from 'react';
import ProductSelectionField from './product-selection-field/product-selection-field.jsx';
import ProductPurchaseField from './product-purchase-field/product-purchase-field.jsx';
import HiddenTitle from '../../ui/hidden-title/hidden-title.jsx';
import {Section, Form} from './style.js';

/**
 * Компонент формы заказа на странице каталога
 * @param products props Моковые данные поступают из CatalogPage
 * @param selectedValues props Данные о выбранных продуктах поступают из CatalogPage
 * @param setSelectedValues props Коллбэк поступает из CatalogPage
 * @param slideToSelectProduct props Коллбэк поступает из CatalogPage
 * @returns {JSX.Element} Разметка формы
 * @constructor
 */
function OrderForm({products, selectedValues, setSelectedValues, slideToSelectProduct}) {
  const arraySelectedProducts = products.filter(item => selectedValues.includes(item.id));
  const productSelectedPrice = arraySelectedProducts.reduce((sum, current) => sum + current.price, 0);
  const isDisabledButton = arraySelectedProducts && arraySelectedProducts.length;

  const handleBuy = () => {
    alert(
      `Спасибо за покупку.
      Вы приобрели: ${arraySelectedProducts.map(item => item.title.toLowerCase()).join(', ')}.
      Цена: ${productSelectedPrice} руб.`
    );
  };

  return (
    <Section>
      <HiddenTitle>Форма для заказа товара</HiddenTitle>
      <Form action='https://echo.htmlacademy.ru' method='post' autoComplete='off'>
        <ProductSelectionField
          products={products}
          selectedValues={selectedValues}
          setSelectedValues={setSelectedValues}
          slideToSelectProduct={slideToSelectProduct}
        />
        <ProductPurchaseField
          price={productSelectedPrice}
          buy={handleBuy}
          isDisabled={isDisabledButton}
        />
      </Form>
    </Section>
  );
}

export default OrderForm;
