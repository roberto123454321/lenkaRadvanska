import VideoCard from "./VideoCard.jsx";
import "./VideoGalery.css";

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
    <>
      <h1 className="page-title">Video</h1>
      <div id="videogalery" className="video-galery">
        {videos.map((url) => (
          <VideoCard key={url} url={url} />
        ))}
      </div>
    </>
  );
}
