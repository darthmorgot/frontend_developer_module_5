import {useEffect, useState} from 'react';
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

  const [selectedProductIds, setSelectedProductIds] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);

  function handleSelectedProductIds(value) {
    const newValues = [...selectedProductIds];
    const indexValue = newValues.indexOf(value);
    if (indexValue !== -1) {
      newValues.splice(indexValue, 1);
    } else {
      newValues.push(value);
    }
    setSelectedProductIds(newValues);
  }

  const handleSwiperRef = (value, index) => {
    if (!selectedProductIds.includes(value)) {
      swiperRef.slideTo(index);
    }
  };

  return (
    <Catalog className='wrapper'>
      <HiddenTitle level>Каталог продуктов</HiddenTitle>
      <OrderForm
        products={products}
        selectedValues={selectedProductIds}
        setSelectedValues={handleSelectedProductIds}
        slideToSelectProduct={handleSwiperRef}
      />
      <CatalogProducts products={products} setSwiper={setSwiperRef}/>
    </Catalog>
  );
}

export default CatalogPage;
