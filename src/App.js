import { Component } from 'react'; // Importing component to create a component class

import logo from './logo.svg';
import './App.css';

class App extends Component { // Changed from function to Class. App extends from the Component class. 

  constructor() {
    super(); // calls the underlying constructor method. 

    this.state = {
      monsters: [],
    };
  }

  // lifecycle methods - the code block below will run as soon as it's "mounted" - First time it get's mounted to the DOM.  
  // a component will only be mounted again if after it's been un-mounted.
  // Good for API calls - to retreive data stored elsewhere. 
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') // URL for where we need to fetch the data from - using the fetch() method. 
      .then(response => // When we get a response from the API
        response.json()) //calling the json() method to convert the response to json format. 

        // whatever got returned from response.json, then it will get passed to (users)
      .then((users) => 
        this.setState(() => { // Then, use setState to add the users to the state and then render. 
          return { monsters: users }
        },
      () => { // then just log this in the console of the dev tools. 
        console.log(this.state);
        }
      )
    )
  };

  render() { // Using a render method and calling the the JSX/HTML code below within this function.
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => { // Using a call back function 
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })
        }
      </div>
    );
  } 
}

export default App;
