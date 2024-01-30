import {useState} from 'react';
import TabsPanel from './tabs-panel.jsx';
import TabDescription from './tab-description.jsx';
import TabSpecification from './tab-specification.jsx';
import TabFeature from './tab-feature.jsx';
import './style.scss';

function TabsData({item}) {
  const [activeTab, setActiveTab] = useState('tab_0');

  function handleClick(e) {
    setActiveTab(e.target.id);
  }

  return (
    <div className="card__tabs tabs">
      <TabsPanel activeTab={activeTab} handleClick={handleClick} />
      <div className="tabs__wrapper">
        <div className="tabs__item">
          <TabDescription activeTab={activeTab} item={item}/>
          <TabSpecification activeTab={activeTab} item={item}/>
          <TabFeature activeTab={activeTab} item={item}/>
        </div>
      </div>
    </div>
  );
}

export default TabsData;
