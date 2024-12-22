import React, { useState } from "react";
import dice1 from "./Images/dice1.png";
import dice2 from "./Images/dice2.png";
import dice3 from "./Images/dice3.png";
import dice4 from "./Images/dice4.png";
import dice5 from "./Images/dice5.png";
import dice6 from "./Images/dice6.png";
import Button from "./Button";
import Instructions from "./Instructions";
import "./GamingPage.css";
import Score from "./Score";
import GamePagePart from "./GamePagePart";

const GamingPage = ({ onclick }) => {
  let [dice, setdice] = useState(dice6);
  let [num, setnum] = useState(null);
  let [score, setscore] = useState(0);

  let a = [1, 2, 3, 4, 5, 6];

  let d = [dice1, dice2, dice3, dice4, dice5, dice6];

  function Play() {
    if (num) {
      let s = Math.floor(Math.random() * 6) + 1;
      if (s === num) {
        setscore(score + s);
      } else {
        setscore((score -= 1));
      }
      setdice(d[s - 1]);
      setnum();
    }
  }

  return (
    <div className="gamingpage">
      <div className="banner">
        <Score score={score} />
        <div className="buttondiv">
          {a.map((val, idx) => (
            <Button key={idx} val={val} onclick={() => setnum(val)} />
          ))}
        </div>
      </div>
      <div className="showpage">
        <GamePagePart img={dice} onclick={Play} />
        <div className="exitbutton">
          <button onClick={onclick}>Exit</button>
        </div>
        <Instructions />
      </div>
    </div>
  );
};

export default GamingPage;
