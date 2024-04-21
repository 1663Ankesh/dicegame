import React from "react";

const Score = ({ score }) => {
  return (
    <div className="score">
      <div className="your_score">{score}</div>
      <div className="score_text">Your Score</div>
    </div>
  );
};

export default Score;
