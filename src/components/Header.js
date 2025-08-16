import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <h1 style={titleStyle}>Marwyvi</h1>
        <p style={taglineStyle}>Premium Online Store</p>
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

const taglineStyle = {
  margin: 0,
  fontSize: '1.1rem',
  color: '#b0b0b0',
  fontWeight: '400',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
};

export default Header;