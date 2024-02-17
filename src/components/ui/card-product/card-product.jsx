import React from 'react';
import Title from '../title/title.jsx';
import {TitleLevel, TitleSize} from '../title/title-level-size.js';
import Tabs from './tabs/tabs.jsx';
import {Card, Image} from './style.js';

/**
 * Компонент элемента списка товаров с карточкой товара.
 * @param {object} product Данные (props) о товаре поступают из CatalogProducts.
 * @returns {*|null} Разметка элемента списка.
 * @class
 */
function CardProduct({product}) {
  return <Card>
    <Title level={TitleLevel.H2} size={TitleSize.MEDIUM}>{product.title}</Title>
    <Image
      src={product.image}
      width="248"
      height="248"
      alt="Картинка товара"
    />
    <Tabs item={product}/>
  </Card>;
}

export default CardProduct;
