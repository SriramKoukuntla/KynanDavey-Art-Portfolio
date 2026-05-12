import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scrollToSection } from '../utils/scrollToSection';
import { NAV_LINKS } from '../constants/navigation';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const currentNavSection =
      location.pathname === '/art'
        ? 'portfolio'
        : location.pathname === '/products'
          ? 'products'
          : 'home';

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      setActiveSection(currentNavSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const getNavHref = (sectionId) => {
    if (sectionId === 'home') {
      return location.pathname === '/' ? '#home' : '/';
    }
    if (sectionId === 'portfolio') {
      return '/art';
    }
    if (sectionId === 'products') {
      return '/products';
    }
    return `#${sectionId}`;
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (sectionId === 'home') {
      if (location.pathname === '/') {
        scrollToSection('home');
      } else {
        navigate('/');
      }
      setIsMenuOpen(false);
      return;
    }
    if (sectionId === 'portfolio') {
      navigate('/art');
      setIsMenuOpen(false);
      return;
    }
    if (sectionId === 'products') {
      navigate('/products');
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
          Kynan Davey
        </Link>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
