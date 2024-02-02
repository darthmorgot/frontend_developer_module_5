import {useState} from 'react';
import ProductSelectionField from './product-selection-field/product-selection-field.jsx';
import ProductPurchaseField from './product-purchase-field/product-purchase-field.jsx';
import HiddenTitle from '../../ui/hidden-title/hidden-title.jsx';
import {Section, Form} from './style.js';

const productList = [
  {id: 0, content: 'Филе бедра цыпленка', name: 'chicken-thigh-fillet', checked: true},
  {id: 1, content: 'Филе бедра гуся', name: 'goose-thigh-fillet', checked: true},
  {id: 2, content: 'Мякоть бедра говяжья', name: 'beef-thigh-flesh', checked: true},
  {id: 3, content: 'Грудка цыпленка на кости', name: 'chicken-breast-on-the-bone', checked: false},
  {id: 4, content: 'Голень цыпленка', name: 'drumstick-chicken', checked: false}
];

// Блок формы заказа на странице каталога
function OrderForm() {
  const [goods, setGood] = useState(productList);

  function handleChange(id, e) {
    setGood(goods.map(item => item.id !== id ? item : {
      ...item, checked: e.target.checked
    }));
  }

  return (
    <Section>
      <HiddenTitle>Форма для заказа товара</HiddenTitle>
      <Form action="#" method="post">
        <ProductSelectionField goods={goods} changed={handleChange}/>
        <ProductPurchaseField />
      </Form>
    </Section>
  );
}

export default OrderForm;
