import React, { Component } from "react";
import MenuButton from "./Menu/MenuButton";
import Menu from "./Menu/Menu";
import "./css/index.css"
import Canvas from "./Background/Canvas";
import Home from "../pages/home";
import More from "../pages/more-about-me";
import Gallery from "../pages/gallery";
// eslint-disable-next-line
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="flex relative" style={{ zIndex: 1, width: '100%' }}>
        <Canvas /> 

          <MenuButton />
          <Menu className="Menu"/>
          <Route exact path="/" component={Home} />
          <Route path="/more" component={More} />
          <Route path="/gallery" component={Gallery} />

      </div>
    );
  }
}
export default App;
