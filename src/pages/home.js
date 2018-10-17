import React, { Component } from "react";
import Terminal from "../components/terminal/Terminal";
class Home extends Component {
  render() {
    console.log(width);
    return (
      <div className='justify-center flex flex-auto'>
        
          <div className="flex justify-center  col-lg-12 col-xs-12">
            <div className='flex flex-column'>
            <div className="title">VASCO DE GRAAFF</div>
            <div>
              <img
                className="avatar "
                src={require("../IMG_4625.jpeg")}
                alt="avatar"
              />
              </div>
              <div className="flex flex-auto col-lg-12 col-xs-12" >
                <Terminal />
              </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Home;
