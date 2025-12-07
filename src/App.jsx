import "./App.css";
import VideoGalery from "./components/VideoGalery.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import MusicGalery from "./components/MusicGalery.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="page-container">
        <VideoGalery />
        <MusicGalery />
      </div>
    </>
  );
}

export default App;
