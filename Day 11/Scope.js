// JavaScript Scope 


/*
Scope = Visibility
Scope determines the accessibility (visibility) of variables.

JavaScript variables have 3 types of scope:
1 => Global scope
2 => Function scope
3 => Block scope

*/

// Global Scope

let x = 1 
var y = 2 
const z = 3

/*  Function Scope :- 
           Each JavaScript function have their own scope.
           yani ki {} ke andr likhi hui chij hi function ke andr kam karegi
 */


function myFunction1() {
  var carName = "Volvo";
}

function myFunction2() {
  let carName = "Volvo";
}

function myFunction3() {
  const carName = "Volvo";
}


// Block Scope :-
//         Block scope ke andr likhi hui chij sirf uske andr hi valid hi uske bahr nii

{
    let x = mayank ;
    console.log(x);
    
}



/*
   Declaring Strict Mode :- 
           Strict mode is declared by adding "use strict",
                   to the beginning of a script or a function.
           Declared at the beginning of a script, 
                   it has global scope (all code in the script will execute in strict mode):
*/

"use strict";
myFunction();

function myFunction() {
  y = 3.14;   // This will also cause an error because y is not declared
}


// another Example :- 

x = 3.14;       // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  y = 3.14;   // This will cause an error
}



/*  Not Allowed in Strict Mode :- 
         1 => Using an object, without declaring it, is not allowed: 
                       { "use strict"; 
                          x = {p1:10, p2:20}; }

         2 => Deleting a variable (or object) is not allowed.
                      "use strict";
                        let x = 3.14;
                        delete x; 

         3 => Deleting a function is not allowed.
         4 => Duplicating a parameter name is not allowed:
                      "use strict";
                       function x(p1, p1) {};

         5 => Octal numeric literals are not allowed:
                      "use strict";
                       let x = 010;  

         6 => Octal escape characters are not allowed:
                       "use strict";
                       let x = "\010";

         7 =>                
*/