import React, { Component } from "react";
import "./App.css";
import MenuButton from "./Menu/header";
import Menu from "./Menu/Menu";
import "./css/DisableHighlight.css";
import "./css/App.css";
import "./css/flexbox.css";
import "./Background/background";
import Canvas from "../components/Background/background";
import Home from "../pages/home";
import More from "../pages/more-about-me";
import Gallery from "../pages/gallery";
// eslint-disable-next-line
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Canvas /> 
        <div className="grid relative">
          <MenuButton />
          <Menu />
          <Route exact path="/" component={Home} />
          <Route path="/more" component={More} />
          <Route path="/gallery" component={Gallery} />
        </div>
      </div>
    );
  }
}
export default App;
