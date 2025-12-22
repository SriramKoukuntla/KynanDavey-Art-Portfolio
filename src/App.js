import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioSection from './components/PortfolioSection';
import TypographySection from './components/TypographySection';
import Footer from './components/Footer';
import IllustrativeWorks from './sections/IllustrativeWorks';
import CeramicWorks from './sections/CeramicWorks';
import OilPaintingWorks from './sections/OilPaintingWorks';
import AcrylicPaintingWorks from './sections/AcrylicPaintingWorks';
import GraphicAndGameDesign from './sections/GraphicAndGameDesign';

// Import Photography
import BirdsEating from './assets/Art/PhotographicAndPhotoManipulationWorks/BirdsEating.png';
import BirdsFlying from './assets/Art/PhotographicAndPhotoManipulationWorks/BirdsFlying.png';
import Branches from './assets/Art/PhotographicAndPhotoManipulationWorks/Branches.png';
import Eclipse from './assets/Art/PhotographicAndPhotoManipulationWorks/Eclipse.png';
import Flame from './assets/Art/PhotographicAndPhotoManipulationWorks/Flame.png';
import Graphiti1 from './assets/Art/PhotographicAndPhotoManipulationWorks/Graphiti1.png';
import Graphiti2 from './assets/Art/PhotographicAndPhotoManipulationWorks/Graphiti2.png';
import Lights from './assets/Art/PhotographicAndPhotoManipulationWorks/Lights.png';
import POSTMORTEM from './assets/Art/PhotographicAndPhotoManipulationWorks/POSTMORTEM.png';


function App() {
  useEffect(() => {
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 100);
  }, []);



  const photography = [
    BirdsEating,
    BirdsFlying,
    Branches,
    Eclipse,
    Flame,
    Graphiti1,
    Graphiti2,
    Lights,
    POSTMORTEM
  ];


  return (
    <div className="App">
      <Navbar />
      <Hero />
      
      <IllustrativeWorks />
      
      <CeramicWorks />
      
      
      <OilPaintingWorks />
      
      <AcrylicPaintingWorks />

      <GraphicAndGameDesign />


      <PortfolioSection
        id="photography"
        title="Photographic and Photo Manipulation Works"
        items={photography}
      />
      
      <TypographySection />
      
      
      <Footer />
    </div>
  );
}

export default App;


