/*
JavaScript has 8 Datatypes :- 

A JavaScript variable can hold 8 types of data:

String => A text of characters enclosed in quotes
Number =>	A number representing a mathematical value
Bigint =>	A number representing a large integer
Boolean =>	A data type representing true or false
Object =>	A collection of key-value pairs of data
Undefined =>  How JS will show emptyness or variable value not assign yet
Null =>	How develper will show to emptyness
Symbol => A unique and primitive identifier
*/

// String
let color = "Yellow";
let lastName = "Johnson";

// Number
let length = 16;
let weight = 7.5;

// BigInt
let BigInt_X = 1234567890123456789012345n;
let BigInt_y = BigInt(1234567890123456789012345)

// Boolean
let Boolean_x = true;
let Boolean_y = false;

// Object
const person = {firstName:"John", lastName:"Doe"};

// Array object
const cars = ["Saab", "Volvo", "BMW"];

// Date object
const date = new Date("2022-03-25");

// Undefined
let Undefined_x;
let Undefined_y;

// Null
let Null_x = null;
let Null_y = null;

// Symbol
const Symbol_x = Symbol();
const Symbol_y = Symbol();


// The typeof Operator => is used to find the datatype type 

let name = "Mayank";
let type = typeof(name);
console.log(type);

