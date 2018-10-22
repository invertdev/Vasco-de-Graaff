import React, {Component} from "react";
import MessageContainer from "../components/message/MessageContainer";

class About extends Component {
  render() {
    return(
      <div className="flex-auto flex justify-center">
        <MessageContainer/>
      </div>
    )
  }
}
export default About;