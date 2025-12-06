import coverImage from "../../public/cover.jpg";
import "./Hero.css"

export default function Hero() {
  return (
    <div id="hero" className="hero"> 
      <img src={coverImage} />
    </div>
  );
}
