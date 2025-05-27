import React, { useState } from "react";

const RandomNumberWithRange = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleGenerate = () => {
    setRandomNumber(generateRandomNumber(1,6)); 
  };

  return (
    <div>
      <h1>サイコロの出目: {randomNumber}</h1>
      <button onClick={handleGenerate}>サイコロを振る</button>
    </div>
  );
};

export default RandomNumberWithRange;