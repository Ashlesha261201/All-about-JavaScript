//es5 

function sum1(a,b){
    return a + b;
}

//ES6

const sum = (a, b ) => a + b;

let result = sum (2,4);
console.log("resumt is",result );


// const sum = (a ,b) => {
//     console.log("STATEMENT 1")
//     return a + b ;
// }

const double = (a,b)=>  a * b;
console.log(double(3,4));


const greet = (name = 'Guest') => `hello, ${name}!`;
console.log(greet('john'));
console.log(greet());

// const greeting = `hello , ${name}`;
// console.log(greeting);



// const square = x => {
//     return x *x;
// }
// console.log(square(3));
// // console.log(str.replaceWith);



let str = "Hello World";
console.log(str.replace("World","universe"));


// const isEVEN = x => x % 2 === 0;
// console.log(isEVEN(4), isEVEN(7));


// let fruitbasket = "apple, apple, orange, apple";
// console.log(fruitbasket.replace("apple","orange"));


// function sum (a,b){
//   return a + b                    // ---> Normal function
// }
// console.log(sum (2, 5));

// let  sum = (a,b) =>{
//   return a + b                    // ---> arrow function
// }
// console.log(sum (2, 5));

// function sqr (a){
//     return a*a;

// }
// console.log(sqr (5));
// ------------way 1 --------------------------


// const sqr = (a) => {
//     return a*a
// }
// console.log(sqr (5));

// ------------way 2 --------------------------

// const sqr = (a) => a*a
// console.log(sqr (5));

// ------------way 3 --------------------------

// const sqr = a => a*a
// console.log(sqr (5));


let cube = a => a*a*a
console.log(cube (5));





