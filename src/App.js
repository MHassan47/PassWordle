import "./App.css";
import { boardDefault } from "../src/Words";
import Board from "./components/Board/Board";
import Keyboard from "./components/Keyboard/Keyboard";
import Header from "./components/Header/Header";
import GameOver from "./components/GameOver/GameOver";
import { createContext, useEffect } from "react";
import { useState } from "react";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPosition: 0,
  });
  const [correctPassword, setCorrectPassword] = useState("12345");
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [endGame, setEndGame] = useState("");

  useEffect(() => {
    const newCorrectPassword = Math.floor(Math.random() * 99999).toString();
    setCorrectPassword(newCorrectPassword);
    console.log(newCorrectPassword);
  }, []);

  const onSelectLetter = (keyValue) => {
    if (currentAttempt.letterPosition > 4) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyValue;
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition + 1,
    });
  };

  const onEnter = () => {
    if (currentAttempt.letterPosition !== 5) return;
    setCurrentAttempt({
      ...currentAttempt,
      attempt: currentAttempt.attempt + 1,
      letterPosition: 0,
    });

    let currentGuess = "";
    for (let number in board[currentAttempt.attempt]) {
      currentGuess += board[currentAttempt.attempt][number];
    }
    console.log(currentGuess);

    if (currentGuess === correctPassword) {
      setEndGame("You Won");
    }

    if (currentAttempt.attempt === 5) {
      setEndGame("You Lost");
    }
  };

  const onDelete = () => {
    if (currentAttempt.letterPosition === 0) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = "";
    setCurrentAttempt({
      ...currentAttempt,
      attempt: currentAttempt.attempt,
      letterPosition: currentAttempt.letterPosition - 1,
    });
  };
  console.log("-----", endGame);
  return (
    <div className="App">
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currentAttempt,
          setCurrentAttempt,
          onSelectLetter,
          onEnter,
          onDelete,
          correctPassword,
          disabledLetters,
          setDisabledLetters,
          endGame,
          setEndGame,
        }}
      >
        <Header />
        {endGame && <GameOver />}
        <Board />
        {!endGame && <Keyboard />}
      </AppContext.Provider>
    </div>
  );
}

export default App;
