import React, { Component } from 'react';
import './App.css';
//need uppercase character - should be name of component
//lowercase = reserved for native react syntax
import Person from './Person/Person';

//use extends to inherit from component which is imported from React library
class App extends Component {
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
      <div className="App">
          <h1>Hi, I am a React App</h1>
          <p>This is really working!</p>
          <Person />
          <Person />
          <Person />
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
