import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PageWrapper from '@/components/layout/page-wrapper/page-wrapper';
import MainPage from '../pages/main-page/main-page.jsx';
import CatalogPage from '../pages/catalog-page/catalog-page.jsx';
import Error404 from '../pages/error404/error404.jsx';
import {AppRoute} from '@/AppRoute.js';
import ScrollToTop from '../ui/scroll-top/scroll-to-top.jsx';
import {GlobalStyle} from './style.js';
import products from '@/mocks/products.js';
import features from '@/mocks/features.js';

/**
 * Основной компонент проекта.
 * @returns {JSX.Element} Разметка страниц проекта.
 * @class
 */
export default function App() {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop/>
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper/>}>
            <Route index element={<MainPage features={features}/>}/>
            <Route path={AppRoute.BUY} element={<CatalogPage products={products}/>}/>
            <Route path={AppRoute.ERROR404} element={<Error404/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
