import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '@/components/layout/header/header.jsx';
import Footer from '@/components/layout/footer/footer.jsx';
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
