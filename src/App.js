import "./App.css";
import { boardDefault } from "../src/Words";
import Board from "./components/Board/Board";
import Keyboard from "./components/Keyboard/Keyboard";
import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div className="App">
      <AppContext.Provider value={{ board, setBoard }}>
        <Board />
        {/* <Keyboard /> */}
      </AppContext.Provider>
    </div>
  );
}

export default App;
