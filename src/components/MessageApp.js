import React, { Component } from "react";
import "../reducer";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Message from "./Message";
import { selectButton } from "../actions/buttonClick";
import { contact } from "../actions/buttonClick";
import "../reducer/reducer-message";
import "./css/Button.css";
import "./css/DisableHighlight.css";

class MessageApp extends Component {
  createButton() {
    return this.props.buttons.map(button => {
      return (
        <button
          className="button noSelect"
          key={button.id}
          onClick={() => this.props.selectButton(button.id, button.message)}
        >
          {button.button}
        </button>
      );
    });
  }
  render() {
    return (
      <div className="container-sizing">
        <div>
          <Message />
        </div>
        <div className="button-align">{this.createButton()}</div>
        <button onClick={() => this.props.contact()} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    buttons: state.buttons
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ 
    selectButton: selectButton,
    contact: contact
  }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(MessageApp);
