import "./MusicGalery.css";
import "../App.css";

const albums = [
  {
    title: "Žalmy",
    img: "/zalmy.png",
    spotify: "https://open.spotify.com/album/0hL4SavLzJRLXTOBCpPgPP?si=VDfUDORMQrOkNvDvspmykw",
    applemusic: "https://music.apple.com/sk/artist/lenka-radvansk%C3%A1/1762076065"
  },
  // {
  //   title: "Žalmy2",
  //   img: "/zalmy.png",
  //   spotify: "#"
  // },
];

export default function MusicGalery() {
  return (
    <div className="section-padding darker-background" id="music">
      <div id="musicgalery" className="music-galery">
        {albums.map((album) => (
          <div key={album.title} className="album-card">
            <a href={album.spotify}>
              <div className="album-image-wrapper">
                <img
                  src={album.img}
                  alt={album.title}
                  className="album-image"
                />
              </div>
              <div className="album-content">
                <h2 className="album-title">{album.title}</h2>
                <div className="album-icons">
                  <a href={album.spotify}>
                    <img src="spotify.svg" className="icon" />
                  </a>
                  <a href={album.applemusic}>
                    <img src="appleMusic.svg" className="icon icon-apple" />
                  </a>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
