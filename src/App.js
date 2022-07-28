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
  return (
    <div className="App">
      <AppContext.Provider
        value={{ board, setBoard, currentAttempt, setCurrentAttempt }}
      >
        <Header />
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  );
}

export default App;
