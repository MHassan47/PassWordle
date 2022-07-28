import React from "react";
import "./Keyboard.css";
import { useContext } from "react";
import { AppContext } from "../../App";
function Key({ keyValue, bigKey }) {
  const { board, setBoard, currentAttempt, setCurrentAttempt, onDelete } =
    useContext(AppContext);

  const selectLetter = () => {
    if (keyValue === "ENTER") {
      if (currentAttempt.letterPosition !== 5) return;
      setCurrentAttempt({
        ...currentAttempt,
        attempt: currentAttempt.attempt + 1,
        letterPosition: 0,
      });
    } else if (keyValue === "DELETE") {
      onDelete();
    } else {
      if (currentAttempt.letterPosition > 4) return;
      const newBoard = [...board];
      newBoard[currentAttempt.attempt][currentAttempt.letterPosition] =
        keyValue;
      setBoard(newBoard);
      setCurrentAttempt({
        ...currentAttempt,
        letterPosition: currentAttempt.letterPosition + 1,
      });
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
