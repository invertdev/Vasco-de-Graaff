import React, { Component } from "react";
import MenuButton from "./Menu/MenuButton";
import Menu from "./Menu/Menu";
import "./css/index.css"
import Canvas from "./Background/Canvas";
import Home from "../pages/home";
import About from "../pages/about";
import Gallery from "../pages/gallery";
// eslint-disable-next-line
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="flex relative" style={{ zIndex: 1, width: '100%' }}>
        <Canvas /> 
        <MenuButton />
        <Menu className="Menu"/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
      </div>
    );
  }
}
export default App;
