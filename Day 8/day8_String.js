// String :- use to write english line in js

let name = " My Name is Mayank Mishra"

// String lenght :- 
let string_lenght = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = string_lenght.length;

/*
   Code	          Result          Description

   \'	             '	            Single quote
   \"	             "	            Double quote
   \\	             \	            Backslash
 */

 let text = "We are the so-called \"Vikings\" from the north.";
 // Output = We are the so-called "Vikings" from the north.

 // Same as Other's

 /*
  Some other Properties :- 

          Code	        Result

          \b	        Backspace
          \f	        Form Feed
          \n	        New Line
          \r	        Carriage Return
          \t	        Horizontal Tabulator
          \v	        Vertical Tabulator 
  */

// Interpolation :- 
// `` used to impliment a variable inside string by ${}..

let FirstName = "Mayank";
console.log(`My name is ${FirstName}`);

// HTML Templates :- Writing html through JS

let header = "Template String";
let tags = ["template strings", "javascript", "es6"];

let HTML = `<h2>${header}</h2><ul>`
for(const x of tags){
  HTML += `<li>${x}</li>`
}
HTML += `</ul>`


