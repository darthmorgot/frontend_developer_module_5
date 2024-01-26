import React from 'react';
import CardProduct from './card-product.jsx';
import './style.scss';

function CatalogProducts({data}) {
  return (
    <section className="catalog__products products">
      <h2 className="visually-hidden">Каталог товаров</h2>
      <ul className="products__list products-list">
        <CardProduct products={data}/>
      </ul>
    </section>
  );
}

export default CatalogProducts;
