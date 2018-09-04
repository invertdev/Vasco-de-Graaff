import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';


const Container = styled.div`
  width: 100%;
`;

const Question = styled.div`
  float: right;
  font-family: Roboto, sans-serif;
  font-size: 1em;
  color: #000000;
  padding: 10px;
  margin: 15px;
  border-radius: 20px;
  background: #dcdcdc;
  border: 1px solid #dcdcdc;
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
  display: inline-block;
`;

/* matchIdToMessage(){
  const message = state.latestMessage.find(message => message.id === action.id);
  if (message) {
// do something with it
  } else {
// not found
  }
  //This matches the id of action.id and latestMessage.id
} */

/* <h1>{messages.question}</h1> */



/* map((messages) => {
        return(
          <div key={messages.id}>
            {messages.question}
          </div>
        );
      }); */
class Message extends Component {
  
  returnMessage(){
    if (this.props.returnMessage) {
      return <div key={this.returnMessage.id}>{this.props.returnMessage.question}</div>
    }
  }
  render() {
    return(
      <div>
        <Container>
          <Question>
            {this.returnMessage()}
          </Question>
        </Container>
        <Container>
          <Reply>
........
          </Reply>
        </Container>
        
        
        
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