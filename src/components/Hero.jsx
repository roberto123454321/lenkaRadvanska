import React, { useState, useEffect, useRef } from "react";
import coverImage1 from "/cover1.jpg";
import coverImage1lq from "/cover1lq.jpeg";
import coverImage2 from "/cover2.jpg";
import coverImage2lq from "/cover2lq.jpeg";
import coverImage3 from "/cover3.jpg";
import coverImage3lq from "/cover3lq.jpeg";
import "./Hero.css";
import { getBreakpointMobile } from "../Utils.js";

export default function Hero() {
  const divs = [
    <a href="#video">
      <div className="article pos1 dark">
        <p>Objavte videá s&nbsp;piesňami, v&nbsp;ktorých sa slová žalmistu menia na&nbsp;osobné výpovede.</p>
      </div>
      <picture>
        <source srcSet={coverImage1lq} media={`(max-width: ${getBreakpointMobile()})`} />
        <img src={coverImage1} />
      </picture>      
    </a>,

    <iframe src="https://donio.sk/widget2/15784"></iframe>,

    <a href="#music">
      <div className="article pos3 dark">
        <p>Vypočujte si môj debutový hudobný album.</p>
      </div>
      <picture>
        <source srcSet={coverImage3lq} media={`(max-width: ${getBreakpointMobile()})`} />
        <img src={coverImage3} />
      </picture>     
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

      if (reset) {
        clearInterval(intervalRef.current);
        startTimer();
      };
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

        {/* LEFT arrow */}
        <div className={index === 1 ? "dark-dots" : ""}>
          <div
            className="arrow left"
            onClick={() =>
              goToSlide(prev => (prev - 1 + divs.length) % divs.length, true)
            }
          >
            ❮
          </div>

          {/* RIGHT arrow */}
          <div
            className="arrow right"
            onClick={() =>
              goToSlide(prev => (prev + 1) % divs.length, true)
            }
          >
            ❯
          </div>
        </div>

      </div>
    </div>
  );
}
