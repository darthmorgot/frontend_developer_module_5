import React from 'react';
import TabsData from './tabs-data.jsx';
import './style.scss';

function CardProduct({products}) {
  return (
    products.map(item => (
      <li className="products-list__item" key={item.id}>
        <div className="products__card card">
          <h2 className="card__title">{item.title}</h2>
          <img src={item.image} width="248" height="248" alt="Картинка товара"
               className="card__image"/>
          <TabsData item={item}/>
        </div>
      </li>
    ))
  );
}

export default CardProduct;
