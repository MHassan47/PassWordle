import React from "react";
import { useContext } from "react";
import { AppContext } from "../../App";
import "./Letter.css";
function Letter({ letterPosition, attemptValue }) {
  const { board, correctPassword, currentAttempt } = useContext(AppContext);
  const number = board[attemptValue][letterPosition];

  const correct = correctPassword[letterPosition] === number;
  const wrongSpot =
    !correct && number !== "" && correctPassword.includes(number);
  const colorID =
    currentAttempt.attempt > attemptValue &&
    (correct ? "correct" : wrongSpot ? "close" : "incorrect");
  return (
    <div className="letter" id={colorID}>
      {number}
    </div>
  );
}

export default Letter;
