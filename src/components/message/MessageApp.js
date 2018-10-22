import React, { Component } from "react";
import "../../reducer";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Message from "./Message";
import { selectButton } from "../../actions/buttonClick";
import { contact } from "../../actions/buttonClick";


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
        <div className="button-align flex">{this.createButton()}</div>
        <div>
          {this.props.ContactForm ? null: 
          <button onClick={() => this.props.contact()} className="button">Contact</button>}
        </div>
        
        <div>
          {this.props.ContactForm ? (
            <div >
              <form>
                <input className="flex-auto col-xs-12"/>
              </form>
            </div>
          ): null}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    buttons: state.buttons,
    ContactForm: state.ContactForm
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
