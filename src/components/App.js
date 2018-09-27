import React, { Component } from "react";
import "./App.css";
import Terminal from "./TerminalReplica";
import MessageContainer from "../containers/MessageContainer";
import MenuButton from "./Menu/header";
import Menu from "./Menu/Menu";
import "./css/DisableHighlight.css";
import "./css/App.css";
import "./css/flexbox.css";
import "./Background/background";
import Canvas from "../components/Background/background"
import Home from "../pages/home";
import More from "../pages/more-about-me";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  state = {
    seeMore: false
  };
  /* state set default false */
  seeMore = () => {
    this.setState({ seeMore: true });
  };

  render() {
    return (
      <Router>
        <div> 
          <Canvas />
          <div className="grid relative">
            <MenuButton />
            <div className="center-grid grid-row-start">
              <div className="flex flex-direction-column">
                <Menu />
                <div className="title ">VASCO DE GRAAFF</div>
                <img
                  className="avatar "
                  src={require("../IMG_4625.jpeg")}
                  alt="avatar"
                />
                <div className="">
                  {" "}
                  {this.state.seeMore ? (
                    <MessageContainer />
                  ) : (
                    <div>
                      <Terminal className="" />
                      <button onClick={this.seeMore} className="button noSelect">
                        See More
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Route exact path='/' component={Home}/>
          <Route path='/more' component={More}/>

      </div> 
    </Router>
    );
  }
}
export default App;
