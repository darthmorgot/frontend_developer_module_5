import React from 'react';
import Title, {TitleSize, Heading} from '../../ui/title/title.jsx';
import TabsData from './tabs/tabs-data.jsx';
import './style.scss';

function CardProduct({products}) {
  return products && products.length ? products.map(item => (
      <li className="products-list__item" key={item.id}>
        <div className="products__card card">
          <Title heading={Heading.H2} size={TitleSize.MEDIUM}>{item.title}</Title>
          <img src={item.image} width="248" height="248" alt="Картинка товара"
               className="card__image"/>
          <TabsData item={item}/>
        </div>
      </li>
    )) : null;
}

export default CardProduct;
