import React, {Component} from 'react'
import styled from 'styled-components'
import Body from './Body'


const MessageContainer = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 600px;
  padding: 60px;

`
const Center = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: #000;

`


const Box = styled.div`
  border: 1px solid #bcbcbc;
  border-radius: 5px;
  background: #ffffff;
`

const Top = styled.div`
  height: 25px;
  border-bottom: 1px solid #dcdcdc;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  overflow: auto;
  /* Prevents Parent div from getting affected by margin of child div*/
  text-align: center;
  font-family: Roboto, sans-serif;
  background: #dcdcdc;

`

const Circle = styled.button`
  height: 16px;
  background: ${props => props.red ? '#fc635e' : props.yellow ? '#fec041' : props.green ? '#35cb4a' : 'grey'};
  border-radius: 20px;
  margin: 4px;
  margin-left: 6px;
`

const Left = styled.div`
  text-align: left;
`

export default class MessagBoard extends Component {
  render() {
    return(
      <MessageContainer draggable="true" className="resizable">
        <Box>
          <Top>
            <Left>
              <Circle red />
              <Circle yellow/>
              <Circle green/>
            </Left> 
            <Center>
              Vasco de Graaff
            </Center>
          </Top>
          <Body/>
          
        </Box>
      </MessageContainer>
    )
  }
}