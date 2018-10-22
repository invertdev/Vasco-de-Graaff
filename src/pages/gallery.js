import React, { Component } from 'react';
import Instagram from '../components/apifetch';

class Gallery extends Component {
  render() {
    return(
      <React.Fragment>
        <div className='container'>
          <h2>I sometimes take "PICTURES"  <span role="img" className='cameraEmoji'>📷</span></h2> 
        </div>
        <div className='Gallery gallery-area'>
          <div>
            <Instagram/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Gallery;