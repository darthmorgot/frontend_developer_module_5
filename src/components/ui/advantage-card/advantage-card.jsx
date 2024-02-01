import React from 'react';
import Title, {TitleSize, TitleLevel} from '../title/title.jsx';
import {Section, CardHeader, Category, Description} from './style.js';

// Карточка из списка преимуществ
function AdvantageCard({category, title, description, icon, isNegative}) {
  return (
    <Section
      $isNegative={isNegative}
      style={{backgroundImage: `url(${icon})`}}
    >
      <CardHeader $isNegative={isNegative}>
        <Category $isNegative={isNegative}>{category}</Category>
        <Title level={TitleLevel.H3} size={TitleSize.SMALL}>{title}</Title>
      </CardHeader>
      <Description dangerouslySetInnerHTML={{__html: description}} />
    </Section>
  );
}

export default AdvantageCard;
