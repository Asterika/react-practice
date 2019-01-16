import React, { Component } from 'react';
import './App.css';
//need uppercase character - should be name of component
//lowercase = reserved for native react syntax
import Person from './Person/Person';

//use extends to inherit from component which is imported from React library
class App extends Component {
  //only works in components where things are extending component which is imported from REACT
  //NOT available in function components
  //USE STATE WITH CARE!!! Err on side of function components
  //state is managed from inside a component
  state = {
    persons: [
      { name: 'Duke', age: 28 },
      { name: 'Juno', age: 22 },
      { name: 'Sammie', age: 34 }
    ],
  otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked');
    //DON'T DO THIS - this.state.persons[0].name = 'Maximilian';
    //use this special state provided by React:
    //this directs React to update DOM
    //will merge our new state with existing data
    //setState takes new object with updated data, looks at which part we're overwriting
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Juno', age: 22 },
        { name: 'Sammie', age: 'ancient' }
      ]
    } )
  }
  //this class has 1 method - 'render'
  //React calls this to render things to the screen
  //Must render HTML code to the DOM to the screen
  //Then export the App class as default class
  render() {
    return (
      //pre-loaded React component
      //gets used in index.js file
        //this code is JSX, JS that looks like HTML
      //RESTRICTIONS:
        //some words can't be used - "class" b/c it's a reserved word
        //words must be provided by the React library
        //once it's rendered in the browser/dev tools, it gets converted to 'class'
        //can't generally return adjacent elements after the /div i.e. add another heading - you can, but not best practice
        //should wrap all into 1 root element per component
        //don't add parentheses here as if it's a function - this will render the click immediately upon React rendering this code
        //pass a reference to this event by prefixing the function with "this."
        //"this" should refer to the class itself
      <div className="App">
          <h1>Hi, I am a React App</h1>
          <p>This is really working!</p>
          <button onClick={() => this.switchNameHandler('Maximilian!!!')}>Switch Name</button>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')}>My Hobby: Stealing chapstick </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
      </div>
    );
    //minimum 3 arguments:
      //1. Element we want to render to the DOM - can be your own component or imported
      //2. Configuration for this - a JS object or null
      //3. Any amount of children - can have multiple separated by commas - children = what's nested inside the div
      //IF WE WANT TO INCLUDE AN H1 ELEMENT NOT AS TEXT BUT AS AN ACTUAL ELEMENT, NEED TO ADD REACT.CREATEELEMENT...
      //className: can add as many configurations you want
    //THIS PORTION EQUALS THE JSX CODE BLOCK ABOVE
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work now?'));
  }
}

export default App;
