import React from 'react';
import Title, {TitleSize, TitleLevel} from '../title/title.jsx';
import {Section, CardHeader, Category, Description} from './style.js';

/**
 * Компонент карточки из списка преимуществ.
 * @param {string} category Данные (props) о категории поступают из AdvantagesList.
 * @param {string} title Данные (props) о названии поступают из AdvantagesList.
 * @param {string} description Данные (props) об описании поступают из AdvantagesList.
 * @param {string} icon Данные (props) об иконке поступают из AdvantagesList.
 * @param {boolean} isNegative Данные (props) для выбора стиля поступают из AdvantagesList.
 * @returns {JSX.Element} Разметка карточки.
 * @class
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
