import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioSection from './components/PortfolioSection';
import TypographySection from './components/TypographySection';
import Footer from './components/Footer';

// Import Illustrative Works
import CuteDucks from './assets/Art/IllustrativeWorks/CuteDucks.png';
import Eyes from './assets/Art/IllustrativeWorks/Eyes.png';
import Fractured from './assets/Art/IllustrativeWorks/Fractured.png';
import Jungle from './assets/Art/IllustrativeWorks/Jungle.png';
import PostIts from './assets/Art/IllustrativeWorks/PostIts.png';
import PowerRangers from './assets/Art/IllustrativeWorks/PowerRangers.png';

// Import Ceramic Works
import Cups from './assets/Art/CeramicWorks/Cups.png';
import Bottle from './assets/Art/CeramicWorks/Bottle.png';
import FrogsInTree from './assets/Art/CeramicWorks/FrogsInTree.png';
import FrogYoga from './assets/Art/CeramicWorks/FrogYoga.png';
import HeartBrokenFrog from './assets/Art/CeramicWorks/HeartBrokenFrog.png';
import Purfume from './assets/Art/CeramicWorks/Purfume.png';
import Sunflower from './assets/Art/CeramicWorks/Sunflower.png';
import Trunk from './assets/Art/CeramicWorks/Trunk.png';

// Import Oil Paintings
import Hunger from './assets/Art/OilPaintingWorks/Hunger.png';
import SelfPastNFuture from './assets/Art/OilPaintingWorks/SelfPastNFuture.png';

// Import Acrylic Paintings
import Blotches from './assets/Art/AcrylicPaintingWorks/Blotches.png';
import Landscape from './assets/Art/AcrylicPaintingWorks/Landscape.png';

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

// Import Graphic Design
import Joji from './assets/Art/GraphicDesignWorks/Joji.png';
import KendrickGoodKidMAAD from './assets/Art/GraphicDesignWorks/KendrickGoodKidMAAD.png';
import TameImpalla from './assets/Art/GraphicDesignWorks/TameImpalla.png';

// Import Game Design
import DigitalArt1 from './assets/Art/GameDesign&DigitalArt/DigitalArt1.png';
import DigitalArt2 from './assets/Art/GameDesign&DigitalArt/DigitalArt2.png';
import DigitalArt3 from './assets/Art/GameDesign&DigitalArt/DigitalArt3.png';

function App() {
  useEffect(() => {
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 100);
  }, []);

  // Image paths for each portfolio section
  const illustrativeWorks = [
    CuteDucks,
    Eyes,
    Fractured,
    Jungle,
    PostIts,
    PowerRangers
  ];

  const ceramicWorks = [
    Bottle,
    Cups,
    FrogsInTree,
    FrogYoga,
    HeartBrokenFrog,
    Purfume,
    Sunflower,
    Trunk
  ];

  const oilPaintings = [
    Hunger,
    SelfPastNFuture
  ];

  const acrylicPaintings = [
    Blotches,
    Landscape
  ];

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

  const graphicDesign = [
    Joji,
    KendrickGoodKidMAAD,
    TameImpalla
  ];

  const gameDesign = [
    DigitalArt1,
    DigitalArt2,
    DigitalArt3
  ];

  return (
    <div className="App">
      <Navbar />
      <Hero />
      
      <PortfolioSection
        id="illustrative"
        title="Illustrative Works"
        items={illustrativeWorks}
      />
      
      <PortfolioSection
        id="ceramic"
        title="Ceramic Works"
        items={ceramicWorks}
      />
      
      <PortfolioSection
        id="painting"
        title="Oil Painting Works"
        items={oilPaintings}
      />
      
      <PortfolioSection
        title="Acrylic Painting Works"
        items={acrylicPaintings}
      />
      
      <PortfolioSection
        id="photography"
        title="Photographic and Photo Manipulation Works"
        items={photography}
      />
      
      <TypographySection />
      
      <PortfolioSection
        id="graphic-design"
        title="Logo and Graphic Design Works"
        items={graphicDesign}
      />
      
      <PortfolioSection
        title="Graphic and Game Design Works"
        items={gameDesign}
      />
      
      <Footer />
    </div>
  );
}

export default App;


