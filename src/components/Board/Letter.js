import React from "react";
import { useContext } from "react";
import { AppContext } from "../../App";
import "./Letter.css";
function Letter({ letterPosition, attemptValue }) {
  const { board } = useContext(AppContext);
  const letter = board[attemptValue][letterPosition];
  return <div className="letter">{letter}</div>;
}

export default Letter;
