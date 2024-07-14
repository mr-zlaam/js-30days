/*variable declaration */

/*  
 Activity 1: Variable declaration
 */
// * Q1= Declare variable using var, assign it a number and log them
var a = 5;
console.log(a);

// * Q2= Declare variable using let, assign it a number and log them
let b = 5;
console.log(b);

// * Q3= Declare variable using const, assign it a boolean and log them
const c = false;
console.log(c);

/* Activity 2: Data types */

// * Q1= Create a variable of different datatypes(string, number, boolean, undefined, null) and log each vairables's type using typeof operator

let d = "hello";
console.log(typeof d);
let e = 5;
console.log(typeof e);
let f = false;
console.log(typeof f);
let g = undefined;
console.log(typeof g);
let h = null;
console.log(typeof h);

/* Activity 3: Resassigning varaibles */
// * Q1= Create a variable using let , assign its initial value and reassign it to another value and log them

let i = 5;
console.log(i);
i = 10;
console.log(i);

// * Q2= Create a variable using const , assign its initial value and reassign it to another value and log them and observe the error
const j = 5;
console.log(j);
j = 10;
console.log(j); // Uncaught TypeError: Assignment to constant variable.
