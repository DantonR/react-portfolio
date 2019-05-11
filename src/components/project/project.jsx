import React, { Component } from "react";
import { Transition } from "react-transition-group";
import firstPage from "../../images/Annual Report/2-3.jpg";
import secondPage from "../../images/Annual Report/4-5.jpg";
import thirdPage from "../../images/Annual Report/6-7.jpg";
import fourthPage from "../../images/Annual Report/7-8.jpg";
import fifthPage from "../../images/Annual Report/9-10.jpg";
import sixthPage from "../../images/Annual Report/11-12.jpg";

const defaultStyle = {
  transition: `all 200ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [firstPage, secondPage, thirdPage]
    };
  }
  render() {
    return (
      <React.Fragment>
        <Transition in={this.props.inProp} timeout={500}>
          {state => (
            <section
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
              id="projectSection"
            >
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h1 className="project__heading">Annual Report</h1>
                  </div>
                  <div className="col-4">
                    <p className="project__body">DESCRIPTION</p>
                    <p className="project__body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dignissimos atque culpa fuga eveniet architecto
                      consequuntur, odit itaque impedit, eius aperiam rem, nulla
                      odio consectetur maiores provident possimus laudantium
                      quasi nostrum.
                    </p>
                  </div>
                  <div className="col-4">
                    <p className="project__body">CLIENT</p>
                    <p className="project__body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dignissimos atque culpa fuga eveniet architecto
                      consequuntur, odit itaque impedit.
                    </p>
                  </div>
                  <div className="col-4">
                    <p className="project__body">SKILLS USED</p>
                    <p className="project__body">
                      Indesign
                      <br />
                      Illustrator
                      <br />
                    </p>
                  </div>
                </div>
                <div className="row">
                  <section className="project__img-section">
                    <div className="col-12">
                      {this.state.images.map(image => (
                        <img src={image} className="full-width-img" />
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </section>
          )}
        </Transition>
      </React.Fragment>
    );
  }
}

export default Project;
