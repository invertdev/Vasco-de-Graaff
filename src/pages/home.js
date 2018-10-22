import React, { Component } from "react";
import Terminal from "../components/terminal/Terminal";
import MessageContainer from "../components/message/MessageContainer";
class Home extends Component {
  state = { width: "0px", height: "0px" };
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions = () => {
    this.setState({
      width: `${window.innerWidth}`,
      height: `${window.innerHeight}px`
    });
  };
  
  render() {
    console.log(this.state.width);
    if(this.state.width < 769) {
      var terminalsize = (this.state.width * 0.8).toString() + 'px';
    };
    console.log(terminalsize)
    return (
      <div className='justify-center flex flex-auto'>
        
          <div className="flex justify-center  col-lg-12 col-xs-12">
            <div className='flex flex-column'>

            <div className="title mobile-padding">
              <div>{this.state.width < 450 ? (
                <div>
                  <div>VASCO</div>
                  <div>DE GRAAFF</div>
                </div>
              ): <div>VASCO DE GRAAFF</div>}
                
              </div>  
                
            </div>
            <div>
              <img
                className="avatar "
                src={require("../IMG_4625.jpeg")}
                alt="avatar"
              />
              </div>
              <div className="" style={{width: terminalsize}} >
                <Terminal />
              </div>
              <div>{(this.state.width > 1024) ? 
                <MessageContainer /> : null
              }
                
              </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Home;
