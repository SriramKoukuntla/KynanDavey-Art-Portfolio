# Kynan Davey - Art Portfolio Website

A modern, responsive portfolio website showcasing the artistic works of Kynan Davey.

## Features

- **Modern Design**: Clean, elegant design with a dark theme and gold accents
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Fade-in animations and smooth scrolling
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

No special prerequisites needed! Just a modern web browser.

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! The website is ready to use.

### Local Development

If you want to run a local server (recommended for development):

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js:**
```bash
npx http-server
```

Then open `http://localhost:8000` in your browser.

## File Structure

```
KynanDavey-Art-Portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## Customization

### Adding Your Images

Replace the placeholder images in the gallery sections:

1. Add your image files to an `images/` folder
2. Update the HTML in `index.html`:
   ```html
   <div class="gallery-item">
       <img src="images/your-image.jpg" alt="Description">
   </div>
   ```
3. Update the CSS in `styles.css` to style the images:
   ```css
   .gallery-item img {
       width: 100%;
       height: 100%;
       object-fit: cover;
   }
   ```

### Changing Colors

Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #1a1a1a;
    --accent-color: #d4af37;  /* Change this for accent color */
    --text-color: #f5f5f5;
    /* ... */
}
```

### Adding More Sections

1. Add a new section in `index.html`:
   ```html
   <section id="new-section" class="portfolio-section">
       <div class="container">
           <h2 class="section-title">New Section</h2>
           <!-- Your content here -->
       </div>
   </section>
   ```

2. Add a navigation link in the navbar:
   ```html
   <li><a href="#new-section" class="nav-link">New Section</a></li>
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

