import React, { Component } from "react";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>

        <p>i am just doing this to make sure that something will be coming on to the page.</p>
      </div>
    );
  }
}

export default App;


//first i am going to need to create my reducers file and my actions 
//i will need to create an empty reducer file to hook up my reducer to my index.js file