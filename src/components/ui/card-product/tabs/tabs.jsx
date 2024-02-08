import {useState} from 'react';
import TabsPanel from './tab-panel/tabs-panel.jsx';
import TabDescription from './tab-description/tab-description.jsx';
import TabSpecification from './tab-specification/tab-specification.jsx';
import TabFeature from './tab-feature/tab-feature.jsx';
import {StyledTabs, TabsWrapper, TabsItem} from './style.js';

/**
 * Компонент блока вкладок на карточке товара
 * @param item props Данные о товаре поступают из CardProduct
 * @returns {JSX.Element} Разметка блока вкладок
 * @constructor
 */
function Tabs({item}) {
  const [activeTab, setActiveTab] = useState('tab_0');

  function handleClick(e) {
    setActiveTab(e.target.id);
  }

  return (
    <StyledTabs>
      <TabsPanel activeTab={activeTab} handleClick={handleClick} />
      <TabsWrapper>
        <TabsItem>
          <TabDescription activeTab={activeTab} item={item}/>
          <TabSpecification activeTab={activeTab} item={item}/>
          <TabFeature activeTab={activeTab} item={item}/>
        </TabsItem>
      </TabsWrapper>
    </StyledTabs>
  );
}

export default Tabs;
