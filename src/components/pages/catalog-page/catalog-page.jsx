import {useState} from 'react';
import OrderForm from '@/components/blocks/order-form/order-form.jsx';
import CatalogProducts from '@/components/blocks/catalog-products/catalog-products.jsx';
import {Catalog, WarningNoProducts} from './style.js';
import HiddenTitle from '@/components/ui/hidden-title/hidden-title.jsx';
import TitlePage from '@/components/ui/title-page/title-page.jsx';

/**
 * Компонент страницы каталога товаров.
 * @param {object} products Данные (props) о продуктах поступают из PageWrapper.
 * @returns {JSX.Element} Разметка страницы каталога.
 * @class
 */
function CatalogPage({products}) {
  const [selectedProductIds, setSelectedProductIds] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);

  const handleSelectedProductIds = (value) => {
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

  return products && products.length ? (
    <>
      <TitlePage namePage={'Каталог | Фермерский магазин'}/>
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
    </>
  ) : (
    <WarningNoProducts>Продукты были слишком вкусные и их разобрали.:(</WarningNoProducts>
  );
}

export default CatalogPage;
