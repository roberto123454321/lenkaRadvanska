import "./PhotoGalery.css";
import "../App.css";

const photos = ["1", "2", "3", "4", "5", "6"];

export default function VideoGalery() {
  return (
    <div id="photo" className="darker-background">
      <h1 className="page-title">Foto</h1>
      <div className="photo-galery">
        {photos.map((photo) => (
          <div key={photo} className="photo-card">
            <a href={`photos/${photo}.jpg`} >
            <img src={`photos/${photo}.jpg`} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
