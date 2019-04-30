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
      currentPage: "home"
    };

    this.loadParagraph = this.loadParagraph.bind(this);
  }
  componentDidMount() {
    setTimeout(this.loadParagraph, 200);
  }

  loadParagraph() {
    this.setState({
      paraClassName: "intro-section__paragraph--show"
    });
  }

  testEvent() {
    this.setState({
      paraClassName: "intro-section__paragraph--hide",
      homeImagesClassName: "home-images--hide"
    });
  }

  changePage(pageNumber) {
    this.setState({
      currentPage: pageNumber
    });
    this.testEvent2();
  }

  hideFrontPage() {
    this.setState({
      paraClassName: "intro-section__paragraph--hide",
      homeImagesClassName: "home-images--hide"
    });
  }

  showFrontPage() {
    this.setState({
      paraClassName: "intro-section__paragraph--show",
      homeImagesClassName: "home-images--show"
    });
  }

  handleClick() {
    console.log("working");
  }

  render() {
    return (
      <div>
        <Header onClick={() => this.showFrontPage()} />
        <FrontPage
          paraClassName={this.state.paraClassName}
          homeImagesClassName={this.state.homeImagesClassName}
          onClick={() => this.hideFrontPage()}
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
