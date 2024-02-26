import React from 'react';
import OptionList from '@/components/ui/card-product/tabs/option-list/option-list.jsx';

/**
 * Компонент вкладки с характеристиками товара.
 * @param {string} activeTab Данные (props) об активной вкладке поступают из Tabs.
 * @param {object} item Данные (props) о товаре поступают из Tabs.
 * @returns {JSX.Element|null} Разметка вкладки.
 * @class
 */
function TabSpecification({activeTab, item}) {
  return activeTab === 'tab_1'
    ? <OptionList list={item.spec}/>
    : null;
}

export default TabSpecification;
