import React, { Component } from 'react'
import './App.css';
import Terminal from './TerminalReplica'
import styled from 'styled-components'
import MessageContainer from '../containers/MessageContainer';


const Title = styled.div`
  font-size: 4rem;
  font-family: 'Oswald' , sans-serif; 
  text-align: center;
`

const Button = styled.button`
  height: 50px;
  width: 100px;
  border-radius: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-width: 2px;
  padding:3px;
  background: #6221ea;
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  color: #ffff;
`

const Avatar = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 3px solid #000000;
  /* display: block and margins auto to center allign objects*/
`



class App extends Component {
  state = {
    seeMore: true,
  }
  /* state set default false */
  seeMore = () => {
    this.setState({ seeMore: true })
  }
  render() {
    return (
      <div>
        <Title>VASCO DE GRAAFF</Title>
        <Avatar src={require('../IMG_4625.jpeg')} alt="avatar"/>
        <div> {this.state.seeMore ? (
          <MessageContainer/>
        ):
          <div>
            <Terminal/>
            <Button onClick={this.seeMore}>See More</Button>
          </div>
      }
        </div>
      </div>
    );
  }
}
export default App;
