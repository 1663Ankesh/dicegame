import React from "react";

const Instructions = () => {
  return (
    <div className="instr">
      <div className="instrheading">INSTRUCTIONS :- </div>
      <ul>
        <li>It is a simple Dice Game which anyone can enjoy</li>
        <li>You have to Select the Number first</li>
        <li>Then, Click on "Play" button</li>
        <li>
          Scoring Rules :-
          <ul>
            <li>
              If you got the same number, your score will be incremented by that
            </li>
            <li>If not, your score will be decremented by 2</li>
          </ul>
        </li>
      </ul>
      <div className="instrlast">ENJOY THE GAME!!!</div>
    </div>
  );
};

export default Instructions;
