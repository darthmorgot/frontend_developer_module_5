import React from 'react';
import Title, {TitleSize, Heading} from '../../ui/title/title.jsx';
import './style.scss';

function About() {
  return (
    <section className="about">
      <div className="about__wrapper wrapper">
        <div className="about__info">
          <Title heading={Heading.H1} size={TitleSize.BIG}>Магазин фермерских продуктов с доставкой</Title>
          <p className="about__description">Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за
            день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально
            свежими.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
