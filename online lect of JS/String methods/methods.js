// let str = "Ashlesha Kawthankar"

// console.log( str.length); //its not a method it is a property therefore we dotn add a paranthesis () at the end of the end as other methods below

// console.log( str.toUpperCase());

// console.log( str.toLowerCase());

// console.log( str.charAt(2));   //chracter starts at 0

// console.log( str.indexOf("h"));  //index of first will alsways come
// console.log( str.indexOf("kawthankar")); //answer will be -1 because K in the variale name is Captial
// console.log( str.indexOf("Kawthankar")); //9

// ---------------------------------------------------------------------

// let string = "ashlesha KavthankaR"
// let newstring = string.toLowerCase()    // ashlesha kavthankar 

// let find = "Kavthankar"
// let newfind = find.toLowerCase()       // kavthankar

// console.log(newstring.includes(newfind));
// console.log(newstring.includes("KAWTHANKAR"));

let str = "Ashlesha Kawthankar            "
str.trim() // to remove the spaces from start and end is removed
console.log(str.trim().length);

//-------------break the code into chunks---------------------------------------

let str1 = "oragnge-banana-mango-apple-pineapple"

console.log(str1.split("-"));

let str2 = "organge-banana,apple,pineapple";
console.log(str2.replaceAll(",", "-").split("-"));
console.log( str2.split("-"));

let firtname = "Ashlesha";
let lastname = "Kawthankar"

console.log( firtname.concat(lastname));

let text = "helllo world i'm ashlesha and i am very fat"

console.log(text.slice(2));
console.log(text.slice(2,8));


//substring 

console.log(text.substring(2,8));


let str4 = "hello world";
console.log(str4.charAt(str4.length - 1));
