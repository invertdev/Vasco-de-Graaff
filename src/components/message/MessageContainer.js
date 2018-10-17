import React, { Component } from "react";
import MessageApp from "./MessageApp";

export default class MessageContainer extends Component {
  render() {
    return (
      <div className="col-lg-5 col-xs-11" style={{paddingTop:'5rem'}}>
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
