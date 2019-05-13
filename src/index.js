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

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roleName: "Graphic Designer",
      currentPage: "home",
      content: Data,
      indexClassName: "index-section--show",
      homeIsShown: true
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

  showFrontPage() {}

  renderComponent(componentName) {
    // console.log(componentName);
    // if (componentName === "home") {
    //   return (
    //     <FrontPage
    //       indexClassName={this.state.indexClassName}
    //       changePage={this.changePage}
    //       data={this.state.content}
    //       inProp={true}
    //       renderComponent={this.renderComponent}
    //     />
    //   );
    // } else if (componentName === "pageOne") {
    //   debugger;
    //   return <Project renderComponent={this.renderComponent} inProp={true} />;
    // }
    this.setState({
      currentPage: componentName
    });
  }

  render() {
    var currentPage = this.state.currentPage;
    let page;

    if (currentPage === "home") {
      page = (
        <div>
          <Transition
            in={true}
            timeout={500}
            mountOnEnter={true}
            unmountOnExit={true}
          >
            {state => (
              <FrontPage
                indexClassName={this.state.indexClassName}
                changePage={this.changePage}
                data={this.state.content}
                renderComponent={this.renderComponent}
                classProp={`fade fade-${state}`}
              />
            )}
          </Transition>

          <Transition
            in={false}
            timeout={500}
            mountOnEnter={true}
            unmountOnExit={true}
          >
            {state => (
              <Project
                renderComponent={this.renderComponent}
                classProp={`fade fade-${state}`}
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
            timeout={500}
            mountOnEnter={true}
            unmountOnExit={true}
          >
            {state => (
              <FrontPage
                indexClassName={this.state.indexClassName}
                changePage={this.changePage}
                data={this.state.content}
                inProp={false}
                renderComponent={this.renderComponent}
                classProp={`fade fade-${state}`}
              />
            )}
          </Transition>

          <Transition
            in={true}
            timeout={500}
            mountOnEnter={true}
            unmountOnExit={true}
          >
            {state => (
              <Project
                renderComponent={this.renderComponent}
                classProp={`fade fade-${state}`}
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
