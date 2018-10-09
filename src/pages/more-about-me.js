import React, {Component} from "react";
import MessageContainer from "../containers/MessageContainer";
import "../components/css/flexbox.css";
class More extends Component {
  render() {
    return(
      <div className="center-grid">
        <MessageContainer/>
      </div>
    )
  }
}
export default More