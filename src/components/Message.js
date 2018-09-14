import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

/* const Container = styled.div`
  width: 100%;
`; */

const Question = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 1em;
  color: #000000;
  padding: 10px;
  margin: 15px;
  border-radius: 20px;
  background: #dcdcdc;
  border: 1px solid #dcdcdc;
  display: inline-flex;

`;
const Reply = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 1em;
  color: #FFFFFF;
  padding: 10px;
  margin: 15px;
  border-radius: 20px;
  background: #0084FF;
  border: 1px solid #dcdcdc;
  display: block;
  text-align: right;
  display: inline-flex;
  float: right;
`;

// Message only returns the new states
class Message extends Component {
  
  returnMessage(){
    if (this.props.returnMessage) {
      return(
        <div>
          <div className='message-container question-row'>
            <Question>{this.props.returnMessage.question}</Question>
          </div>
          <div className='message-container answer-row'>
            <Reply>{this.props.returnMessage.reply}</Reply>
          </div>
        </div>
      );
    }
  }
  render() {
    return(
      <div>
        <div>
          {this.returnMessage()}
        </div> 
      </div>
    )
  }
};

function mapStateToProps(state) {
  return{
    returnMessage: state.returnMessage,
  }
};

export default connect(mapStateToProps)(Message);