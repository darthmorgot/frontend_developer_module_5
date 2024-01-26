import {useState} from 'react';
import ProductSelectionField from './product-selection-field.jsx';
import ProductPurchaseField from './product-purchase-field.jsx';
import './style.scss';

const productList = [
  {id: 0, content: 'Филе бедра цыпленка', name: 'chicken-thigh-fillet', checked: true},
  {id: 1, content: 'Филе бедра гуся', name: 'goose-thigh-fillet', checked: true},
  {id: 2, content: 'Мякоть бедра говяжья', name: 'beef-thigh-flesh', checked: true},
  {id: 3, content: 'Грудка цыпленка на кости', name: 'chicken-breast-on-the-bone', checked: false},
  {id: 4, content: 'Голень цыпленка', name: 'drumstick-chicken', checked: false}
];

function OrderForm() {
  let [products, setProduct] = useState(productList);

  function handleChange(id, e) {
    setProduct(products.map(item => item.id !== id ? item : {
      ...item, checked: e.target.checked
    }));
  }

  return (
    <section className="catalog__order-form order">
      <h2 className="visually-hidden">Форма для заказа товара</h2>
      <form action="#" method="post" className="order__form form">
        <ProductSelectionField products={products} changed={handleChange}/>
        <ProductPurchaseField />
      </form>
    </section>
  );
}

export default OrderForm;
