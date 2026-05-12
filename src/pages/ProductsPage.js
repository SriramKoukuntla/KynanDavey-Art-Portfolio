import React from 'react';
import Footer from '../components/Footer';

const ProductsPage = () => {
  return (
    <>
      <section id="products" className="portfolio-section products-intro">
        <div className="container">
          <h2 className="section-title">Products</h2>
          <p className="products-placeholder">
            Product listings will appear here.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductsPage;
