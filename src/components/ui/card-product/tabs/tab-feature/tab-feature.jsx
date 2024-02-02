import React from 'react';
import {Dl, RowWrapper, Dt, Dd} from './style.js';

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
