//1. Import REACT
import React from 'react';

//simple JS function to import React - a component is just a function that returns JSX
// function person() {
//   return <h2>
// }
//ES5:
// var person = function() {
//
// }
//2. Create function
//ES6 syntax:
//To include dynamic content (not just HTML), wrap in {}
  //this allows us to print simple expressions or call a function to do more complex things
//Make our component more dynamic by passing config from App.js file - some HTML attributes for Person
//Children = reserved word - any elements between the opening and closing tags of the components
//can't use set.state b/c there is no class, it's a function
//most things should not change your app state, they should just render
const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
    </div>
  )
};

//3. Export person constant that holds that function
export default person;
