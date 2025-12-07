import "./MusicGalery.css";

const albums = [
  {
    title: "Žalmy",
    img: "/zalmy.png",
    spotify: "https://open.spotify.com/album/0hL4SavLzJRLXTOBCpPgPP?si=VDfUDORMQrOkNvDvspmykw"
  },
  // {
  //   title: "Žalmy2",
  //   img: "/zalmy.png",
  //   spotify: "#"
  // },
];

export default function MusicGalery() {
  return (
      <div className="music" id="music">
        <h1 className="page-title">Hudba</h1>
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
                    <img src="spotify.svg" className="icon" />
                  </div>
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>
  );
}
