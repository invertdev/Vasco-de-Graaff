import React, { Component } from "react";
import Typist from "react-typist";
import "./css/terminal.css";
import './css/flexbox.css';

export default class Description extends Component {
  state = {
    terminal: true,
    renderMsg: false
  };

  onNameTyped = () => {
    this.setState({ renderMsg: true });
  };

  onClose = () => {
    this.setState({ terminal: false });
  };
  /* This allow the second text to be rendered after the first has been typed */
  render() {
    return (
      <div className=''>
        {this.state.terminal ? (
          <div className="">
            <div className="cmd">
              <div className="top">
                <button className="circle red" onClick={this.onClose} />
                <button className="circle yellow" />
                <button className="circle green" />
              </div>
              <div className="text">
                <Typist
                  onTypingDone={this.onNameTyped}
                  startDelay={2000}
                  cursor={{ hideWhenDone: true }}
                >
                  <a>Hey There</a>
                  <Typist.Backspace count={9} delay={600} />
                  <a>My Name is Vasco</a>
                </Typist>
                <div>
                  {this.state.renderMsg ? (
                    <Typist startDelay={1000}>
                      Im a high school student living on the small island of
                      Phuket
                    </Typist>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
