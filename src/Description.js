import React, {Component} from '../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import Typist from 'react-typist';
import styled from 'styled-components';


const Text = styled.div`
  font-size: 1em;
  font-family: 'Source Code Pro', monospace;
  color: #ffffff;
  padding: 1em;
`
const Center = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 600px;
  padding: 60px;
`

const Cmd = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  background: #333333;
`
const Top = styled.div`
  height: 25px;
  background: #dcdcdc;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  overflow: auto;
  /* Prevents Parent div from getting affected by margin of child div*/
`

const Content = styled.div`

`

const Circle = styled.button`
  height: 16px;
  background: ${props => props.red ? '#fc635e' : props.yellow ? '#fec041' : props.green ? '#35cb4a' : 'grey'};
  border-radius: 20px;
  margin: 4px;
  margin-left: 6px;
`
export default class Description extends Component {
  state = {
    terminal: true,
    renderMsg: false,
  }

  onNameTyped = () => {
    this.setState({ renderMsg: true });
  }

  onClose = () => {
    this.setState({ terminal: false});
  }
  /* This allow the second text to be rendered after the first has been typed */
  render() {
    return (
      <div>
        {this.state.terminal ? (
        <Center>
          <Cmd>
          <Top>
            <Circle red onClick={this.onClose}/>
            <Circle yellow/>
            <Circle green/>
          </Top>  
            <Text>
              <Typist
                onTypingDone={this.onNameTyped}
                startDelay={2000}
                cursor={
                  {hideWhenDone:true,}
                }
              >
                <a>Hey There</a>
                <Typist.Backspace count={9} delay={600} />
                <a>My Name is Vasco</a>
              </Typist>
              <Content>
                {this.state.renderMsg ? (
                <Typist
                  startDelay={1000}
                >
                  Im a high school student living on the small island of Phuket
                </Typist>
                ) : null }
              </Content>
            </Text>
          </Cmd>
        </Center>
        ) : null }
      </div>
    );
  }
}