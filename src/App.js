import React, { Component } from 'react'
import './App.css';
import Title from './components/Title'
import Avatar from './components/Avatar'
//import Navbar from './components/Navbar'
import Description from './components/Description'
import MessageBoard from './components/MessageBoard'
import styled from 'styled-components'


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


class App extends Component {
  state = {
    seeMore: false,
  }
  /* state set default false */
  seeMore = () => {
    this.setState({ seeMore: true })
  }
  render() {
    return (
      <div>
        <Title>VASCO DE GRAAFF</Title>
        <Avatar src={require('./avatarpic.jpg')} alt="avatar"/>
        <div> {this.state.seeMore ? (
          <MessageBoard/>
        ):
          <div>
            <Description/>
            <Button onClick={this.seeMore}>See More</Button>
          </div>
      }
        </div>
      </div>
    );
  }
}

export default App;
