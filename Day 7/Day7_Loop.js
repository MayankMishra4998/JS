/*
 Loops:- 
 loops are used to repect a block of code multipal time..

 type's :- 
 1 => For loop
 2 => While loop
 3 => do-While loop

*/

// for Loop :- 

for(let i=0; i<=10; i++ ){
    console.log(i);
}

// ex 2 

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let len = cars.length;

let text = "";
for (let i = 0; i < len; i++) {
  text += cars[i];
}


/*  While Loop :- While loops execute a block of code as long as a specified condition is true.

JavaScript have two types of while loops:

 1 => while loop
 2 => do while loop

*/


// While Loop
let i=0 ;
while (i < 10) {
  text += "The number is " + i;
  i++;
}


// Do-While Loop 

do {
  text += "The number is " + i;
  i++;
}
while (i < 10);



// Example :- 

const arr = ["BMW", "Volvo", "Saab", "Ford"];
let j = 0;
let space = "";

while (arr[j]) {
  text += arr[j];
  j++;
}