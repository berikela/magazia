import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-detail">
        <h2>Product not found</h2>
        <Link to="/" className="back-link">← Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <Link to="/" className="back-link">← Back to Products</Link>
      <div className="product-detail-content">
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-detail-image" />
        </div>
        <div className="product-info-container">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-detail-price">${product.price}</p>
          <div className="product-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>

      <div className="product-specifications">
        <h2>Product Specifications</h2>
        <div className="specs-grid">
          <div className="spec-item">
            <h4>Quality</h4>
            <p>Premium grade materials</p>
          </div>
          <div className="spec-item">
            <h4>Warranty</h4>
            <p>2 year manufacturer warranty</p>
          </div>
          <div className="spec-item">
            <h4>Shipping</h4>
            <p>Free shipping on orders over $50</p>
          </div>
          <div className="spec-item">
            <h4>Returns</h4>
            <p>30-day return policy</p>
          </div>
        </div>
      </div>

      <div className="related-products">
        <h2>You Might Also Like</h2>
        <div className="related-grid">
          {products.filter(p => p.id !== product.id).slice(0, 3).map(relatedProduct => (
            <div key={relatedProduct.id} className="related-item">
              <Link to={`/product/${relatedProduct.id}`}>
                <img src={relatedProduct.image} alt={relatedProduct.name} />
                <h4>{relatedProduct.name}</h4>
                <p>${relatedProduct.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="product-reviews">
        <h2>Customer Reviews</h2>
        <div className="reviews-container">
          <div className="review">
            <div className="review-header">
              <strong>Alex Johnson</strong>
              <span className="rating">★★★★★</span>
            </div>
            <p>Excellent product! Exactly as described and arrived quickly.</p>
          </div>
          <div className="review">
            <div className="review-header">
              <strong>Maria Garcia</strong>
              <span className="rating">★★★★☆</span>
            </div>
            <p>Good quality, though took a bit longer to ship than expected.</p>
          </div>
          <div className="review">
            <div className="review-header">
              <strong>David Chen</strong>
              <span className="rating">★★★★★</span>
            </div>
            <p>Amazing value for money. Will definitely order again!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;