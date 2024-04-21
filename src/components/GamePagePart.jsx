import React from "react";

const GamePagePart = ({ img, onclick }) => {
  return (
    <>
      <div className="diceimage">
        <img src={img} alt="" />
      </div>
      <div className="playbutton">
        <button onClick={onclick}>Play</button>
      </div>
    </>
  );
};

export default GamePagePart;
