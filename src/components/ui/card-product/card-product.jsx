import React from 'react';
import Title, {TitleSize, TitleLevel} from '../title/title.jsx';
import Tabs from './tabs/tabs.jsx';
import {Card, Image} from './style.js';

/**
 * Компонент элемента списка товаров с карточкой товара
 * @param products props Данные о товаре поступают из CatalogProducts
 * @returns {*|null} Разметка элемента списка
 * @constructor
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
