import React from 'react';
import Title, {TitleLevel, TitleSize} from '../../ui/title/title.jsx';
import {TitleErrorWrapper} from './style.js';
import TitlePage from '../../ui/title-page/title-page.jsx';

/**
 * Компонент страницы с ошибкой 404
 * @returns {JSX.Element} Разметка страницы
 * @constructor
 */
function Error404() {
  return (
    <>
      <TitlePage namePage={'Фермерский магазин'}/>
      <TitleErrorWrapper>
        <Title level={TitleLevel.H1} size={TitleSize.BIG}>Ошибка 404. Страница не существует.</Title>
      </TitleErrorWrapper>
    </>
  );
}

export default Error404;
