import React from 'react';
import OrderForm from '../../blocks/order-form/order-form.jsx';
import CatalogProducts from '../../blocks/catalog-products/catalog-products.jsx';
import './style.scss';
import setPageTitle from '../../utils/utils.js';

function CatalogPage({products}) {
  setPageTitle('Каталог | Фермерский магазин');

  return (
    <div className="catalog wrapper">
      <h1 className="visually-hidden">Каталог продуктов</h1>
      <OrderForm />
      <CatalogProducts products={products}/>
    </div>
  );
}

export default CatalogPage;
