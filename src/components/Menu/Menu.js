import React, { Component } from "react";
import "../css/Menu.css";
import { connect } from "react-redux";
import {  Link } from "react-router-dom";
import { bindActionCreators} from 'redux';
import {menuClose} from '../../actions/menuSelected'
class Menu extends Component {
  render() {
    console.log(this.props.Menu);
    console.log(this.props.menuClose)
    const style = this.props.Menu ? { height: "100%" } : { height: "0%" };
    return (
      <div>
        <div id="myNav" style={style} className="overlay">
          <div className="overlay-content">
          <h2><Link to='/' className='menuLink' onClick={this.props.menuClose}>"HOME"</Link></h2>
          <h2><Link to='/more' className='menuLink' onClick={this.props.menuClose}>"MORE"</Link></h2>
          <h2><Link to='/gallery' className='menuLink' onClick={this.props.menuClose}>"GALLERY</Link></h2>
          <h2>"PLAYGROUND"</h2>
          <h2><a className='menuLink' href='https://github.com/invertdev' target="_blank" rel="noopener noreferrer" onClick={this.props.menuClose}>"GITHUB"</a></h2>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    menuClose: menuClose
  },dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Menu);
