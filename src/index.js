import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./style.scss";
import Header from "./components/header/header";
import FrontPage from "./components/frontpage/frontpage";
import Project from "./components/project/project";
import Data from "./pages.json";
import { useSpring, animated } from "react-spring";

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
    if (componentName === "home") {
      return (
        <FrontPage
          indexClassName={this.state.indexClassName}
          changePage={this.changePage}
          data={this.state.content}
          inProp={true}
          renderComponent={this.renderComponent}
        />
      );
    } else if (componentName === "pageOne") {
      return <Project renderComponent={this.renderComponent} inProp={true} />;
    }
  }

  render() {
    var currentPage = this.state.currentPage;
    let page;

    if (currentPage === "home") {
      page = (
        <FrontPage
          indexClassName={this.state.indexClassName}
          changePage={this.changePage}
          data={this.state.content}
          inProp={this.state.homeIsShown}
          renderComponent={this.state.renderComponent}
        />
      );
    } else if (currentPage === "pageOne") {
      page = <Project />;
    }

    return (
      <div>
        <Header renderComponent={this.renderComponent} />
        <FrontPage
          indexClassName={this.state.indexClassName}
          changePage={this.changePage}
          data={this.state.content}
          inProp={this.state.homeIsShown}
          renderComponent={this.state.renderComponent}
        />
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
