import React, { Component } from "react";
import annualCover from "../../images/Cover Images/annual-report_cover.jpg";
import packagingCover from "../../images/Cover Images/packaging_cover.jpg";
import radlerCover from "../../images/Cover Images/radler_cover.jpg";
import breakersCover from "../../images/Cover Images/breakers_cover.jpg";

const FrontPage = props => {
  return (
    <React.Fragment>
      <section
        className={"index-section " + props.indexClassName}
        id="indexSection"
      >
        <div className="intro-section">
          <p className="intro-section__paragraph">
            Danton Ruthe is a graphic designer with
          </p>
        </div>

        <div className="home-images" id="homeImages">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img
                  id="imageOne"
                  className="home-images__image"
                  src={annualCover}
                  alt=""
                  onClick={() => props.changePage("annual")}
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
                <img
                  className="home-images__image"
                  src={packagingCover}
                  alt=""
                  onClick={console.dir(props)}
                />
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
      </section>
    </React.Fragment>
  );
};

export default FrontPage;
