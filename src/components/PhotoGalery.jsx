import "./PhotoGalery.css";
import "../App.css";

const photos = Object.values(
  import.meta.glob("/public/photos/*.jpg", {
    eager: true,
    import: "default",
  })
);

export default function PhotoGalery() {
  return (
    <div id="photo" className="darker-background">
      <h1 className="page-title">Foto</h1>
      <div className="photo-galery">
        {photos.map((src, index) => (
          <div key={index} className="photo-card">
            <a href={src}>
              <img src={src} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
