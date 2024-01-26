import React from 'react';

function CardProduct({products}) {
  return (
    products.map(item => (
      <li className="products-list__item" key={item.id}>
        <div className="products__card card">
          <h2 className="card__title">{item.title}</h2>
          <img src={item.image} width="248" height="248" alt="Картинка товара"
               className="card__image"/>
          <div className="card__tabs tabs">
            <div className="tabs__panel">
              <button type="button" className="tabs__switch tabs__switch--active">Описание</button>
              <button type="button" className="tabs__switch">Характеристики</button>
              <button type="button" className="tabs__switch">Свойства</button>
            </div>
            <div className="tabs__wrapper">
              <div className="tabs__item tabs__item--description tabs__item--active">
                <p>{item.about}</p>
                <p>{item.price} руб. / {item.weight} гр.</p>
              </div>
              <div className="tabs__item tabs__item--specifications">
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
              <div className="tabs__item tabs__item--features">
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
            </div>
          </div>
        </div>
      </li>
    ))
  );
}

export default CardProduct;
