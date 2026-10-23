import React from 'react';

function OutfitAdvice({ temp }) {
  const getOutfitSuggestion = (t) => {
    if (t >= 30) {
      return {
        text: "Bohat garmi hai! Light cotton ya lawn outfit pehnein aur paani zyada piyein. ☀️🍹",
        bgClass: "warm"
      };
    } else if (t >= 20 && t < 30) {
      return {
        text: "Mausam bohat haseen aur pleasant hai! Casual denim aur stylish top perfect rahega. 🌸✨",
        bgClass: "pleasant"
      };
    } else {
      return {
        text: "Thand / Shardi ka mausam hai! Warm jacket, hoodie ya cardigan zaroor pehnein. ❄️🧥",
        bgClass: "cool"
      };
    }
  };

  const advice = getOutfitSuggestion(temp);

  return (
    <div className={`outfit-box ${advice.bgClass}`}>
      <h4> Outfit & Style Advice:</h4>
      <p>{advice.text}</p>
    </div>
  );
}

export default OutfitAdvice;