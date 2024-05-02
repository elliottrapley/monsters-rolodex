import { Component } from 'react'; // Importing component to create a component class

import logo from './logo.svg';
import './App.css';

class App extends Component { // Changed from function to Class. App extends from the Component class. 

  constructor() {
    super(); // calls the underlying constructor method. 

    this.state = { // React is looking for inside the constructor inside the component.
      name: 'Dave'
    } 
  }

  render() { // Using a render method and calling the the JSX/HTML code below within this function.

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name}</p>
          <button onClick={() => {
            this.setState({name: 'John'}) // Using the setState method to update the name to 'John' after clicking on the button. 
          }}>Change name</button> 
        </header>
      </div>
    );

  }
  
}

export default App;
