import React, {Component} from 'react'
import styled from 'styled-components'


const Messagebox = styled.div`
  padding: 10px;
  margin: 5px;
  background: #f2f0f0;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  background: #ffffff;
  display: inline-block;
`

const Sender = styled.div`
  padding: 10px;
  margin: 5px;
  background: #0084FF;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  display: inline-block;
  align-content: right;
  `
const Reciever = styled.div`
  padding: 10px;
  margin: 5px;
  background: #f2f0f0;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  display: inline-block;
`


/* function MessageType(props) {
  const isSender = props.messages.map((messages)=> {
  if({this.state.isSender}) {
  return (
    console.log("sender"),
    <Sender>jdsdl</Sender>);
  }
  return (<Reciever/>);
})}
 */
/* styled component must always be in capitals */


function Sender(props) {
  return (
    <Sender>
      {messages.text}
    </Sender>
  );
}

function Reciever(props) {
  return (
    <Reciever>
      {messages.text}
    </Reciever>
  );
}


class MessageControl extends Component {
  
}



export default function Messages(props) {
  const content = props.messages.map((messages) =>
    <div>  
      <div key={messages.id}>
        <div>{messages.id}</div>
        <MessageType>{messages.text}</MessageType>
      </div>
    </div>
  );
  return(
    <div>
      {content}
    </div>

  )
}

/* function is used to simplify component */