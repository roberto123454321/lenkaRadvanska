import "./PhotoGalery.css";
import "../App.css";

const photos = ["1", "2", "3", "4", "5", "6"];

export default function VideoGalery() {
  return (
    <div id="photogalery" className="darker-background">
      <h1 className="page-title">Foto</h1>
      <div className="photo-galery">
        {photos.map((photo) => (
          <div className="photo-card">
            <img key={photo} src={`photos/${photo}.jpg`} />
          </div>
        ))}
      </div>
    </div>
  );
}
