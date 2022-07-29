import React, { useContext } from "react";
import { AppContext } from "../../App";
import "./GameOver.css";
function GameOver() {
  const { endGame, currentAttempt, correctPassword } = useContext(AppContext);

  return (
    <div className="game_over">
      <div className="message">
        {endGame === "Winner" ? (
          <div className="winner"> 🎊🎊🎊 {endGame} 🎊🎊🎊</div>
        ) : (
          <div className="loser">{endGame} :( </div>
        )}
        {endGame === "Winner" ? (
          <div className="total_geusses">
            You guessed the password in {currentAttempt.attempt} guesses
          </div>
        ) : (
          <div>
            You did not guess the correct password
            <span className="correct_password">{correctPassword}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default GameOver;
