import React, {useState} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import MainPage from '../../pages/main-page/main-page';
import CatalogPage from '../../pages/catalog-page/catalog-page.jsx';
import {Main} from './style.js';

function PageWrapper({products, features}) {
  const [page, setPage] = useState('main-page');

  function handlePage(e) {
    setPage(e.target.dataset.page);
  }

  return (
    <>
      <Header page={page} setPage={handlePage}/>
      <Main>
        {page === 'main-page' ? <MainPage setPage={handlePage} features={features} /> : <CatalogPage products={products}/>}
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
