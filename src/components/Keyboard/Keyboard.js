import React from "react";
import "./Keyboard.css";
const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

function Keyboard() {
  return (
    <div className="keyboard">
      <div className="line_one">
        {keys1.map((key) => {
          return (
            <div key={key} className="key">
              {key}
            </div>
          );
        })}
      </div>
      <div className="line_two">
        {keys2.map((key) => {
          return (
            <div key={key} className="key">
              {key}
            </div>
          );
        })}
      </div>
      <div className="line_three">
        <div className="big key">ENTER</div>
        {keys3.map((key) => {
          return (
            <div key={key} className="key">
              {key}
            </div>
          );
        })}
        <div className="big key">DELETE</div>
      </div>
    </div>
  );
}

export default Keyboard;
