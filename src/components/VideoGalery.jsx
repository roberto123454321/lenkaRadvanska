import VideoCard from "./VideoCard.jsx";
import "./VideoGalery.css";
import "../App.css";

const videos = [
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
