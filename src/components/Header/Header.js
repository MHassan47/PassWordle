import React from "react";
import { BsFillLockFill } from "react-icons/bs";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <span>PASSW</span>

      <BsFillLockFill className="lock" />

      <span>RDLE</span>
    </div>
  );
}

export default Header;
