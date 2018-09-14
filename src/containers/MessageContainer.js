import React, { Component } from 'react'
import styled from 'styled-components'
import MessageApp from '../components/MessageApp'


const Container = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 600px;
  padding: 60px;
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

export default class MessageContainer extends Component {
  render() {
    return(
      <Container>
        <Box>
          <Top>
            <Left>
              <Circle red />
              <Circle yellow/>
              <Circle green/>
            </Left>
          </Top>
          <MessageApp>
            <Top>
            Vasco de Graaff
            </Top>
          </MessageApp>
        </Box>
      </Container>
    )
  }
}