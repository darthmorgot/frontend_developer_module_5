import React from 'react';
import About from '../../blocks/about/about.jsx';
import AdvantagesList from '../../blocks/advantages-list/advantages-list.jsx';
import TitlePage from '../../ui/title-page/title-page.jsx';

/**
 * Компонент главной страницы сайта
 * @param features props Данные для списка преимуществ поступает из PageWrapper
 * @returns {JSX.Element} Разметка главной страницы
 * @constructor
 */
function MainPage({features}) {
  return (
    <>
      <TitlePage namePage={'Главная | Фермерский магазин'}/>
      <About />
      <AdvantagesList features={features}/>
    </>
  );
}

export default MainPage;
