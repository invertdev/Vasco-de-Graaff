import React, { Component } from "react";
import "../css/Menu.css";
import { connect } from "react-redux";
import { BrowserRouter as Link } from "react-router-dom";
import Home from "../../pages/home";
import More from "../../pages/more-about-me";

class Menu extends Component {
  render() {
    console.log(this.props.Menu);
    const style = this.props.Menu ? { height: "100%" } : { height: "0%" };
    return (
      <div>
        <div id="myNav" style={style} className="overlay">
          <div className="overlay-content">
            <Link to='/' >Home</Link>
            <Link to='/more' >More about me</Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    Menu: state.Menu
  };
}

export default connect(mapStateToProps)(Menu);
