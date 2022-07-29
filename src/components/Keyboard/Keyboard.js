import React, { useContext, useCallback, useEffect } from "react";
import "./Keyboard.css";

import Key from "./Key";
import { AppContext } from "../../App";
const keys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function Keyboard() {
  const { onSelectLetter, onEnter, onDelete, disabledLetters } =
    useContext(AppContext);
  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter") {
      onEnter();
    } else if (event.key === "Backspace") {
      onDelete();
    } else {
      keys.forEach((key) => {
        if (event.key === key) {
          onSelectLetter(key);
        }
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard">
      {keys.map((key) => {
        return (
          <Key
            key={key}
            keyValue={key}
            disabled={disabledLetters.includes(key)}
          />
        );
      })}

      <Key keyValue={"ENTER"} bigKey />
      <Key keyValue={"DELETE"} bigKey />
    </div>
  );
}

export default Keyboard;
