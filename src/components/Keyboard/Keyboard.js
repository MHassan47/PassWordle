import React from "react";
import "./Keyboard.css";

import Key from "./Key";
const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

function Keyboard() {
  return (
    <div className="keyboard">
      <div className="line_one">
        {keys1.map((key) => {
          return <Key key={key} keyValue={key} />;
        })}
      </div>
      <div className="line_two">
        {keys2.map((key) => {
          return <Key key={key} keyValue={key} />;
        })}
      </div>
      <div className="line_three">
        <div className="big key">ENTER</div>
        {keys3.map((key) => {
          return <Key key={key} keyValue={key} />;
        })}
        <div className="big key">DELETE</div>
      </div>
    </div>
  );
}

export default Keyboard;
