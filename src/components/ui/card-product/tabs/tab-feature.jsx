import React from 'react';

function TabFeature({activeTab, item}) {
  return activeTab === 'tab_2'
    ? <dl>
      <div>
        <dt>Энергетическая ценность:</dt>
        <dd>{item.features.energy_value}</dd>
      </div>
      <div>
        <dt>Пищевая ценность:</dt>
        <dd>{item.features.nutritional_value}</dd>
      </div>
    </dl>
    : null;
}

export default TabFeature;
