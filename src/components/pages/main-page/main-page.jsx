import React from "react";
import About from '../../blocks/about/about.jsx';
import Advantages from '../../blocks/advantages/advantages.jsx';
import setPageTitle from '../../utils/utils.js';

function MainPage({setPage}) {
  setPageTitle('Главная | Фермерский магазин');

  return (
    <>
      <About />
      <Advantages setPage={setPage}/>
    </>
  );
}

export default MainPage;
