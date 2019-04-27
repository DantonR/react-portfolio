import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./style.scss";
import CustomHeader from "./components/header/header";
import FrontPage from "./components/frontpage/frontpage";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }
  render() {
    return (
      <button
        className="square"
        onClick={() => {
          this.setState({ value: "X" });
        }}
      >
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <p>Test component</p>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div>
        <h1>Heading Test</h1>
        <CustomHeader />
        <Board />
        <FrontPage role="DBOY" />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
