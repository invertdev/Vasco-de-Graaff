import React, { Component } from 'react';
import './header.css';
import HamburgerMenu from './HamburgerMenu';


export default class Header extends Component{
  render(){
    return(
      <div className='container'>
        <HamburgerMenu 
        className='burgerMenu'
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
