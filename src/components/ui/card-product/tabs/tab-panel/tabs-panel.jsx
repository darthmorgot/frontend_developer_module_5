import {useState} from 'react';
import {StyledTabsPanel, ButtonTabsPanel} from './style.js';

function TabsPanel({activeTab, handleClick}) {
  const [buttons, setButton] = useState([
    {id: 'tab_0', name: 'Описание'},
    {id: 'tab_1', name: 'Характеристики'},
    {id: 'tab_2', name: 'Свойства'}
  ]);

  const createButtonPanel = buttons.map(button => (
    <ButtonTabsPanel
      key={button.id}
      id={button.id}
      type="button"
      className={activeTab === button.id ? 'active' : null}
      onClick={handleClick}
    >{button.name}</ButtonTabsPanel>
  ));

  return (
    <StyledTabsPanel>
      {createButtonPanel}
    </StyledTabsPanel>
  );
}

export default TabsPanel;
