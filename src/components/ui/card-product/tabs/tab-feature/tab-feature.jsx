import React from 'react';
import {Dl, RowWrapper, Dt, Dd} from './style.js';

/**
 * Компонент блока со свойствами на карточке товара
 * @param activeTab props Данные об активной вкладке поступают из Tabs
 * @param item props Данные о продукте поступают из Tabs
 * @returns {JSX.Element|null} Разметка блока
 * @constructor
 */
function TabFeature({activeTab, item}) {
  return activeTab === 'tab_2'
    ? <Dl>
      <RowWrapper>
        <Dt>Энергетическая ценность:</Dt>
        <Dd>{item.features.energy_value}</Dd>
      </RowWrapper>
      <RowWrapper>
        <Dt>Пищевая ценность:</Dt>
        <Dd>{item.features.nutritional_value}</Dd>
      </RowWrapper>
    </Dl>
    : null;
}

export default TabFeature;
