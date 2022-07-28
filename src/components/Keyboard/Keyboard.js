import React from "react";
import "./Keyboard.css";

import Key from "./Key";
const keys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function Keyboard() {
  return (
    <div className="keyboard">
      <Key keyValue={"ENTER"} bigKey />
      {keys.map((key) => {
        return <Key key={key} keyValue={key} />;
      })}

      <Key keyValue={"DELETE"} bigKey />
    </div>
  );
}

export default Keyboard;
