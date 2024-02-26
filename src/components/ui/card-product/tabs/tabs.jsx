import {useState} from 'react';
import TabsPanel from '@/components/ui/card-product/tabs/tab-panel/tabs-panel.jsx';
import TabDescription from '@/components/ui/card-product/tabs/tab-description/tab-description.jsx';
import TabSpecification from '@/components/ui/card-product/tabs/tab-specification/tab-specification.jsx';
import TabFeature from '@/components/ui/card-product/tabs/tab-feature/tab-feature.jsx';
import {StyledTabs, TabsWrapper, TabsItem} from './style.js';

/**
 * Компонент блока вкладок на карточке товара.
 * @param {object} item Данные (props) о товаре поступают из CardProduct.
 * @returns {JSX.Element} Разметка блока вкладок.
 * @class
 */
function Tabs({item}) {
  const [activeTab, setActiveTab] = useState('tab_0');

  const handleClick = (e) => {
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
