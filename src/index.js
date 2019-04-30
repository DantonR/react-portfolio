import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./style.scss";
import Header from "./components/header/header";
import FrontPage from "./components/frontpage/frontpage";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roleName: "Graphic Designer",
      paraClassName: "intro-section__paragraph--hide",
      homeImagesClassName: "home-images--show",
      currentPage: "home",
      content: [
        {
          item1: "annual report",
          item2: "radler tours"
        }
      ]
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
    console.log(this.state.currentPage);
    if (this.state.currentPage === "index") {
      this.setState({
        paraClassName: "intro-section__paragraph--hide",
        homeImagesClassName: "home-images--hide"
      });
    }
  }

  changePage(pageNumber) {
    console.log(pageNumber);
    if (pageNumber === "annual") {
      this.setState({
        paraClassName: "intro-section__paragraph--hide",
        homeImagesClassName: "home-images--hide"
      });
    } else if (pageNumber === "index") {
      this.setState({
        paraClassName: "intro-section__paragraph--show",
        homeImagesClassName: "home-images--show"
      });
    }
  }

  showFrontPage() {}

  render() {
    return (
      <div>
        <Header changePage={this.changePage} />
        <FrontPage
          paraClassName={this.state.paraClassName}
          homeImagesClassName={this.state.homeImagesClassName}
          changePage={this.changePage}
          data={this.state.content}
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
