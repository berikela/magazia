import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <h1 style={titleStyle}>
          <Link to="/" style={titleLinkStyle}>Marwyvi</Link>
        </h1>
        <p style={taglineStyle}>Premium Online Store</p>
        <nav style={navStyle}>
          <Link to="/" style={navLinkStyle}>Home</Link>
          <Link to="/about" style={navLinkStyle}>About Us</Link>
        </nav>
      </div>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#1a1a1a',
  background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
  color: 'white',
  padding: '2rem 0',
  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  borderBottom: '1px solid #333',
  marginBottom: '3rem'
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem',
  textAlign: 'center'
};

const titleStyle = {
  margin: 0,
  fontSize: '3rem',
  fontWeight: '300',
  letterSpacing: '2px',
  marginBottom: '0.5rem',
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
};

const titleLinkStyle = {
  color: 'inherit',
  textDecoration: 'none',
  cursor: 'pointer'
};

const taglineStyle = {
  margin: 0,
  fontSize: '1.1rem',
  color: '#b0b0b0',
  fontWeight: '400',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  marginBottom: '2rem'
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '3rem',
  marginTop: '1rem'
};

const navLinkStyle = {
  color: '#b0b0b0',
  textDecoration: 'none',
  fontSize: '1.1rem',
  fontWeight: '400',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  transition: 'all 0.3s ease',
  border: '1px solid transparent'
};

export default Header;