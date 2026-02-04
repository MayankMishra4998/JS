/* JavaScript Dates :- 
         Creating Date Objects
         Date objects are created with the new Date() constructor.

         There are 9 ways to create a new date object:

               1 => new Date()
               2 => new Date(date string)

               3 => new Date(year,month)
               4 => new Date(year,month,day)
               5 => new Date(year,month,day,hours)
               6 => new Date(year,month,day,hours,minutes)
               7 => new Date(year,month,day,hours,minutes,seconds)
               8 => new Date(year,month,day,hours,minutes,seconds,ms)

               9 => new Date(milliseconds)
        
*/

let today = new Date();

console.log(today.getFullYear());   // Year (e.g., 2026)
console.log(today.getMonth());      // Month (0 = Jan, 11 = Dec)
console.log(today.getDate());       // Day of month
console.log(today.getDay());        // Day of week (0 = Sunday)
console.log(today.getHours());      // Hours (0–23)
console.log(today.getMinutes());    // Minutes
console.log(today.getSeconds());    // Seconds


// for full date's 

// Full date and time in ISO format :- 
console.log(new Date().toISOString()); 
// Example: "2026-02-04T17:51:00.123Z"

// Full date in local format :-
console.log(new Date().toLocaleString()); 
// Example: "4/2/2026, 11:21:00 PM"

// Just the date (local format) :-
console.log(new Date().toLocaleDateString()); 
// Example: "4/2/2026"

// Just the time (local format) :-
console.log(new Date().toLocaleTimeString()); 
// Example: "11:21:00 PM"


