import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Travel with Me!
	  </h1>
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/NYC"
            className="nav-link"
            activeClassName="active-link"
          >
            NYC
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Ireland"
            className="nav-link"
            activeClassName="active-link"
          >
            Ireland
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/AboutMe"
            className="nav-link"
            activeClassName="active-link"
          >
            About Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
