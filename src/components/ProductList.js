import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductList = () => {
  return (
    <div className="product-list">
      <h1>Welcome to Marwyvi</h1>
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
    </div>
  );
};

export default ProductList;