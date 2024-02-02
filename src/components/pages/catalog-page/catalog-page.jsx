import React from 'react';
import OrderForm from '../../blocks/order-form/order-form.jsx';
import CatalogProducts from '../../blocks/catalog-products/catalog-products.jsx';
import {Catalog} from './style.js';
import HiddenTitle from '../../ui/hidden-title/hidden-title.jsx';
import setPageTitle from '../../utils/utils.js';

function CatalogPage({products}) {
  setPageTitle('Каталог | Фермерский магазин');

  return (
    <Catalog className="wrapper">
      <HiddenTitle level>Каталог продуктов</HiddenTitle>
      <OrderForm />
      <CatalogProducts products={products}/>
    </Catalog>
  );
}

export default CatalogPage;
