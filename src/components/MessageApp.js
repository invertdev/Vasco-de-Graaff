import React, { Component } from 'react'
import '../reducer'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Message from './Message';
import {selectButton} from '../actions/buttonClick';
import '../reducer/reducer-message';
import './css/Button.css'

class MessageApp extends Component {
  createButton() {
    return this.props.buttons.map((button) => {
      return(
        <button 
          className='button'
          key={button.id} 
          onClick={() => this.props.selectButton(button.id, button.message)}
        >
          {button.button}
          </button>
      );
    });
  }
  render() {
    return(
      <div className='container-sizing'>
        <div>
          <Message/>
        </div>        
        <div className='button-align'>{this.createButton()}</div>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return{
    buttons: state.buttons
  }
};

function matchDispatchToProps(dispatch) {
  return bindActionCreators({selectButton: selectButton}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MessageApp);