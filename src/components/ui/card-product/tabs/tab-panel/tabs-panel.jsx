import React from 'react';
import {StyledTabsPanel, ButtonTabsPanel} from './style.js';

/**
 * Компонент панели с кнопками вкладок на карточке товара.
 * @param {string} activeTab Данные (props) об активной вкладке поступают из Tabs.
 * @param {Function} handleClick Коллбэк (props) поступает из Tabs.
 * @returns {JSX.Element} Разметка панели.
 * @class
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
