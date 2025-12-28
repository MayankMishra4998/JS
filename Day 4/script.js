// Variable's

let Name = "Mayank"
// let can change the value after assign the value 
Name = "Mohit"
console.log(Name);
// Now Name in console will show Mohti name instant of Mayank


const Name1 = "Mayank"
// const variable is a fix variable it's doesn't change a value even after assign

var Name2 = "Mayank"
// var is ganerally used in old js , var has a drow back after assign it will show in all js



// we can write multiple variable's in a single 
let name = "mayank", age = 43, fullName = "Mayank" + "" + "Mishra"



// Datatypes  :- we have 8 type's of data type..

// String
let color = "Yellow";
let lastName = "Johnson";

// Number
let length = 16;
let weight = 7.5;

// BigInt
{
    let x = 1234567890123456789012345n;
    let y = BigInt(1234567890123456789012345)
}

// Boolean
{
    let x = true;
    let y = false;
}

// Object
const person = { firstName: "John", lastName: "Doe" };

// Array object
const cars = ["Saab", "Volvo", "BMW"];

// Date object
const date = new Date("2022-03-25");

// Undefined
{
    let x;
    let y;
}

// Null
{
    let Null_x = null;
    let Null_y = null;
}

// Symbol
{
    const x = Symbol();
    const y = Symbol();
}


// For checking witch datatype is used 

let variable = typeof "John Doe"
console.log(variable);


// Exponential Notation :- 

let y = 123e5;    // 12300000
// y = 12300000
let z = 123e-5;   // 0.00123
// z = .00123
