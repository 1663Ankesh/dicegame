import React, { useState } from "react";
import StartGame from "./components/StartGame";
import GamingPage from "./components/GamingPage";

const App = () => {
  let [isgaming, setgaming] = useState(false);

  function handleclick() {
    setgaming((prev) => !prev);
  }

  return (
    <>
      {isgaming ? (
        <GamingPage onclick={handleclick} />
      ) : (
        <StartGame onclick={handleclick} />
      )}
    </>
  );
};

export default App;
