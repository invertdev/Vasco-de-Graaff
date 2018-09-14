import React, { Component } from 'react'
import '../reducer'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Message from './Message';
import {selectButton} from '../actions';
import '../reducer/reducer-message';
import styled from 'styled-components';

const Bottom = styled.div`
  position: inherit;
  
  text-align: center;
`;

const MinimumHeight = styled.div`
  min-height: 150px;  
`;

const MessageButton = styled.button`
  column-gap: 20px;
`;


class MessageApp extends Component {
  createButton() {
    return this.props.buttons.map((button) => {
      return(
        <MessageButton 
          key={button.id} 
          onClick={() => this.props.selectButton(button.id, button.message)}
        >
          {button.button}
          </MessageButton>
      );
    });
  }
  render() {
    return(
      <MinimumHeight>
        <div>
          <Message/>
        </div>        
        <Bottom>{this.createButton()}</Bottom>
      </MinimumHeight>
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