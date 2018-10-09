import React, { Component } from 'react'
import "../components/css/flexbox.css"
import "../components/css/text.css"

class Gallery extends Component {
  render() {
    return(

      <div className='heading'>
        <h2>I sometimes take "PICTURES"  <span role="img" className='cameraEmoji'>📷</span></h2> 
        <div className='gallery'>
          <div></div>

        </div>
      </div>
      

    )
  }
}

export default Gallery;