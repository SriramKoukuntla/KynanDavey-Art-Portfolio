import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ArtPage from './pages/ArtPage';
import ProductsPage from './pages/ProductsPage';
import Contact from './components/Contact';
import Footer from './sections/Footer';

function App() {
  useEffect(() => {
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 100);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/art" element={<ArtPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </div>
      <Contact/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
