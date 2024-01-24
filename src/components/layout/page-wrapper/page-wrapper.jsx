import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import MainPage from "../../pages/main-page/main-page";
import "./style.css";

function PageWrapper() {
  return (
    <>
      <Header />
      <main className="main-container">
        <h1>Farm shop</h1>
        <MainPage />
      </main>
      <Footer />
    </>
  );
}

export default PageWrapper;
