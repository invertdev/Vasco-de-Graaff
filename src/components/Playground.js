import React, {Component} from 'react';
import styled from 'styled-components';

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


export default class Playground extends Component {
  state={
    buttonOn: true,
  }
  
  onClose = () => {
    this.setState({buttonOn: false});
  }
  render() {
    return(
    <div>
      
      <Button>See More</Button>
     
    </div>
    )
  }
}