import React from 'react';
import OrderForm from '../../blocks/order-form/order-form.jsx';
import CatalogProducts from '../../blocks/catalog-products/catalog-products.jsx';
import './style.scss';

function CatalogPage() {
  return (
    <div className="catalog wrapper">
      <h1 className="visually-hidden">Каталог продуктов</h1>
      <OrderForm />
      <CatalogProducts />
    </div>
  );
}

export default CatalogPage;
