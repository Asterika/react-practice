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
const person = () => {
  return <p>I am a Person!</p>
};

//3. Export person constant that holds that function
export default person;
