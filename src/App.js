import "./App.css";
import Board from "./components/Board/Board";
import Keyboard from "./components/Keyboard/Keyboard";
import { createContext } from "react";

export const AppContext = createContext();
function App() {
  const [board, setBoard] = useState(boardDefault);
  return (
    <div className="App">
      <AppContext.Provider value={(board, setBoard)}>
        <Board />
        {/* <Keyboard /> */}
      </AppContext.Provider>
    </div>
  );
}

export default App;
