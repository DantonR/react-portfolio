import React, { Component } from "react";
import annualCover from "../../images/Cover Images/annual-report_cover.jpg";
import packagingCover from "../../images/Cover Images/packaging_cover.jpg";
import radlerCover from "../../images/Cover Images/radler_cover.jpg";
import breakersCover from "../../images/Cover Images/breakers_cover.jpg";

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roleName: "Graphic Designer",
      paraClassName: "intro-section__paragraph intro-section__paragraph--hide"
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
    console.log("working");
    this.setState({
      paraClassName: "intro-section__paragraph intro-section__paragraph--hide"
    });
  }

  render() {
    return (
      <div>
        <main>
          <div className="intro-section">
            <p className={this.state.paraClassName}>
              Danton is a {this.state.roleName} with experience in web, ux, and
              digital design.
            </p>
          </div>

          <div className="home-images">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <img
                    id="imageOne"
                    className="home-images__image"
                    src={annualCover}
                    alt=""
                    onClick={this.testEvent}
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
      </div>
    );
  }
}

export default FrontPage;
