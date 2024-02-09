import React from 'react';
import Title, {TitleSize, TitleLevel} from '../title/title.jsx';
import {Section, CardHeader, Category, Description} from './style.js';

/**
 * Компонент карточки из списка преимуществ
 * @param category props Данные о категории поступают из AdvantagesList
 * @param title props Данные о названии поступают из AdvantagesList
 * @param description props Данные об описании поступают из AdvantagesList
 * @param icon props Данные об иконке поступают из AdvantagesList
 * @param isNegative props Данные для выбора стиля поступают из AdvantagesList
 * @returns {JSX.Element} Разметка карточки
 * @constructor
 */
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
