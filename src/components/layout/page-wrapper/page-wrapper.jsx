import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import {Main} from './style.js';

/**
 * Компонент обертка для страниц сайта.
 * @returns {JSX.Element} Разметка страницы.
 * @class
 */
function PageWrapper() {
  return (
    <>
      <Header/>
      <Main>
        <Outlet/>
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
