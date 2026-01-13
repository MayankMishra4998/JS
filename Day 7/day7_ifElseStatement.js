/*
Conditional Statements :- 
Conditional Statements allow us to perform different actions for different conditions.

Conditional statements run different code depending on true or false conditions.

Conditional statements include:

1 => if
2 => if...else
3 => if...else if...else [Nested if else]
4 => switch
5 => ternary (? :)
*/

// Switch Sintex.  
switch (expression) {
    case x:
        // code block
        break;
    case y:
        // code block
        break;
    default:
    // code block
}

let day = 3
switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;


    case 3:
        console.log("Wednesday");
        break;


    case 4:
        console.log("Thusday");
        break;


    case 5:
        console.log("Friday");
        break;


    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Enter a valid day between 1 to 7");
}


// if else condition's

let number = 30;
if(number >=0 && number <10){
    console.log(number);
}
else if(number>=10 && number <30){
    console.log(number);
}
else{
    console.log(number);   
}


// Ternary 

number>=20 ? console.log("Number is less than 20")
           : console.log("Number is greater than 20");



