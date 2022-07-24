import React from "react";
import "./Keyboard.css";
import { useContext } from "react";
import { AppContext } from "../../App";
function Key({ keyValue }) {
  const { board, setBoard, currentAttempt, setCurrentAttempt } =
    useContext(AppContext);

  const selectLetter = () => {
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyValue;
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition + 1,
    });
  };
  return (
    <div className="key" onClick={selectLetter}>
      {keyValue}
    </div>
  );
}

export default Key;
