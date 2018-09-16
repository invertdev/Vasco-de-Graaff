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




/*  */
class Message extends Component {
  
  DisplayMessage(){
    //it doesnt have to display anything if the state is empty
    if (this.props.Messages) {
      //.map() iterates though
      return this.props.Messages.map((message) => {
        return(
          <div>
            <div className='message-container question-row'>
              <Question key={message.id}>{message.question}</Question>
            </div>
            <div className='message-container answer-row'>
              <Reply key={message.id}>{message.reply}</Reply>
            </div>
          </div>
        )
      })
    }
  }
  render() {
    return(
      <div>
        <div>
          {this.DisplayMessage()}
        </div> 
      </div>
    )
  }
};

function mapStateToProps(state) {
  return{
    Messages: state.Messages,
  }
};

export default connect(mapStateToProps)(Message);