import "./PhotoGalery.css";
import "../App.css";
import { getBreakpointMobile } from "../Utils.js";


const isSmallScreen = window.innerWidth < parseInt(getBreakpointMobile());

// load only HQ (.jpg)
const photoPaths = Object.keys(
  import.meta.glob("/public/photos/*.jpg", {
    eager: true,
  })
);

export default function PhotoGalery() {
  return (
    <div id="photo" className="section-padding darker-background">
      <div className="photo-galery">
        {photoPaths.map((path, index) => {
          const fileName = path.split("/").pop(); // pic1.jpg
          const baseName = fileName.replace(".jpg", ""); // pic1

          const hq = `/photos/${baseName}.jpg`;
          const lq = `/photos/${baseName}lq.jpeg`;

          return (
            <div key={index} className="photo-card">
              <a href={hq}>
                <img
                  src={isSmallScreen ? lq : hq}
                  alt={baseName}
                  loading="lazy"
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
