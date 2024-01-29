import React from 'react';
import AdvantageCard from '../../ui/advantage-card/advantage-card.jsx';
import Button from '../../ui/button/button.jsx';
import './style.scss';

function AdvantagesList({setPage, features}) {
  return features && features.length ? (
    <section className="advantages wrapper">
      <h2 className="visually-hidden">Преимущества фермерских продуктов</h2>
      <span className="advantages__slogan">Почему фермерские продукты лучше?</span>
        <ul className="advantages__list list">
          {features.map(feature => (
            <li className="list__item" key={feature.id}>
              <AdvantageCard {...feature}/>
            </li>
          ))}
        </ul>
      <Button classButton={'advantages__link'} dataButton={'catalog-page'} handleButton={setPage}>Купить</Button>
    </section>
  ) : null;
}

export default AdvantagesList;
