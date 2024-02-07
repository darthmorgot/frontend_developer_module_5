import React, {useEffect} from 'react';
import About from '../../blocks/about/about.jsx';
import AdvantagesList from '../../blocks/advantages-list/advantages-list.jsx';

/**
 * Компонент главной страницы сайта
 * @param setPage props Коллбэк поступает из PageWrapper
 * @param features props Данные для списка преимуществ поступает из PageWrapper
 * @returns {JSX.Element} Разметка главной страницы
 * @constructor
 */
function MainPage({setPage, features}) {
  useEffect(() => {
    document.title = 'Главная | Фермерский магазин';
  }, []);

  return (
    <>
      <About />
      <AdvantagesList setPage={setPage} features={features}/>
    </>
  );
}

export default MainPage;
