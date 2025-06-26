//logical operator

let x = 78;
let y = 101;

console.log(x > 10 && y < 100); //&& only gives value as true if both the values are true
console.log(x > 10 || y < 100); // || will give value as true even if any one of the value is true 
console.log((x === 78)); // its called not operator where we can make tue to false and fal;se to true


//ternary operator -- use for checking the condition

let age = 18;

age >= 18 ? console.log ("person is adult ") : console.log ("not an adult"); // ? here is if and : is else , so it is a if else king of operator

let s = null;
let e = undefined;

console.log(NaN === NaN);