import React, { Component } from "react";

function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <a
            href="#"
            className="header__title"
            onClick={() => props.renderComponent("frontpage")}
          >
            Danton <br /> Ruthe
          </a>
          <ul className="header__nav-menu">
            <li
              className="header__nav-menu-item"
              onClick={() => props.renderComponent("frontpage")}
            >
              Work
            </li>
            <li className="header__nav-menu-item">About</li>
            <li className="header__nav-menu-item">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
