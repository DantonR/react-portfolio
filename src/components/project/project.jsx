import React, { Component } from "react";
import firstPage from "../../images/Annual Report/2-3.jpg";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <section className="project-section" id="projectSection">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="project__heading">Annual Report</h1>
              </div>
              <div className="col-6">
                <img src={firstPage} className="full-width-img" />
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Project;
