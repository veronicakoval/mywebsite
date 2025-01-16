import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Travel Blog</h1>
      <ul className="navbar-links">
        <li><a href="#/NYC">NYC</a></li>
        <li><a href="#/Ireland">Ireland</a></li>
        <li><a href="#/AboutMe">About Me</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
