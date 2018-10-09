/* class Gallery extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos/')
    .then(response => response.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json
      })
    });
  }

  render() {
    var { isLoaded, items } = this.state;

    if(!isLoaded){
      return(
        <div>
          Loading...
        </div>
      )
    }
    else{
      return(
        <div className='image-grid'>
          <ul>
            {items.map(item => (
              <div>
              <li key={item.id}>
              {item.id} 
              </li>
              <img src={item.url}/>
              </div>
            ))}
          </ul>
        </div>
      )
    }
  }
}; */