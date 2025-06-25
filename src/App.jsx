import React, { useState, useEffect } from "react";
import Background from "./components/Background/Background.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";

const App = () => {
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "Your Passions" },
    { text1: "Give in to", text2: "your passions" },
  ];

  const [playStatus, setPlayStatus] = useState(false);
  const [heroCount, setHeroCount] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? (count = 0) : count + 1;
      });
    }, 3000);
  }, []);

  return (
    <div>
      <Background heroCount={heroCount} playStatus={playStatus} />
      <Navbar />
      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
      />
    </div>
  );
};

export default App;
