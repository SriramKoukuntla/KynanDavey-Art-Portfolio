# Kynan Davey - Art Portfolio Website

A modern, responsive React portfolio website showcasing the artistic works of Kynan Davey.

## Features

- **React-Based**: Built with React for modern, maintainable code
- **Modern Design**: Clean, elegant design with a dark theme and gold accents
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Fade-in animations and smooth scrolling using React hooks
- **Component-Based**: Modular React components for easy maintenance
- **Portfolio Sections**:
  - Illustrative Works
  - Ceramic Works
  - Oil Painting Works
  - Acrylic Painting Works
  - Photographic and Photo Manipulation Works
  - Typographic and Card Design Works
  - Logo and Graphic Design Works
  - Graphic and Game Design Works

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

The page will reload automatically when you make changes.

### Building for Production

To create a production build:

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## File Structure

```
KynanDavey-Art-Portfolio/
│
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/        # React components
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── Gallery.js
│   │   ├── PortfolioSection.js
│   │   ├── TypographySection.js
│   │   └── Footer.js
│   ├── App.js              # Main App component
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## Customization

### Adding Your Images

Replace the placeholder images in the gallery sections:

1. Add your image files to `public/images/` folder
2. Update the Gallery component or PortfolioSection items:
   ```jsx
   <PortfolioSection
     id="illustrative"
     title="Illustrative Works"
     items={[
       { src: '/images/illustration1.jpg', alt: 'Description' },
       { src: '/images/illustration2.jpg', alt: 'Description' }
     ]}
   />
   ```

3. Update the Gallery component to render images:
   ```jsx
   <img src={item.src} alt={item.alt} />
   ```

### Changing Colors

Edit the CSS variables in `src/index.css`:
```css
:root {
    --primary-color: #1a1a1a;
    --accent-color: #d4af37;  /* Change this for accent color */
    --text-color: #f5f5f5;
    /* ... */
}
```

### Adding More Sections

1. Add a new PortfolioSection in `src/App.js`:
   ```jsx
   <PortfolioSection
     id="new-section"
     title="New Section"
     items={['Item 1', 'Item 2']}
   />
   ```

2. Add a navigation link in `src/components/Navbar.js`:
   ```jsx
   { id: 'new-section', label: 'New Section' }
   ```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for Kynan Davey's portfolio.

## Contact

For questions or suggestions, please contact Kynan Davey.

