import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Photo1 from "./images/photo1.jpg";
import Photo3 from "./images/Photo3.jpg"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }

  
  render() { 

    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading.....</div>;
    }

    else {

      return (
        <div className='App'>
          <h1>React API</h1>            
            <ol>
              {items.map(item => (
                <li key={item.id}>
                  Name: {item.name} | Email: {item.email}
                </li>
              ))};
            </ol>
           <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.address.street}
              </li>
            ))}
           </ul>
           <button type="button" class="btn btn-primary">Primary</button>
           <div class="card" style={{width: "18rem"}}>
              <img class="card-img-top" src={Photo1} alt="Clouds"/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
          </div>
          <div class="card" style={{width: "18rem"}}>
            <img class="card-img-top" src={Photo3} alt="Jon and I in Branson"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Jon and I are in Branson, MO in July 07, 2025</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
          </div>
        </div>
      );

    }

      
  }
}
 
export default App;