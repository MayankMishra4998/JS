/*
Function's :- 

Functions are reusable code blocks designed to perform a particular task.
Functions are executed when they are called or invoked.
*/

function sayHello() {
    return "Hello World";
}


//Functions Run When You Call Them.
sayHello()


// Parameter in function :-
//        Parameter allow a external variable to enter the function boundry .. 
let a = 5;
let b = 6;
function multiply(a, b) {
    return a * b;
}


// Function can be called from anywhere..


function sayHello() {
    return "Hello World";
}

function showHello() {
    document.getElementById("demo").innerHTML = sayHello();
}


/*
Parameters and Arguments:- 

Parameters are listed inside the parentheses in the function definition.

Arguments are the real values passed to, and received by the function.

*/

function subtract(a, b) {
    return a - b;
}

let x1 = subtract(10, 5);
let x2 = subtract(5, 10);


// a , b are parameter 
// 10 , 5 are arguments

/*

Parameter Rules :- 

 1 => JavaScript function definitions do not specify data types for parameters.
 2 => JavaScript functions do not perform type checking on the passed arguments.
 3 => JavaScript functions do not check the number of arguments received.

*/


// Default Parameter Values :- for default values in parameter we assign a value in parameter ..

function greet(name = "Guest") {
    return "Hello " + name;
}

greet();
// Output will  be :-  Hello Guest

greet("Anna");
// Output will be :- Hello Anna



//  Functions Can Be Called with Variables :- 

let x = 5;
let y = 6;

function multiply(a, b) {
    return a * b;
}

multiply(x, y);



/*
Returning Values from Functions :- 

A function can return a value back to the code that called it.
The return statement is used to send a value out of a function.

ex. => 

           function sayHello() {
             return "Hello World";
           }

           let message = sayHello();

*/

/*  
Returning from a Function Stops Execution :- 

Code written after return will not be executed.

*/

function text() {
    return "Hello"
    console.log("Hello World");
}

text();

// console.log("Hello World"); 
//           will not excute because it return after return statement.. 



// Returning Values to HTML :- 

/*

<p id="demo"></p>

<script>
function toCelsius(farenheit) {
  return (5 / 9) * (farenheit - 32);
}

document.getElementById("demo").innerHTML = toCelsius(77);
</script>


 */



/*

Functions Stored in Variables :- 

A function stored in a variable can be used like any other value.

Example :- 

const myFunction = function() {
  return "Hello";
};

let text = myFunction();

*/



// Arrow Functions :- 
//         They cannot be used before they are defined.

// With Perameter ..
const Arrow1 = (a, b) => {
    return a * b
}


// Without Perameter :- 

const Arrow2 = () => {
    console.log("Arrow Function");

}


/*

   When to Use Arrow Functions:-
       1 => For short functions
       2 => For callbacks and array methods
       3 => When you do not need your own this


   When Not to Use Arrow Functions :- 
       1 => As object methods
       2 => When you need your own this
       3 => When using function declarations
*/




// Immediately Invoked Expressions :- Normally, a function runs only when it is called.
//                             An IIFE runs automatically when the JavaScript engine reads it (compiles it).

// ex

(function IIFE() {
    return " Hello World"
})();



/*
 When is IIFE Used?
    1 => To create a private scope
    2 => To run setup code once
    3 => In older JavaScript code 

*/



// Arrow Function IIFE :- 

(() => {
    console.log("Arrow in IIFE");
})();




// IIFE as a Module (Private Variables)


(function consume() {
    let value = 0;
    return {
        increase() { value++ },
        get() { return value }
    }
})();

consume.increase();
let X = consume.get();





