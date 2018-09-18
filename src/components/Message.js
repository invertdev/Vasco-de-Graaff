import React, {Component} from 'react';
import {connect} from 'react-redux';
import './css/Message.css'

// Message only returns the new states
class Message extends Component {
  DisplayMessage(){
    //it doesnt have to display anything if the state is empty
    if (this.props.Messages) {
      //.map() iterates though
      return this.props.Messages.map((message) => {
        return(
          //created 2 differnent boxes using flexbox to serperate and the use flex-direction directly
          <div className='flex-column'>
            <div className='parent-container flex-end'>
              <div className='message question' key={message.id}>{message.question}</div>
            </div>
            <div className='parent-container'>
              <div className='message answer' key={message.id}>{message.reply}</div>
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