import React from 'react';

function TabSpecification({activeTab, item}) {
  return activeTab === 'tab_1'
    ? <dl>
      <div>
        <dt>Масса:</dt>
        <dd>{item.spec.weight}</dd>
      </div>
      <div>
        <dt>Срок годности:</dt>
        <dd>{item.spec.expiration_date}</dd>
      </div>
      <div>
        <dt>Порода:</dt>
        <dd>{item.spec.breed}</dd>
      </div>
      <div>
        <dt>Место происхождения:</dt>
        <dd>{item.spec.place_origin}</dd>
      </div>
    </dl>
    : null;
}

export default TabSpecification;
