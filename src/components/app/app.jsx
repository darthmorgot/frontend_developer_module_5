import React from 'react';
import PageWrapper from '/src/components/layout/page-wrapper/page-wrapper';
import {GlobalStyle} from './style.js';
import products from '../../mocks/products.js';
import features from '../../mocks/features.js';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper products={products} features={features}/>
    </>
  );
}
