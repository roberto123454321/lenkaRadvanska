import coverImage from "../../public/cover.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <div id="hero" className="hero">
      <div className="article">
        <h3>Nové CD</h3>
        <p>Čoskoro sa môžete tešiť na nové CD.</p>
      </div>
      <img src={coverImage} />
    </div>
  );
}
