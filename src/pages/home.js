import React, { Component } from "react";
import Terminal from "../components/TerminalReplica";
import "../components/css/DisableHighlight.css";
import "../components/css/flexbox.css";
import "../components/Background/background";

class Home extends Component {
  render() {
    return (
        <div className="center-grid grid-row-start">
          <div className="flex flex-direction-column">

            <div className="title ">VASCO DE GRAAFF</div>
            <img
              className="avatar "
              src={require("../IMG_4625.jpeg")}
              alt="avatar"
            />
            <div>
              <Terminal className="" />
            </div>
          </div>
        </div>

    );
  }
}

export default Home;
