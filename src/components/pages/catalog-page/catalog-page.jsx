import {useEffect} from 'react';
import OrderForm from '../../blocks/order-form/order-form.jsx';
import CatalogProducts from '../../blocks/catalog-products/catalog-products.jsx';
import {Catalog} from './style.js';
import HiddenTitle from '../../ui/hidden-title/hidden-title.jsx';

/**
 * Компонент страницы каталога товаров
 * @param products props Данные о продуктах поступают из PageWrapper
 * @returns {JSX.Element} Разметка страницы каталога
 * @constructor
 */
function CatalogPage({products}) {
  useEffect(() => {
    document.title = 'Каталог | Фермерский магазин';
  }, []);


  return (
    <Catalog className='wrapper'>
      <HiddenTitle level>Каталог продуктов</HiddenTitle>
      <OrderForm products={products}/>
      <CatalogProducts products={products}/>
    </Catalog>
  );
}

export default CatalogPage;
