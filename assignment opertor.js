//assignmnet operators

let x = 10;
 // = is an simple assignment operator

 let y = 20;

//  x = x + y;
 x+=y;
//the statemnet on both 8 & 9 are same and correct ac 
 console.log("sum", x);

 x-=y; //x = x - y
 x*=y; // x = x * y
 x/=y; // x = x / y;
 x%=y; // x = x % y;
//  x**=y // x = x ** y; power of 


 console.log("sub", x);
 console.log("mul", x);
 console.log("div", x);
 console.log("modulous", x);
 console.log("power of", x);

//can use for strings as well
let Firstname  = "Ashlesha"
let lastname = "kawthankar"

Firstname+=lastname
console.log("fullname", Firstname);

//addition on string and number -- final number will always be a string
// whereas subtracting of string and number -- final result will always be a number as JS will convert string into the number before subtraction 
 
const age = 20;
const string = "is my age";

const statement = age + string

console.log("statement", statement);

let a = 2;
let b = "2";

let result = a - b;

console.log("result", result);