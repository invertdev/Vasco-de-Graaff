import React, { Component } from 'react';
import './header.css';
import HamburgerMenu from './HamburgerMenu';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {menuSelected} from '../../actions/menuSelected'


class Header extends Component{
  render(){
    return(
      <div className='container'>
        <HamburgerMenu 
        className='burgerMenu'
        onClick={() => this.props.menuSelected()}
        isOpen={true}
        width={42}
        height={36}
        strokeWidth={4}
        rotate={0}
        color='black'
        borderRadius={0}
        animationDuration={0.5} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    Menu: state.Menu
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({menuSelected: menuSelected}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);