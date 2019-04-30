import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./style.scss";
import Header from "./components/header/header";
import FrontPage from "./components/frontpage/frontpage";
import Project from "./components/project/project";
import Data from "./pages.json";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roleName: "Graphic Designer",
      currentPage: "home",
      content: Data,
      indexClassName: "index-section--show"
    };

    this.loadParagraph = this.loadParagraph.bind(this);
    this.changePage = this.changePage.bind(this);
    this.animateContent = this.animateContent.bind(this);
  }
  componentDidMount() {
    setTimeout(this.loadParagraph, 200);
  }

  loadParagraph() {
    this.setState({
      paraClassName: "intro-section__paragraph--show"
    });
  }

  animateContent() {
    if (this.state.currentPage === "index") {
      this.setState({
        indexClassName: "index-section--show"
      });
    }
  }

  changePage(pageNumber) {
    console.log(pageNumber);
    // if (pageNumber === "annual") {
    //   this.setState({
    //     indexClassName: "pageOne"
    //   });
    // } else if (pageNumber === "index") {
    //   this.setState({
    //     indexClassName: "home"
    //   });
    // }
    this.setState({
      currentPage: pageNumber
    });
  }

  showFrontPage() {}

  render() {
    var currentPage = this.state.currentPage;
    let page;

    if (currentPage === "home") {
      page = (
        <FrontPage
          indexClassName={this.state.indexClassName}
          changePage={this.changePage}
          data={this.state.content}
        />
      );
    } else if (currentPage === "pageOne") {
      page = <Project />;
    }

    return (
      <div>
        <Header changePage={this.changePage} />
        {/* <FrontPage
          indexClassName={this.state.indexClassName}
          changePage={this.changePage}
          data={this.state.content}
        /> */}
        {/* <Project /> */}
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
