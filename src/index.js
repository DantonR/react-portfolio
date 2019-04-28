import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./style.scss";
import CustomHeader from "./components/header/header";
import FrontPage from "./components/frontpage/frontpage";

import annualCover from "./images/Cover Images/annual-report_cover.jpg";
import packagingCover from "./images/Cover Images/packaging_cover.jpg";
import radlerCover from "./images/Cover Images/radler_cover.jpg";
import breakersCover from "./images/Cover Images/breakers_cover.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roleName: "Graphic Designer",
      paraClassName: "intro-section__paragraph intro-section__paragraph--hide",
      homeImagesClassName: "home-images home-images--show",
      currentPage: "home"
    };

    this.testEvent = this.testEvent.bind(this);
    this.loadParagraph = this.loadParagraph.bind(this);
    this.testEvent2 = this.testEvent2.bind(this);
  }
  componentDidMount() {
    setTimeout(this.loadParagraph, 200);
  }

  loadParagraph() {
    this.setState({
      paraClassName: "intro-section__paragraph intro-section__paragraph--show"
    });
  }

  testEvent() {
    this.setState({
      paraClassName: "intro-section__paragraph intro-section__paragraph--hide",
      homeImagesClassName: "home-images home-images--hide"
    });
  }

  changePage(pageNumber) {
    this.setState({
      currentPage: pageNumber
    });
    this.testEvent2();
  }

  testEvent2() {
    if (this.state.currentPage === "page2") {
      this.setState({
        paraClassName:
          "intro-section__paragraph intro-section__paragraph--hide",
        homeImagesClassName: "home-images home-images--hide"
      });
    } else if (this.state.currentPage === "page1") {
      this.setState({
        paraClassName:
          "intro-section__paragraph intro-section__paragraph--show",
        homeImagesClassName: "home-images home-images--show"
      });
    }
  }
  render() {
    return (
      <body>
        <header className="header">
          <div className="container">
            <nav className="navbar">
              <a href="#" className="header__title">
                Danton <br /> Ruthe
              </a>
              <ul className="header__nav-menu">
                <li
                  className="header__nav-menu-item"
                  onClick={this.changePage.bind(this, "page1")}
                >
                  Work
                </li>
                <li className="header__nav-menu-item">About</li>
                <li className="header__nav-menu-item">Contact</li>
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <div className="intro-section">
            <p className={this.state.paraClassName}>
              Danton is a Graphic Designer with experience in web, ux, and
              digital design.
            </p>
          </div>

          <div className={this.state.homeImagesClassName} id="homeImages">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <img
                    id="imageOne"
                    className="home-images__image"
                    src={annualCover}
                    alt=""
                    onClick={this.changePage.bind(this, "page2")}
                  />
                </div>
                <div className="col-6">
                  <a href="#" className="home-images__link">
                    <img
                      className="home-images__image"
                      src={radlerCover}
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-6 mt-3">
                  <a href="#" className="home-images__link">
                    <img
                      className="home-images__image"
                      src={packagingCover}
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-6 mt-3">
                  <a href="#" className="home-images__link">
                    <img
                      className="home-images__image"
                      src={breakersCover}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    );
  }
}

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
