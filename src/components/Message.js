import React, {Component} from 'react';
import styled from 'styled-components';


const Question = styled.div`
  float: right;
  font-family: Roboto, sans-serif;
  font-size: 1em;
  color: #FFFFFF;
  padding: 10px;
  margin: 15px;
  border-radius: 20px;
  background: #0084FF;
  border: 1px solid #dcdcdc;
  display: inline-block;
`
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
`

export default class Message extends Component {
  render() {
    return(
      <div>
        <Reply>
dsada
        </Reply>
        <Question>
dsdsd
        </Question>
        
      </div>
    )
  }
}
