import React from 'react';

function TabsPanel({activeTab, handleClick}) {
  return (
    <div className="tabs__panel">
      <button
        id="tab_1"
        type="button"
        className={activeTab === 'tab_1' ? 'tabs__switch tabs__switch--active' : 'tabs__switch'}
        onClick={handleClick}
      >Описание</button>
      <button
        id="tab_2"
        type="button"
        className={activeTab === 'tab_2' ? 'tabs__switch tabs__switch--active' : 'tabs__switch'}
        onClick={handleClick}
      >Характеристики</button>
      <button
        id="tab_3"
        type="button"
        className={activeTab === 'tab_3' ? 'tabs__switch tabs__switch--active' : 'tabs__switch'}
        onClick={handleClick}
      >Свойства</button>
    </div>
  );
}

export default TabsPanel;
