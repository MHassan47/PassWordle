import React from "react";
import "./Keyboard.css";
import { useContext } from "react";
import { AppContext } from "../../App";
function Key({ keyValue }) {
  const { board, setBoard, currentAttempt, setCurrentAttempt } =
    useContext(AppContext);

  return <div className="key">{keyValue}</div>;
}

export default Key;
