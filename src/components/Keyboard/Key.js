import React from "react";
import "./Keyboard.css";
import { useContext } from "react";
import { AppContext } from "../../App";
function Key({ keyValue, bigKey }) {
  const {
    board,
    setBoard,
    currentAttempt,
    setCurrentAttempt,
    onSelectLetter,
    onEnter,
    onDelete,
  } = useContext(AppContext);

  const selectLetter = () => {
    if (keyValue === "ENTER") {
      onEnter();
    } else if (keyValue === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyValue);
    }
  };
  console.log(currentAttempt);
  return (
    <div className="key" onClick={selectLetter} id={bigKey && "big"}>
      {keyValue}
    </div>
  );
}

export default Key;
