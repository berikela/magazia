# Marwyvi - Project Context & Memory

## Project Overview
- **Project Name**: Marwyvi (formerly Magazia)
- **Type**: React e-commerce website
- **Location**: `C:\Users\berik\Desktop\magazia`
- **Status**: Active development

## Project Structure
```
magazia/
├── public/
│   ├── index.html (updated with Marwyvi branding)
│   └── hi.txt
├── src/
│   ├── App.js (main router with Header component)
│   ├── App.css (styling with professional design)
│   ├── index.js
│   ├── components/
│   │   ├── Header.js (professional dark header with gradient)
│   │   ├── ProductList.js (main product grid, updated branding)
│   │   └── ProductDetail.js (individual product pages)
│   └── data/
│       └── products.js (product data)
├── package.json
└── CLAUDE.md (this file)
```

## Recent Changes Made
1. **Rebranding from "Magazia" to "Marwyvi"**
   - Updated HTML title and meta description
   - Changed welcome message in ProductList component
   - Updated header branding

2. **Professional Header Implementation**
   - Created `src/components/Header.js`
   - Dark gradient background (#1a1a1a to #2d2d2d)
   - Professional typography with letter spacing
   - Added "Premium Online Store" tagline
   - Responsive design with max-width container
   - Built-in spacing (3rem margin-bottom)

3. **Styling Improvements**
   - Updated `src/App.css` for better spacing
   - Removed main App padding to let header extend full width
   - Added proper content container padding
   - Enhanced professional appearance

## Technical Details
- **Framework**: React with React Router
- **Styling**: CSS-in-JS for Header, external CSS for other components
- **Development Server**: `npm start` runs on http://localhost:3000
- **Main Routes**: 
  - `/` - ProductList component
  - `/product/:id` - ProductDetail component

## Component Architecture
- **App.js**: Main router with Header component at top
- **Header.js**: Professional header with gradient background and branding
- **ProductList.js**: Grid layout showing all products with "Welcome to Marwyvi"
- **ProductDetail.js**: Individual product view with back navigation

## Commands to Remember
- **Start development server**: `npm start`
- **Check if any lint/typecheck commands**: Need to verify with user

## Known Working Features
- React application compiles successfully
- All routes functional
- Professional header displays correctly
- Product grid layout working
- Responsive design implemented

## Design Style
- **Color Scheme**: Dark professional header, light content background
- **Typography**: Segoe UI font family, professional letter spacing
- **Layout**: Centered content with max-width containers
- **Spacing**: Proper margins and padding for professional appearance