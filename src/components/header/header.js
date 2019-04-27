import React, { Component } from "react";

class CustomHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }
  render() {
    return (
      <div>
        <header className="header">
          <div className="container">
            <nav className="navbar">
              <a
                href="#"
                className="header__title"
                onClick={() => alert("click")}
              >
                Danton <br /> Ruthe
              </a>
              <ul className="header__nav-menu">
                <a
                  href="index.html"
                  className="header__nav-menu-link"
                  onClick={() => alert("click")}
                >
                  <li className="header__nav-menu-item">Work</li>
                </a>
                <a href="index.html" className="header__nav-menu-link">
                  <li className="header__nav-menu-item">About</li>
                </a>
                <a href="index.html" className="header__nav-menu-link">
                  <li className="header__nav-menu-item">Contact</li>
                </a>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default CustomHeader;
