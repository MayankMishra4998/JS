/* Object's :- 

An Object is a variable that can hold many variables.
Objects are collections of key-value pairs, where each key (known as property names) has a value.
Objects can describe anything like houses, cars, people, animals, or any other subjects.

*/


let Object = {
    name : "Mayank",
    age : 19,
    isStudent : true ,
    isAdult : false,
    location: "Uttarakhand"
}


// We can also add some property in object from external
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";


// Using the new Keyword :- 

// Create an Object


const person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};


/* 
 You can access object properties in two ways :-

      1 => objectName.propertyName
      2 => objectName["propertyName"]

*/

console.log(person2.firstName);
console.log(person2["firstName"]);


// Deleting Properties :-
//The delete keyword deletes a property from an object:

delete person2.eyeColor;




//Nested Objects :-
//Property values in an object can be other objects:

myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}

// Using a For .. In Loop

Object =  {
    name : "Mayank",
    location : "Lohaghat",
    state : "Uttarakhand",
    langvage : "Kumauni"
}
let text = ""
for(let x in Object){
    text += Object[x]
}


/*
Using JSON.stringify() :-

JavaScript objects can be converted to a string with JSON method JSON.stringify().
JSON.stringify() is included in JavaScript and supported in all browsers.
*/

json_stringify = {
    name : "Mayank",
    age : 19,

}