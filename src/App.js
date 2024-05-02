import { Component } from 'react'; // Importing component to create a component class

import logo from './logo.svg';
import './App.css';

class App extends Component { // Changed from function to Class. App extends from the Component class. 

  constructor() {
    super(); // calls the underlying constructor method. 

    this.state = { // React is looking for inside the constructor inside the component.
      name: { 
        firstName: 'Elliott', 
        lastName: 'Rapley' 
      },
      company: 'ZTM'
    } 
  }

  render() { // Using a render method and calling the the JSX/HTML code below within this function.

    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <p>
            Hi { this.state.firstName } { this.state.lastName }, 
            I work at { this.state.company }
          </p>
          <button onClick={() => {
            this.setState(() => {  
              return {
                name: {
                  firstName: 'John', 
                  lastName: 'Smith'
                }
              };
            }, () => {
              console.log(this.state);          
            });
          }}>Change name</button> 
        </header>
      </div>
    );

  }
  
}

export default App;
