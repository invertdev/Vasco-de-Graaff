import React, { Component } from 'react'
/* import Messages from './MessageList' */
import styled from '../../node_modules/styled-components';

const Top = styled.div`
  border-bottom: 1px solid #dcdcdc;
  padding: 5px;
  text-align: center;
  font-size: 1em;
  font-family: Roboto, sans-serif;
`
/* isSender is the user of the site */
const DUMMY_DATA = [
  {
    id: "Vasco",
    isSender: false,
    text:"Whats up?"
  },
  {
    id: "You",
    isSender: true,
    text:"Hello",
  },
  {
    id: "me",
    isSender: true,
    text:"doejde",
  }
]
export default class Body extends Component {
  constructor() {
    super()
    this.state = {
      messages: DUMMY_DATA
    }
  }

  render() {
    return(
      <div>
        <Top>
          Vasco de Graaff
        </Top>
{/*         <Messages messages={this.state.messages} />
 */}      </div>
    )
  }
}