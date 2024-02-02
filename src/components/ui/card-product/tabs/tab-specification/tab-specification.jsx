import React from 'react';
import {Dl, RowWrapper, Dt, Dd} from './style.js';

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
      <RowWrapper>
        <Dt>Порода:</Dt>
        <Dd>{item.spec.breed}</Dd>
      </RowWrapper>
      <RowWrapper>
        <Dt>Место происхождения:</Dt>
        <Dd>{item.spec.place_origin}</Dd>
      </RowWrapper>
    </Dl>
    : null;
}

export default TabSpecification;
