import React from 'react';
import CardProduct from '../../ui/card-product/card-product.jsx';
import HiddenTitle from '../../ui/hidden-title/hidden-title.jsx';
import {Section, ProductList} from './style.js';

// Блок с товарами на странице каталога
function CatalogProducts({products}) {
  return (
    <Section>
      <HiddenTitle>Каталог товаров</HiddenTitle>
      <ProductList>
        <CardProduct products={products}/>
      </ProductList>
    </Section>
  );
}

export default CatalogProducts;
