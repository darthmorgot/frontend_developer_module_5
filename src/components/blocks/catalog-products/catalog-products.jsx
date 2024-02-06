import React from 'react';
import CardProduct from '../../ui/card-product/card-product.jsx';
import HiddenTitle from '../../ui/hidden-title/hidden-title.jsx';
import {Scrollbar, Mousewheel} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import {Section, ProductList, ListItem} from './style.js';

/**
 * Компонент списка с товарами на странице каталога
 * @param products props Данные о товарах поступают из CatalogPage
 * @returns {JSX.Element} Разметка списка
 * @constructor
 */
function CatalogProducts({products}) {
  return (
    <Section>
      <HiddenTitle>Каталог товаров</HiddenTitle>
      <ProductList
        direction={'vertical'}
        slidesPerView={'auto'}
        spaceBetween={20}
        grabCursor={true}
        scrollbar={{
          hide: false,
        }}
        mousewheel={true}
        modules={[Mousewheel, Scrollbar]}
      >
        {products && products.length ? products.map(item => (
          <ListItem key={item.id}>
            <CardProduct product={item}/>
          </ListItem>
        )) : null}
      </ProductList>
    </Section>
  );
}

export default CatalogProducts;
