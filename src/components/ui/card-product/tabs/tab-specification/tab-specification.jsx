import React from 'react';
import {Dl, RowWrapper, Dt, Dd} from './style.js';

/**
 * Компонент вкладки с характеристиками товара
 * @param activeTab props Данные об активной вкладке поступают из Tabs
 * @param item props Данные о товаре поступают из Tabs
 * @returns {JSX.Element|null} Разметка вкладки
 * @constructor
 */
function TabSpecification({activeTab, item}) {
  return activeTab === 'tab_1'
    ? <Dl>
      <RowWrapper>
        <Dt>Масса:</Dt>
        <Dd>{item.spec.weight}</Dd>
      </RowWrapper>
      <RowWrapper>
        <Dt>Срок годности:</Dt>
        <Dd>{item.spec.expiration_date}</Dd>
      </RowWrapper>
      {
        item.spec.breed
        ? <RowWrapper>
            <Dt>Порода:</Dt>
            <Dd>{item.spec.breed}</Dd>
          </RowWrapper>
        : null
      }
      <RowWrapper>
        <Dt>Место происхождения:</Dt>
        <Dd>{item.spec.place_origin}</Dd>
      </RowWrapper>
    </Dl>
    : null;
}

export default TabSpecification;
