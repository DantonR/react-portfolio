import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./style.scss";

import annualCover from "./images/Cover Images/annual-report_cover.jpg";
import packagingCover from "./images/Cover Images/packaging_cover.jpg";
import radlerCover from "./images/Cover Images/radler_cover.jpg";
import breakersCover from "./images/Cover Images/breakers_cover.jpg";

function Header(props) {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <a href="#" className="header__title">
            Danton <br /> Ruthe
          </a>
          <ul className="header__nav-menu">
            <li className="header__nav-menu-item" onClick={props.onClick}>
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

class Index extends React.Component {
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
    this.setState({
      paraClassName: "intro-section__paragraph intro-section__paragraph--hide",
      homeImagesClassName: "home-images home-images--hide"
    });
  }

  handleClick() {
    console.log("working");
  }

  render() {
    return (
      <div>
        <body>
          <Header onClick={() => this.testEvent2()} />

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
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return <Index />;
  }
}

export default App;
// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
