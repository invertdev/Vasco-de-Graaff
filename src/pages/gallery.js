import React, { Component } from 'react'
import "../components/css/flexbox.css"
import "../components/css/text.css"

class Gallery extends Component {
  render() {
    return(
      <React.Fragment>
        <div className='Heading'>
          <h2>I sometimes take "PICTURES"  <span role="img" className='cameraEmoji'>📷</span></h2> 
        </div>
        <div className='Gallery gallery-area'>
          <div></div>
        </div>
      </React.Fragment>
    )
  }
}

export default Gallery;