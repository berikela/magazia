import React from 'react';

const AboutUs = () => {
  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>About Marwyvi</h1>
        
        <div style={sectionStyle}>
          <h2 style={subTitleStyle}>Our Story</h2>
          <p style={paragraphStyle}>
            Founded with a vision to redefine online shopping, Marwyvi represents the perfect fusion of 
            quality, innovation, and customer satisfaction. We believe that exceptional products deserve 
            an exceptional shopping experience, and that's exactly what we deliver to our valued customers 
            worldwide.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={subTitleStyle}>Our Mission</h2>
          <p style={paragraphStyle}>
            At Marwyvi, we're committed to curating a premium collection of products that enhance your 
            lifestyle. From cutting-edge technology to timeless classics, every item in our store is 
            carefully selected to meet our rigorous standards of quality, functionality, and design excellence.
          </p>
        </div>

        <div style={sectionStyle}>
          <h2 style={subTitleStyle}>Why Choose Marwyvi?</h2>
          <div style={featuresStyle}>
            <div style={featureStyle}>
              <h3 style={featureTitleStyle}>Premium Quality</h3>
              <p style={featureTextStyle}>
                Every product undergoes strict quality control to ensure you receive only the finest items.
              </p>
            </div>
            <div style={featureStyle}>
              <h3 style={featureTitleStyle}>Customer First</h3>
              <p style={featureTextStyle}>
                Your satisfaction is our priority. We provide exceptional customer service and support.
              </p>
            </div>
            <div style={featureStyle}>
              <h3 style={featureTitleStyle}>Innovation</h3>
              <p style={featureTextStyle}>
                We stay ahead of trends to bring you the latest and most innovative products on the market.
              </p>
            </div>
          </div>
        </div>

        <div style={sectionStyle}>
          <p style={closingStyle}>
            Join thousands of satisfied customers who have made Marwyvi their trusted shopping destination. 
            Experience the difference that quality and dedication make.
          </p>
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem',
  minHeight: '70vh'
};

const contentStyle = {
  backgroundColor: 'white',
  borderRadius: '8px',
  padding: '3rem',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  border: '1px solid #e0e0e0'
};

const titleStyle = {
  fontSize: '3rem',
  fontWeight: '300',
  color: '#1a1a1a',
  textAlign: 'center',
  marginBottom: '3rem',
  letterSpacing: '1px',
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
};

const sectionStyle = {
  marginBottom: '3rem'
};

const subTitleStyle = {
  fontSize: '1.8rem',
  fontWeight: '400',
  color: '#2d2d2d',
  marginBottom: '1rem',
  letterSpacing: '0.5px',
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
};

const paragraphStyle = {
  fontSize: '1.1rem',
  lineHeight: '1.8',
  color: '#4a4a4a',
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  textAlign: 'justify'
};

const featuresStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
  marginTop: '2rem'
};

const featureStyle = {
  padding: '2rem',
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
  border: '1px solid #e9ecef'
};

const featureTitleStyle = {
  fontSize: '1.3rem',
  fontWeight: '500',
  color: '#1a1a1a',
  marginBottom: '1rem',
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
};

const featureTextStyle = {
  fontSize: '1rem',
  lineHeight: '1.6',
  color: '#6c757d',
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
};

const closingStyle = {
  fontSize: '1.2rem',
  lineHeight: '1.7',
  color: '#2d2d2d',
  textAlign: 'center',
  fontStyle: 'italic',
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  padding: '2rem',
  backgroundColor: '#f8f9fa',
  borderRadius: '8px',
  border: '1px solid #e9ecef'
};

export default AboutUs;