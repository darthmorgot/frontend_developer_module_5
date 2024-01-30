import React from 'react';
import CardProduct from '../../ui/card-product/card-product.jsx';
import './style.scss';

function CatalogProducts({products}) {
  return (
    <section className="catalog__products products">
      <h2 className="visually-hidden">Каталог товаров</h2>
      <ul className="products__list products-list">
        <CardProduct products={products}/>
      </ul>
    </section>
  );
}

export default CatalogProducts;
