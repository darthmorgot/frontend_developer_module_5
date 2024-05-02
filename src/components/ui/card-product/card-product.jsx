import Title from '@/components/ui/title/title.jsx';
import {TitleLevel, TitleSize} from '@/components/ui/title/title-level-size.js';
import Tabs from '@/components/ui/card-product/tabs/tabs.jsx';
import {Card, Picture, Source, Image} from './style.js';

/**
 * Компонент элемента списка товаров с карточкой товара.
 * @param {object} product Данные (props) о товаре поступают из CatalogProducts.
 * @returns {*|null} Разметка элемента списка.
 * @class
 */
function CardProduct({product}) {
  return <Card>
    <Title level={TitleLevel.H2} size={TitleSize.MEDIUM}>{product.title}</Title>
    <Picture>
      <Source srcSet={product.image.imageWebp} type="image/webp"/>
      <Image
        src={product.image.fallback}
        width="248"
        height="248"
        alt="Картинка товара"
      />
    </Picture>
    <Tabs item={product}/>
  </Card>;
}

export default CardProduct;
