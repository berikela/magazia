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

4. **Website Depth Enhancement**
   - Added scrollable content sections to ProductList:
     * Hero section with store description
     * Features section highlighting store benefits
     * Customer testimonials section
   - Enhanced ProductDetail pages with additional sections:
     * Product specifications grid
     * Related products recommendations
     * Customer reviews section
   - Created simplistic Footer component with:
     * Company information and links
     * Quick navigation links
     * Customer service links
     * Social media links
     * Professional dark gradient design matching header
   - Added comprehensive CSS styling for all new sections
   - Implemented responsive design for mobile devices

## Technical Details
- **Framework**: React with React Router
- **Styling**: CSS-in-JS for Header, external CSS for other components
- **Development Server**: `npm start` runs on http://localhost:3000
- **Main Routes**: 
  - `/` - ProductList component
  - `/product/:id` - ProductDetail component

## Component Architecture
- **App.js**: Main router with Header component at top and Footer at bottom
- **Header.js**: Professional header with gradient background and branding
- **ProductList.js**: Enhanced grid layout with hero section, features, and testimonials
- **ProductDetail.js**: Individual product view with specifications, related products, and reviews
- **Footer.js**: Simplistic footer with links and company information

## Commands to Remember
- **Start development server**: `npm start` (use `PORT=3001 npm start` if port 3000 is occupied)
- **Quick verification**: Application should compile successfully and be accessible at http://localhost:3000 or http://localhost:3001
- **Check if any lint/typecheck commands**: Need to verify with user

## Quick Reference - File Locations
- **Main Components**: `src/components/` (Header.js, Footer.js, ProductList.js, ProductDetail.js, AboutUs.js)
- **Styling**: `src/App.css` (comprehensive styles for all components and sections)
- **Data**: `src/data/products.js`
- **Router**: `src/App.js` (includes Header and Footer on all pages)
- **Public**: `public/index.html` (Marwyvi branding)

## Development Workflow
- **Quality Assurance**: After every modification and improvement to the code, verify it's working properly by testing the application. If any issues are found, fix them immediately to maintain functionality.

## Efficient Session Management
- **Quick Status Check**: Always start new sessions by running `npm start` (or `PORT=3001 npm start` if port 3000 is occupied) to verify the application works
- **Avoid Redundant Analysis**: The project structure and components are well-documented above - reference this documentation instead of re-reading all files
- **Resource Optimization**: 
  - Only read files when making specific changes
  - Use existing component patterns and styles
  - Leverage the documented architecture for quick understanding
- **Fast Development**: 
  - Components are modular and well-structured
  - CSS classes are organized and documented
  - Footer and Header components are reusable across pages

## Known Working Features
- React application compiles successfully
- All routes functional
- Professional header displays correctly
- Product grid layout working
- Responsive design implemented

## Design Style
- **Color Scheme**: Dark professional header/footer (#1a1a1a to #2d2d2d gradient), light content background (#f5f5f5)
- **Typography**: Segoe UI font family, professional letter spacing
- **Layout**: Centered content with max-width containers (1200px)
- **Spacing**: Proper margins and padding for professional appearance
- **Components**: Consistent card design with border-radius: 12px and box-shadow
- **Colors**: Primary red (#e74c3c), success green (#27ae60), blue accent (#3498db)

## Session Best Practices for Claude
1. **Start with verification**: Run `npm start` or `PORT=3001 npm start` to confirm working state
2. **Reference this documentation**: Use the detailed structure above instead of re-reading files
3. **Trust existing architecture**: Components are modular and well-tested
4. **Make targeted changes**: Only read/modify files that need specific updates
5. **Use existing patterns**: Follow established CSS classes and component structures
6. **Quick testing**: After changes, verify with a simple npm start check