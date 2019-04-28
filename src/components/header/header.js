import React, { Component } from "react";
import FrontPage from "../frontpage/frontpage";

class CustomHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      currentPage: "Current"
    };

    this.changeToWork = this.changeToWork.bind(this);
  }

  changeToWork() {
    this.setState({
      currentPage: "Work"
    });
  }

  render() {
    return (
      <React.Fragment>
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
                <li
                  className="header__nav-menu-item"
                  onClick={this.changeToWork}
                >
                  Work
                </li>
                <li className="header__nav-menu-item">About</li>
                <li className="header__nav-menu-item">Contact</li>
              </ul>
            </nav>
          </div>
        </header>
        <FrontPage currentPageProp={this.state.currentPage} />
      </React.Fragment>
    );
  }
}

export default CustomHeader;
