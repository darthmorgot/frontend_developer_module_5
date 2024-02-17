import {useState} from 'react';
import {Text, WrapperPriceDescription, DescriptionButton, Price} from './style.js';

/**
 * Компонент блока с описанием на карточке товара.
 * @param {string} activeTab Данные (props) об активной вкладке поступают из Tabs.
 * @param {object} item Данные (props) о продукте поступают из Tabs.
 * @returns {JSX.Element|null} Разметка блока.
 * @class
 */
function TabDescription({activeTab, item}) {
  const MAX_TEXT_SIZE = 250;
  const [isShowDescription, setShowDescription] = useState(false);
  const text = isShowDescription ? item.about : item.about.slice(0, MAX_TEXT_SIZE);
  const buttonText = item.about.length > MAX_TEXT_SIZE ? (!isShowDescription ? 'Подробнее' : 'Скрыть') : null;

  const handleShowDescription = () => {
    setShowDescription(!isShowDescription);
  };

  return activeTab === 'tab_0' ? <>
      <Text dangerouslySetInnerHTML={{__html: text}}/>
      <WrapperPriceDescription>
        <Price>{item.price} руб. / {item.weight} гр.</Price>
        <DescriptionButton as={'button'} onClick={handleShowDescription}>{buttonText}</DescriptionButton>
      </WrapperPriceDescription>
    </>
    : null;
}

export default TabDescription;
