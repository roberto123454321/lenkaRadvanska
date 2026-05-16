import React, { useState, useEffect, useRef } from "react";
import coverImage from "../../public/cover1.jpg";
import coverImage2 from "../../public/cover2.jpg";
import coverImage3 from "../../public/cover3.jpg";
import "./Hero.css";

export default function Hero() {
  const divs = [
    <a href="#video">
      <div className="article pos1 dark">
        <p>Objavte videá s&nbsp;piesňami, v&nbsp;ktorých sa slová žalmistu menia na&nbsp;osobné výpovede.</p>
      </div>
      <img src={coverImage} />
    </a>,

    <iframe src="https://donio.sk/widget2/15784"></iframe>,

    <a href="#music">
      <div className="article pos3 dark">
        <p>Vypočujte si môj debutový hudobný album.</p>
      </div>
      <img src={coverImage3} />
    </a>,
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const intervalRef = useRef(null);

  const goToSlide = (getNextIndex, reset = false) => {
    setFade(false);

    setTimeout(() => {
      setIndex(getNextIndex);
      setFade(true);

      if (reset) resetTimer();
    }, 500);
  };

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      goToSlide(prev => (prev + 1) % divs.length);
    }, 10000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (  
  <div className={`fade-wrapper ${fade ? "fade-in" : "fade-out"}`}>
      <div id="hero" className="hero">
        {divs[index]}
        <div className={`dot-container ${index === 1 ? "dark-dots" : ""}`}>  
          {divs.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}          
              onClick={() => {
                goToSlide(() => i, true);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
