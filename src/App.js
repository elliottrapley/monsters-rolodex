import { Component } from 'react'; // Importing component to create a component class

import logo from './logo.svg';
import './App.css';

class App extends Component { // Changed from function to Class. App extends from the Component class. 

  constructor() {
    super(); // calls the underlying constructor method. 

    this.state = {
      monsters: [
        {
          name: 'Sarah'
        },
        {
          name: 'Elliott'
        },
        {
          name: 'Connor'
        }
      ]
    };
  };

  render() { // Using a render method and calling the the JSX/HTML code below within this function.

    return (
      <div className="App">
        {
          this.state.monsters.map((monsters) => { // Using a call back function 
            return <h1>{monsters.name}</h1>;
          })
        }
      </div>
    );
  } 
}

export default App;
