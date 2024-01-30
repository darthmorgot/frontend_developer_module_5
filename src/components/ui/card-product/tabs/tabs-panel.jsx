import {useState} from 'react';

function TabsPanel({activeTab, handleClick}) {
  const [buttons, setButton] = useState([
    {id: 'tab_0', name: 'Описание'},
    {id: 'tab_1', name: 'Характеристики'},
    {id: 'tab_2', name: 'Свойства'}
  ]);

  const createButtonPanel = buttons.map(button => (
    <button
      key={button.id}
      id={button.id}
      type="button"
      className={activeTab === button.id ? 'tabs__switch tabs__switch--active' : 'tabs__switch'}
      onClick={handleClick}
    >{button.name}</button>
  ));

  return (
    <div className="tabs__panel">
      {createButtonPanel}
    </div>
  );
}

export default TabsPanel;
