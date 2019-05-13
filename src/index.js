import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./style.scss";
import Header from "./components/header/header";
import FrontPage from "./components/frontpage/frontpage";
import Project from "./components/project/project";
import Data from "./pages.json";
import { Transition } from "react-transition-group";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home",
      content: Data,
      pageStates: {
        indexState: true,
        projectState: false,
        aboutState: false,
        contactState: false
      }
    };
    this.changePage = this.changePage.bind(this);
    this.renderComponent = this.renderComponent.bind(this);
  }

  changePage(pageNumber) {
    this.setState({
      homeIsShown: !this.state.homeIsShown
    });
    console.log(this.state.homeIsShown);
  }

  renderComponent(componentName) {
    this.setState({
      currentPage: componentName
    });
  }

  render() {
    const pageStates = this.state.pageStates;
    var currentPage = this.state.currentPage;
    let page;

    page = (
      <div>
        <Transition
          in={pageStates.indexState}
          timeout={300}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          {state => (
            <FrontPage
              renderComponent={this.renderComponent}
              classProp={`component component-${state}`}
            />
          )}
        </Transition>
      </div>
    );

    if (currentPage === "home") {
      page = (
        <div>
          <Transition
            in={true}
            timeout={300}
            mountOnEnter={true}
            unmountOnExit={true}
          >
            {state => (
              <FrontPage
                changePage={this.changePage}
                data={this.state.content}
                renderComponent={this.renderComponent}
                classProp={`component component-${state}`}
              />
            )}
          </Transition>

          <Transition
            in={false}
            timeout={300}
            mountOnEnter={true}
            unmountOnExit={true}
          >
            {state => (
              <Project
                renderComponent={this.renderComponent}
                classProp={`component component-${state}`}
              />
            )}
          </Transition>
        </div>
      );
    } else if (currentPage === "pageOne") {
      console.log("working");
      page = (
        <div>
          <Transition
            in={false}
            timeout={300}
            mountOnEnter={true}
            unmountOnExit={true}
          >
            {state => (
              <FrontPage
                changePage={this.changePage}
                data={this.state.content}
                inProp={false}
                renderComponent={this.renderComponent}
                classProp={`component component-${state}`}
              />
            )}
          </Transition>

          <Transition
            in={true}
            timeout={300}
            mountOnEnter={true}
            unmountOnExit={true}
          >
            {state => (
              <Project
                renderComponent={this.renderComponent}
                classProp={`component component-${state}`}
              />
            )}
          </Transition>
        </div>
      );
    }

    return (
      <div>
        <Header renderComponent={this.renderComponent} />
        {page}
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
