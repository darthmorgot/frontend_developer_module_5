import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import MainPage from "../../pages/main-page/main-page";
import CatalogPage from '../../pages/catalog-page/catalog-page.jsx';

function PageWrapper() {
  return (
    <>
      <Header />
      <main className="main main-container">
        {/*<MainPage />*/}
        <CatalogPage />
      </main>
      <Footer />
    </>
  );
}

export default PageWrapper;
