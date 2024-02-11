import React from 'react';
import OptionList from '../option-list/option-list.jsx';

/**
 * Компонент блока со свойствами на карточке товара
 * @param activeTab props Данные об активной вкладке поступают из Tabs
 * @param item props Данные о продукте поступают из Tabs
 * @returns {JSX.Element|null} Разметка блока
 * @constructor
 */
function TabFeature({activeTab, item}) {
  return activeTab === 'tab_2'
    ? <OptionList list={item.features}/>
    : null;
}

export default TabFeature;
