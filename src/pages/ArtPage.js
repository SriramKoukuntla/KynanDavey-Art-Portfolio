import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import IllustrativeWorks from '../sections/IllustrativeWorks';
import CeramicWorks from '../sections/CeramicWorks';
import ThreeColumnPainting from '../sections/ThreeColumnPainting';
import Photography from '../sections/Photography';
import Typography from '../sections/Typography';
import { scrollToSection } from '../utils/scrollToSection';

const ArtPage = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace(/^#/, '');
    if (hash) {
      const timer = window.setTimeout(() => scrollToSection(hash), 50);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash, location.key]);

  return (
    <>
      <IllustrativeWorks />
      <CeramicWorks />
      <ThreeColumnPainting />
      <Photography />
      <Typography />
    </>
  );
};

export default ArtPage;
