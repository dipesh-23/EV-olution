import React from "react";
import "./Hero.css";
import pause_icon from "../../assets/pause_icon.png";
import play_icon from "../../assets/play_icon.png";
import arrow_btn from "../../assets/arrow_btn.png";

const Hero = ({
  heroCount,
  heroData,
  playStatus,
  setPlayStatus,
  setHeroCount,
}) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrow_btn} alt="" />
      </div>
      <div className="hero-dots">
        <ul className="hero-images">
          <li
            onClick={() => setHeroCount(0)}
            className={heroCount == 0 ? "hero-dot orange" : "hero-dot"}
          >
            .
          </li>
          <li
            onClick={() => setHeroCount(1)}
            className={heroCount == 1 ? "hero-dot orange" : "hero-dot"}
          >
            .
          </li>
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount == 2 ? "hero-dot orange" : "hero-dot"}
          >
            .
          </li>
          <div className="hero-video">
            <img
              onClick={() => setPlayStatus(!playStatus)}
              src={playStatus ? pause_icon : play_icon}
            />
            {!playStatus ? <p>Wanna see video</p> : null}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
