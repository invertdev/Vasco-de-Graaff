import React, { Component } from "react";
import MessageApp from "../components/MessageApp";
import "../components/css/terminal.css";
import '../components/css/Message.css'

export default class MessageContainer extends Component {
  render() {
    return (
      <div className="container">
        <div className="box">
          <div className="messageapp">
            <div className="left">
              <button className="circle red" />
              <button className="circle yellow" />
              <button className=" circle green" />
            </div>
          </div>
          <MessageApp>
            <div className="messageapp">Vasco de Graaff</div>
          </MessageApp>
        </div>
      </div>
    );
  }
}
