import React, { Component } from 'react';
import './header.css';
import HamburgerMenu from './HamburgerMenu';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {menuSelected} from '../../actions/menuSelected';
import '../css/DisableHighlight.css';
import '../css/flexbox.css'

class MenuButton extends Component{
  render(){
    return(
      <div className='grid-end menu'>
        <button className='menu-button noSelect '
        onClick={()=>{
          this.props.menuSelected()
        }}>
          <HamburgerMenu
          className='burgerMenu z-index'
          isOpen={this.props.Menu}
          width={42}
          height={36}
          strokeWidth={4}
          rotate={0}
          color='#6221ea'
          borderRadius={0}
          animationDuration={0.5}/>
        </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(MenuButton);