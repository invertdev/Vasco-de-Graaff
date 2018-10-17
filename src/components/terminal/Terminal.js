import React, { Component } from "react";
import Typist from "react-typist";


export default class Terminal extends Component {
  state = {
    terminal: true,
    renderMsg1: false,
    renderMsg2: false,
  };

  onNameTyped = () => {
    this.setState({ renderMsg1: true });
  };

  onTyped =() => {
    this.setState({renderMsg2: true});
  }

  onClose = () => {
    this.setState({ terminal: false });
  };
/* This allow the second text to be rendered after the first has been typed */
  render() {
    return (
      <div className="flex flex-auto">
        {this.state.terminal ? (

            <div className="cmd flex flex-auto flex-column" >
              <div className="top flex flex-auto">
                <button className="circle red" onClick={this.onClose} />
                <button className="circle yellow" />
                <button className="circle green" />
              </div>
              <div className="text flex flex-auto flex-column">
                 <Typist
                  onTypingDone={this.onNameTyped}
                  startDelay={2000}
                  cursor={{ hideWhenDone: true }}
                  className="flex flex-auto"
                >
                  <a className="terminal-text">Hey There</a>
                  <Typist.Backspace count={9} delay={600} />
                  <a className="terminal-text">
                    I see you checking out my website{" "}
                  </a>
                </Typist>
                <div>
                  {this.state.renderMsg1 ? (
                    <div>
                      <a className="terminal-text">
                        <Typist startDelay={900} onTypingDone={this.onTyped}>
                          It was made using React.js and a few libraries
                        </Typist>
                      </a>
                      <div>
                        {this.state.renderMsg2 ? (
                        <Typist startDelay={2500}>
                          <a className="terminal-text">I hope you like it</a>
                          <Typist.Backspace count={7} Delay={3500}/>
                          <a className="terminal-text">❤️ it</a>
                        </Typist>
                        ) : null}
                      </div>
                    </div>
                  ) : null}
                </div> 
              </div>
            </div>

        ) : null}
      </div>
    );
  }
}
