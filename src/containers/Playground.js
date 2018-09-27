import React, { Component } from "react";
import "../components/css/Button.css";

export default class Playground extends Component {
  state = {
    buttonOn: true
  };

  onClose = () => {
    this.setState({ buttonOn: false });
  };
  render() {
    return (
      <div>
        <button className="button">See More</button>
      </div>
    );
  }
}
