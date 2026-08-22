import "./App.css";
import VideoGalery from "./components/VideoGalery.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import MusicGalery from "./components/MusicGalery.jsx";
import PhotoGalery from "./components/PhotoGalery.jsx";
import Bio from "./components/Bio.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Tyrad from "./components/Tyrad.jsx";
import { useEffect } from 'react';


function App() {
useEffect(() => {
    if (window.location.pathname === '/tyrad') {
      setTimeout(() => {
        const element = document.getElementById('tyrad');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }      
      }, 1000);
    }
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <div className="page-container">
        <Tyrad />
        <MusicGalery />
        <VideoGalery />
        <PhotoGalery />
        <Bio />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
