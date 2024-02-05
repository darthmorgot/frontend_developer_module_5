import {useState} from 'react';
import ProductSelectionField from './product-selection-field/product-selection-field.jsx';
import ProductPurchaseField from './product-purchase-field/product-purchase-field.jsx';
import HiddenTitle from '../../ui/hidden-title/hidden-title.jsx';
import {Section, Form} from './style.js';

/**
 * Компонент формы заказа на странице каталога
 * @param products props Моковые данные поступают из CatalogPage
 * @returns {JSX.Element} Разметка формы
 * @constructor
 */
function OrderForm({products}) {
  const [goods, setGood] = useState(products);
  const goodCheck = goods.filter(option => option.checked === true);
  const goodCheckPrice = goodCheck.map(item => item.price);
  const goodCheckPriceSum = goodCheckPrice.reduce((sum, current) => sum + current, 0);
  const isDisabledButton = goodCheck && goodCheck.length;

  function handleChange(id, e) {
    setGood(goods.map(item => item.id !== id ? item : {
      ...item, checked: e.target.checked
    }));
  }

  const handleBuy = () => {
    alert(
      `Спасибо за покупку.
      Вы приобрели: ${goodCheck.map(item => item.title.toLowerCase()).join(', ')}.
      Цена: ${goodCheckPriceSum} руб.`
    );
  };

  return (
    <Section>
      <HiddenTitle>Форма для заказа товара</HiddenTitle>
      <Form action='https://echo.htmlacademy.ru' method='post' autoComplete='off'>
        <ProductSelectionField goods={goods} changed={handleChange}/>
        <ProductPurchaseField price={goodCheckPriceSum} buy={handleBuy} isDisabled={isDisabledButton}/>
      </Form>
    </Section>
  );
}

export default OrderForm;
