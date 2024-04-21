import React from "react";
import dices from "./Images/dices.png";
import "./StartGame.css";

const StartGame = ({ onclick }) => {
  return (
    <div className="game">
      <div className="heading">DICE GAME</div>
      <div className="pic">
        <img src={dices} alt="" />
      </div>
      <div className="playgamebutton">
        <button onClick={onclick}>Play Game</button>
      </div>
    </div>
  );
};

export default StartGame;
