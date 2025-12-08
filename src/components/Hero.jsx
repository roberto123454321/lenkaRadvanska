import React, { useState, useEffect } from "react";
import coverImage from "../../public/cover1.jpg";
import coverImage2 from "../../public/cover2.jpg";
import coverImage3 from "../../public/cover3.jpg";
import "./Hero.css";

export default function Hero() {
  const divs = [
    <a href="#video">
      <div className="article dark">
        <h3>Moja tvorba</h3>
        <p>Objavte videá s piesňami, v ktorých sa žalmové slová menia na jemné, meditáciou naplnené melódie.</p>
      </div>
      <img src={coverImage} />
    </a>,

    <a href="#music">
      <div className="article dark">
        <h3>CD Žalmy</h3>
        <p>vypočuť</p>
      </div>
      <img src={coverImage2} />
    </a>,

    <>
      <div className="article light">
        <h3>Nové CD</h3>
        {/* <p>Čoskoro sa môžete tešiť na moje nové CD</p> */}
        <p>V tichu vznikajú nové piesne. Teším sa, že ich čoskoro budete môcť počuť.</p>
      </div>
      <img src={coverImage3} />
    </>,
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);               // start fade-out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % divs.length);
        setFade(true);              // fade-in new div
      }, 500); // match fade-out duration
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fade-wrapper ${fade ? "fade-in" : "fade-out"}`}>
      <div id="hero" className="hero">
        {divs[index]}
      </div>
    </div>
  );
}
