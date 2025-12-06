import "./App.css";
import VideoGalery from "./components/VideoGalery.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="page-container">
        <VideoGalery />
      </div>
    </>
  );
}

export default App;
