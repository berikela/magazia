import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 3;
  const totalPages = Math.ceil(products.length / productsPerPage);
  
  const startIndex = currentPage * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="product-list">
      <h1>Welcome to Marwyvi</h1>
      
      <div className="hero-section">
        <h2>Premium Online Store</h2>
        <p>Discover our curated collection of high-quality products</p>
      </div>

      <div className="products-container">
        <button 
          className="pagination-arrow prev-arrow side-arrow" 
          onClick={goToPrevPage}
          aria-label="Previous products"
        >
          &#8249;
        </button>
        
        <div className="products-grid">
          {currentProducts.map(product => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`} className="product-link">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">${product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <button 
          className="pagination-arrow next-arrow side-arrow" 
          onClick={goToNextPage}
          aria-label="Next products"
        >
          &#8250;
        </button>
      </div>
      
      <div className="page-indicator-container">
        <span className="page-indicator">
          {currentPage + 1} / {totalPages}
        </span>
      </div>

      <div className="features-section">
        <h2>Why Choose Marwyvi?</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Quality Products</h3>
            <p>We source only the finest materials and products for our customers.</p>
          </div>
          <div className="feature">
            <h3>Fast Shipping</h3>
            <p>Quick and reliable delivery straight to your doorstep.</p>
          </div>
          <div className="feature">
            <h3>Customer Support</h3>
            <p>24/7 support to help you with any questions or concerns.</p>
          </div>
        </div>
      </div>

      <div className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p>"Amazing quality and fast delivery. Highly recommended!"</p>
            <span>- Sarah M.</span>
          </div>
          <div className="testimonial">
            <p>"The customer service is exceptional. Will definitely shop again."</p>
            <span>- John D.</span>
          </div>
          <div className="testimonial">
            <p>"Great selection of products at competitive prices."</p>
            <span>- Emily R.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;