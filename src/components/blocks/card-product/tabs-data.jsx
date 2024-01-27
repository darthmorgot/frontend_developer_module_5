import {useState} from 'react';

function TabsData({item}) {
  const [activeTab, setActiveTab] = useState('tab_1');

  function handleClick(e) {
    setActiveTab(e.target.id);
  }

  return (
    <div className="card__tabs tabs">
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
      <div className="tabs__wrapper">
        {
          activeTab === 'tab_1'
            ? <div className="tabs__item tabs__item--description tabs__item--active">
              <p>{item.about}</p>
              <p>{item.price} руб. / {item.weight} гр.</p>
            </div>
            : null
        }
        {
          activeTab === 'tab_2'
            ? <div className="tabs__item tabs__item--specifications">
              <dl>
                <div>
                  <dt>Масса:</dt>
                  <dd>{item.spec.weight}</dd>
                </div>
                <div>
                  <dt>Срок годности:</dt>
                  <dd>{item.spec.expiration_date}</dd>
                </div>
                <div>
                  <dt>Порода:</dt>
                  <dd>{item.spec.breed}</dd>
                </div>
                <div>
                  <dt>Место происхождения:</dt>
                  <dd>{item.spec.place_origin}</dd>
                </div>
              </dl>
            </div>

            : null
        }
        {
          activeTab === 'tab_3'
            ? <div className="tabs__item tabs__item--features">
              <dl>
                <div>
                  <dt>Энергетическая ценность:</dt>
                  <dd>{item.features.energy_value}</dd>
                </div>
                <div>
                  <dt>Пищевая ценность:</dt>
                  <dd>{item.features.nutritional_value}</dd>
                </div>
              </dl>
            </div>
            : null
        }
      </div>
    </div>
  );
}

export default TabsData;
