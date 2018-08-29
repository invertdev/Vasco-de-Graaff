import React, { Component } from 'react'
import '../reducer'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Message from './Message';
import {selectButton} from '../actions';

class MessageApp extends Component {
  createMessageItem() {
    return this.props.MessageStore.map((message) => {
      return(
        <button key={message.id} onClick={() => this.props.selectButton()}>{message.button}</button>
      )
    });
  }
  render() {
    return(
      <div>
        <Message/>
        <div>{this.createMessageItem()}</div>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return{
    MessageStore: state.MessageStore
  }
};

function matchDispatchToProps(dispatch) {
  return bindActionCreators({selectButton: selectButton}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MessageApp);