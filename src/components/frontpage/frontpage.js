import React, { Component } from "react";
import annualCover from "../../images/Cover Images/annual-report_cover.jpg";
import packagingCover from "../../images/Cover Images/packaging_cover.jpg";
import radlerCover from "../../images/Cover Images/radler_cover.jpg";
import breakersCover from "../../images/Cover Images/breakers_cover.jpg";

const FrontPage = props => {
  console.dir(props);

  return (
    <React.Fragment>
      <div className="intro-section">
        <p className={"intro-section__paragraph " + props.paraClassName}>
          Danton is a Graphic Designer with experience in web, ux, and digital
          design.
        </p>
      </div>

      <div
        className={"home-images " + props.homeImagesClassName}
        id="homeImages"
      >
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img
                id="imageOne"
                className="home-images__image"
                src={annualCover}
                alt=""
                onClick={props.onClick}
              />
            </div>
            <div className="col-6">
              <a href="#" className="home-images__link">
                <img className="home-images__image" src={radlerCover} alt="" />
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
    </React.Fragment>
  );
};

export default FrontPage;
