import React, { Component } from "react";
import { Transition } from "react-transition-group";
import firstPage from "../../images/Annual Report/2-3.jpg";
import secondPage from "../../images/Annual Report/4-5.jpg";
import thirdPage from "../../images/Annual Report/6-7.jpg";
import fourthPage from "../../images/Annual Report/7-8.jpg";
import fifthPage from "../../images/Annual Report/9-10.jpg";
import sixthPage from "../../images/Annual Report/11-12.jpg";

const images = [firstPage, secondPage, thirdPage];

// testFunction

const Project = props => {
  const data = props.data;

  return (
    <React.Fragment>
      <div className="component-container">
        <section
          id="projectSection"
          className={"project-section " + props.classProp}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1
                  className="project__heading"
                  onClick={() => {
                    console.dir(props);
                  }}
                >
                  Annual Report
                </h1>
              </div>
              <div className="col-4">
                <p className="project__body">DESCRIPTION</p>
                <p className="project__body">{data.description}</p>
              </div>
              <div className="col-4">
                <p className="project__body">CLIENT</p>
                <p className="project__body">{data.client}</p>
              </div>
              <div className="col-4">
                <p className="project__body">SKILLS USED</p>
                <p className="project__body">{data.skills}</p>
              </div>
            </div>
            <div className="row">
              <section className="project__img-section">
                <div className="col-12">
                  {images.map(image => (
                    <img src={image} className="full-width-img" />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Project;
