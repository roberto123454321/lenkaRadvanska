import React, { useState, useEffect } from "react";
import coverImage from "../../public/cover1.jpg";
import coverImage2 from "../../public/cover2.jpg";
import coverImage3 from "../../public/cover3.jpg";
import "./Hero.css";

export default function Hero() {
  const divs = [
    <a href="#video">
      <div className="article pos1 dark">
        {/* <h3>Moja tvorba</h3> */}
        {/* <div className="title-image"><img src="fonts/MojaTvorba.png" /></div> */}
        <p>Objavte videá s&nbsp;piesňami, v&nbsp;ktorých sa slová žalmistu menia na&nbsp;osobné výpovede.</p>
      </div>
      <img src={coverImage} />
    </a>,

    <a href="https://donio.sk/">
      <div className="article pos2 dark">
        {/* <div className="title-image"><img src="fonts/CD.png" /></div> */}
        {/* <h3>CD Ty rád</h3> */}
        <p>V&nbsp;<strong>júni 2026</strong> vychádza môj druhý album.
        Dala som mu názov <strong>Ty&nbsp;rád</strong> podľa&nbsp;rovnomennej piesne. <br/>
        (Link na donio)</p>
      </div>
      <img src={coverImage2} />
    </a>,

    <a href="#music">
      <div className="article pos3 dark">
        {/* <h3>CD Žalmy</h3> */}
        <p>Vypočujte si môj debutový hudobný album.</p>
      </div>
      <img src={coverImage3} />
    </a>,
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
