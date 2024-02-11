import React from 'react';
import OptionList from '../option-list/option-list.jsx';

/**
 * Компонент вкладки с характеристиками товара
 * @param activeTab props Данные об активной вкладке поступают из Tabs
 * @param item props Данные о товаре поступают из Tabs
 * @returns {JSX.Element|null} Разметка вкладки
 * @constructor
 */
function TabSpecification({activeTab, item}) {
  return activeTab === 'tab_1'
    ? <OptionList list={item.spec}/>
    : null;
}

export default TabSpecification;
