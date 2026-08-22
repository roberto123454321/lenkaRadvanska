import VideoCard from "./VideoCard.jsx";
import "./VideoGalery.css";
import "../App.css";

// youtube video links. e.g. www.youtube.com/embed/N6lYuvPCgpM
const videos = [
  "N6lYuvPCgpM",
  "7afn7GkKzSI",
  "YU8bZVCbVeg",
  "CmN4jJCknF4",
  "XQ3u7AKnzfQ",
  "LwgQ2MArSnw",
  "zXpiN_EYUHw",
  "O0qaUXUXlUU",
];

export default function VideoGalery() {
  return (
    <div id="video" className="section-padding lighter-background">
      <div className="video-galery">
        {videos.map((url) => (
          <VideoCard key={url} url={url} />
        ))}
      </div>
    </div>
  );
}
