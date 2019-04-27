import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./style.scss";
import CustomHeader from "./components/header/header";
import FrontPage from "./components/frontpage/frontpage";

class Game extends React.Component {
  render() {
    return (
      <div>
        <h1>Heading Test</h1>
        <CustomHeader />
        <FrontPage role="DBOY" />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
