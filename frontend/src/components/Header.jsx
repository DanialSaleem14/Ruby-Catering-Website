import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <section className="menu">
      <nav>
        {/* Logo Section */}
        <div id="logo-nav">
          <Link to="/" className="logo">
            <img src={logo} alt="Ruby Catering" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div id="right-nav">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT US</Link>
            </li>
            <li>
              <Link to="/venues">THE VENUES</Link>
            </li>
            <li>
              <Link to="/food">THE FOOD</Link>
            </li>
            <li>
              <Link to="/event">THE EVENTS</Link>
            </li>
            <li>
              <Link to="/planning">THE PLANNING</Link>
            </li>
            <li>
              <Link to="/gallery">GALLERY</Link>
            </li>
            <li>
              <Link to="/cta">CONTACT US</Link>
            </li>
            <li>
              <Link to="/weather">WEATHER</Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Header;
