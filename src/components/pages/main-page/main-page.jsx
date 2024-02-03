import React from 'react';
import About from '../../blocks/about/about.jsx';
import AdvantagesList from '../../blocks/advantages-list/advantages-list.jsx';
import setPageTitle from '../../utils/utils.js';

function MainPage({setPage, features}) {
  setPageTitle('Главная | Фермерский магазин');

  return (
    <>
      <About />
      <AdvantagesList setPage={setPage} features={features}/>
    </>
  );
}

export default MainPage;
