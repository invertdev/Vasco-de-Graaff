/* import React, {Component} from 'react';

class Instagram extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }
  componentDidMount() {
    fetch('https://api.instagram.com/v1/users/self/?access_token=a0f4f4d4451f456f8fa7ef287c03ae7e')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        isLoaded: true,
        items: json
      })
    });
    console.log(this.state.items);
  }

  render() {
    var { isLoaded, items } = this.state;

    if(!isLoaded){
      return(
        <div>
          Loading...
        </div>
      );
    }
    else{
      return(
        <div className='image-grid'>
        </div>
      );
    }
  }
};

export default Instagram; */