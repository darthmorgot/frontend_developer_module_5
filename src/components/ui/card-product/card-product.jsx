import React from 'react';
import Title, {TitleSize, TitleLevel} from '../title/title.jsx';
import Tabs from './tabs/tabs.jsx';
import {ListItem, Card, Image} from './style.js';

function CardProduct({products}) {
  return products && products.length ? products.map(item => (
      <ListItem key={item.id}>
        <Card>
          <Title level={TitleLevel.H2} size={TitleSize.MEDIUM}>{item.title}</Title>
          <Image
            src={item.image}
            width="248"
            height="248"
            alt="Картинка товара"
          />
          <Tabs item={item}/>
        </Card>
      </ListItem>
    )) : null;
}

export default CardProduct;
