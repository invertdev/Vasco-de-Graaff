import React, { Component } from 'react';
import HamburgerMenu from './HamburgerMenu';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {menuSelected} from '../../actions/menuSelected';
import './menuButton.css'

class MenuButton extends Component{
  render(){
    return(
      <div className=' absolute menuButton' >
        <button className=' menu-button noSelect menu'
        onClick={()=>{
          this.props.menuSelected()
        }}>
          <HamburgerMenu
          isOpen={this.props.Menu}
          width={42}
          height={36}
          strokeWidth={4}
          rotate={0}
          color='#ffff'
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