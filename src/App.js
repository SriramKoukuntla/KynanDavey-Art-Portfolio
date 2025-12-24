import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Typography from './sections/Typography';
import Contact from './components/Contact';
import Footer from './components/Footer';
import IllustrativeWorks from './sections/IllustrativeWorks';
import CeramicWorks from './sections/CeramicWorks';
import ThreeColumnPainting from './sections/ThreeColumnPainting';
import Photography from './sections/Photography';


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
    <div className="App">
      <Navbar />

      <Hero />
      

      <IllustrativeWorks />
      
      <CeramicWorks />
      
      
      <ThreeColumnPainting />

      <Photography />
      
      <Typography />
      
      <Contact />
      
      <Footer />
    </div>
  );
}

export default App;


