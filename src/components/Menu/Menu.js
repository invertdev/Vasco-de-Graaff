import React, { Component } from "react";
import "../css/Menu.css";
import { connect } from "react-redux";
import {  Link } from "react-router-dom";

class Menu extends Component {
  render() {
    console.log(this.props.Menu);
    const style = this.props.Menu ? { height: "100%" } : { height: "0%" };
    return (
      <div>
        <div id="myNav" style={style} className="overlay">
          <div className="overlay-content">
          <h2><Link to='/' className='menuLink'>"HOME"</Link></h2>
          <h2><Link to='/more' className='menuLink'>"MORE"</Link></h2>
          <h2><Link to='/gallery' className='menuLink'>"GALLERY</Link></h2>
          <h2>"PLAYGROUND"</h2>
          <h2><a className='menuLink' href='https://github.com/invertdev' target="_blank" rel="noopener noreferrer">"GITHUB"</a></h2>
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
