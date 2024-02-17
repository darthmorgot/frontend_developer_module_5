import React from 'react';
import OptionList from '../option-list/option-list.jsx';

/**
 * Компонент блока со свойствами на карточке товара.
 * @param {string} activeTab Данные (props) об активной вкладке поступают из Tabs.
 * @param {object} item Данные (props) о продукте поступают из Tabs.
 * @returns {JSX.Element|null} Разметка блока.
 * @class
 */
function TabFeature({activeTab, item}) {
  return activeTab === 'tab_2'
    ? <OptionList list={item.features}/>
    : null;
}

export default TabFeature;
