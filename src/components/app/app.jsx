import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import "./style.scss";
import products from '../../mocks/products.js';
import features from '../../mocks/features.js';

export default function App() {
  return <PageWrapper products={products} features={features}/>;
}
