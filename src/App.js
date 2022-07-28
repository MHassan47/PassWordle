import "./App.css";
import { boardDefault } from "../src/Words";
import Board from "./components/Board/Board";
import Keyboard from "./components/Keyboard/Keyboard";
import Header from "./components/Header/Header";
import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPosition: 0,
  });

  const onSelectLetter = (keyValue) => {
    console.log(keyValue);
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
        }}
      >
        <Header />
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  );
}

export default App;
