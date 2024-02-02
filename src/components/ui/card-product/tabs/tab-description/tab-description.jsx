import React from 'react';
import {Text, Price} from './style.js';

function TabDescription({activeTab, item}) {
  return activeTab === 'tab_0' ? <>
      <Text dangerouslySetInnerHTML={{__html: item.about}}/>
      <Price>{item.price} руб. / {item.weight} гр.</Price>
    </>
    : null;
}

export default TabDescription;
