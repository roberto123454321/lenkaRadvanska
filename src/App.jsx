import "./App.css";
import VideoGalery from "./components/VideoGalery.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import MusicGalery from "./components/MusicGalery.jsx";
import PhotoGalery from "./components/PhotoGalery.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="page-container">
        <MusicGalery />
        <VideoGalery />
        <PhotoGalery />
      </div>
    </>
  );
}

export default App;
