import React from "react";

export default function Navbar(props) {
  return (
    <nav class="nav">
      <div className="navbar-brand"></div>
      <ul className="nav justify-content-center">
        <li className="nav-item">Click an image to begin!!!</li>
        <li className="nav-item">
          score: {props.score} | Top Score: {props.topScore}
        </li>
      </ul>
    </nav>
  );
}
