import React from 'react';
import {StyledTabsPanel, ButtonTabsPanel} from './style.js';

/**
 * Компонент панели с кнопками вкладок на карточке товара
 * @param activeTab props Данные об активной вкладке поступают из Tabs
 * @param handleClick props Коллбэк поступает из Tabs
 * @returns {JSX.Element} Разметка панели
 * @constructor
 */
function TabsPanel({activeTab, handleClick}) {
  const buttonsTabsPanel = [
    {id: 'tab_0', name: 'Описание'},
    {id: 'tab_1', name: 'Характеристики'},
    {id: 'tab_2', name: 'Свойства'}
  ];

  return (
    <StyledTabsPanel>
      {buttonsTabsPanel.map(button => (
        <ButtonTabsPanel
          key={button.id}
          id={button.id}
          type='button'
          className={activeTab === button.id ? 'active' : null}
          onClick={handleClick}
        >{button.name}</ButtonTabsPanel>
      ))}
    </StyledTabsPanel>
  );
}

export default TabsPanel;
