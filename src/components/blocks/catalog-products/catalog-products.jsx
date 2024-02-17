import React from 'react';
import CardProduct from '../../ui/card-product/card-product.jsx';
import HiddenTitle from '../../ui/hidden-title/hidden-title.jsx';
import {Scrollbar, Mousewheel} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import {Section, ProductList, ListItem} from './style.js';

/**
 * Компонент списка с товарами на странице каталога.
 * @param {object} products Данные (props) о товарах поступают из CatalogPage.
 * @param {Function} setSwiper Коллбэк (props) поступает из CatalogPage.
 * @returns {JSX.Element} Разметка списка.
 * @class
 */
function CatalogProducts({products, setSwiper}) {
  return (
    <Section>
      <HiddenTitle>Каталог товаров</HiddenTitle>
      <ProductList
        onSwiper={setSwiper}
        slidesOffsetAfter={148}
        autoHeight={true}
        direction={'vertical'}
        slidesPerView={'auto'}
        spaceBetween={12}
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
