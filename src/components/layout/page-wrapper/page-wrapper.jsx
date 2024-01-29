import React, {useState} from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import MainPage from "../../pages/main-page/main-page";
import CatalogPage from '../../pages/catalog-page/catalog-page.jsx';

function PageWrapper({products, features}) {
  const [page, setPage] = useState('main-page');

  function handlePage(e) {
    setPage(e.target.dataset.page);
  }

  return (
    <>
      <Header page={page} setPage={handlePage}/>
      <main className="main main-container">
        {page === 'main-page' ? <MainPage setPage={handlePage} features={features} /> : <CatalogPage products={products}/>}
      </main>
      <Footer />
    </>
  );
}

export default PageWrapper;
