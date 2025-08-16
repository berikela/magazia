import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductList = () => {
  return (
    <div className="product-list">
      <h1>Welcome to Marwyvi</h1>
      
      <div className="hero-section">
        <h2>Premium Online Store</h2>
        <p>Discover our curated collection of high-quality products</p>
      </div>

      <div className="products-grid">
        {products.map(product => (
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