import React, { useState } from "react";
import { boardDefault } from "../../../Words";

function Board() {
  const [board, setBoard] = useState(boardDefault);
  return <div>Board</div>;
}

export default Board;
