import React from 'react';
import Title, {TitleSize, Heading} from '../title/title.jsx';
import './style.scss';

// Карточка из списка преимуществ
function AdvantageCard({category, title, description, icon, isNegative}) {
  return (
    <section
      className={`advantage-card${isNegative ? " advantage-card--negative" : ""}`}
      style={{backgroundImage: `url(${icon})`}}
    >
      <div className="advantage-card__header">
        <span
          className={`advantage-card__category${isNegative ? " advantage-card__category--negative" : ""}`}
        >
          {category}
        </span>
        <Title heading={Heading.H3} size={TitleSize.SMALL}>{title}</Title>
      </div>
      <p
        className="advantage-card__description"
        dangerouslySetInnerHTML={{__html: description}}
      />
    </section>
  );
}

export default AdvantageCard;
