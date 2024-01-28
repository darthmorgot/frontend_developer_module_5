import React from 'react';
import Button from '../../ui/button/button.jsx';
import './style.scss';

function Advantages({setPage}) {
  return (
    <section className="advantages wrapper">
      <h2 className="visually-hidden">Преимущества фермерских продуктов</h2>
      <span className="advantages__slogan">Почему фермерские продукты лучше?</span>
      <div className="advantages__lists">
        <ul className="advantages__list list">
          <li className="list__item list__item--good">
            <div className="list__header list__header--margin-left">
              <span className="list__category">Фермерские продукты</span>
              <h3 className="list__title">Еда намного вкуснее</h3>
            </div>
            <p className="list__description">Домашняя колбаса из мяса, соли и специй и колбаса <br/> из магазина — два
              настолько разных продукта, <br/> что они даже не родственники</p>
          </li>
          <li className="list__item list__item--good">
            <div className="list__header">
              <span className="list__category">Фермерские продукты</span>
              <h3 className="list__title">Натуральные продукты</h3>
            </div>
            <p className="list__description">Поставляем местные органические продукты выращенные без пестицидов и
              химических удобрений.</p>
          </li>
        </ul>
        <ul className="advantages__list list">
          <li className="list__item list__item--bad">
            <div className="list__header">
              <span className="list__category">Магазинные продукты</span>
              <h3 className="list__title">Просроченные продукты</h3>
            </div>
            <p className="list__description">Из-за большого количество товара сотрудники магазинов не успевают
              своевременно производить замену товара</p>
          </li>
          <li className="list__item list__item--bad">
            <div className="list__header">
              <span className="list__category">Магазинные продукты</span>
              <h3 className="list__title">Некачественное мясо</h3>
            </div>
            <p className="list__description">Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных
              жиров, консервантов</p>
          </li>
        </ul>
      </div>
      <Button classButton={'advantages__link'} dataButton={'catalog-page'} handleButton={setPage}/>
    </section>
  );
}

export default Advantages;
