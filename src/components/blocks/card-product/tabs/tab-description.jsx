import React from 'react';

function TabDescription({activeTab, item}) {
  return activeTab === 'tab_0' ? <>
      <p>{item.about}</p>
      <p>{item.price} руб. / {item.weight} гр.</p>
    </>
    : null;
}

export default TabDescription;
