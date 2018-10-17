import React, {Component} from "react";
import MessageContainer from "../components/message/MessageContainer";

class More extends Component {
  render() {
    return(
      <div className="flex-auto flex justify-center">
        <MessageContainer/>
      </div>
    )
  }
}
export default More