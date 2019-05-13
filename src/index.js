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
      currentPage: "frontpage",
      content: Data,
      pageStates: {
        frontpageState: true,
        projectState: false,
        aboutState: false,
        contactState: false
      },
      pageData: {}
    };

    // Bound Functions
    this.renderComponent = this.renderComponent.bind(this);
  }

  // This function will run when nav links or cover images are clicked. It
  // changes the current page to whatever argument the onClick function passes
  // through, and also changes the pageStates to represent what components are
  // being displayed.
  renderComponent(componentName, pageName) {
    this.setState({
      currentPage: componentName
    });

    // if statement that changes pageStates depending on argument
    if (componentName === "frontpage") {
      this.setState({
        pageStates: {
          frontpageState: true,
          projectState: false,
          aboutState: false,
          contactState: false
        }
      });
    } else if (componentName === "project") {
      console.log(pageName);
      console.dir(this.state.content[pageName]);
      this.setState({
        pageStates: {
          frontpageState: false,
          projectState: true,
          aboutState: false,
          contactState: false
        },
        pageData: this.state.content[pageName]
      });
    }
  }

  // Index Render
  render() {
    const pageStates = this.state.pageStates;
    var currentPage = this.state.currentPage;
    let page;

    // The page variable will change depending on what the page states are,
    // through the in prop being called to the transition components.
    page = (
      <div>
        <Transition
          in={pageStates.frontpageState}
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

        <Transition
          in={pageStates.projectState}
          timeout={300}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          {state => (
            <Project
              renderComponent={this.renderComponent}
              data={this.state.pageData}
              classProp={`component component-${state}`}
            />
          )}
        </Transition>
      </div>
    );

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
