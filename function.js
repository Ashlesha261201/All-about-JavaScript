function sum (num1, num2){
    //block of code
    return num1 + num2;
}

const result = sum (2, 5);
console.log(result, "result");

function hello(){
    let greeting = "hello";
    console.log(greeting);
    
}

hello();

// function checkNumber (num){
//     if (num > 0){
//         console.log("The Number is Positive");
//     }
    
    
//     else if (num < 0){
       
//     console.log("The Number is Negative");
//     }
    
//     else {
//         console.log("The Number is Zero");
        
//     }
// }
// checkNumber(5);

// checkNumber(-3);
// checkNumber(0);



function categorizeNumber (num) {
    switch (num) {
        case 1:
            console.log("one");
            break;
        case 2:
            console.log("Two");
            
            break;

        case 3:
            console.log("Three");

            break;
    
        default:
            console.log("Unknown number");

            break;
    }
}

categorizeNumber(1);



let x = 5;
let rating = x > 4 ? "good": "bad";
console.log(rating);


let number = 10;

if (number % 2 === 0){
    console.log("happy");
    
}

else {
    console.log("sad");
    
}

// function test (x , y){
//     return x > 10 && y > 10;
// }

// const value = test (12, 5);
// console.log(value);

// function sum(a, b){
//     return a + b ;

// }


let b = 5;
let c = 2;
// let d = "3";

console.log( b % c);

let person = {
    firstname: "John",
    age: 30
};

console.log(person.firstname);

var obj = {
    length:20,
    height:35,
}
if('breadth' in obj === false)
{
    obj.breadth = 12;
}

console.log(obj.breadth);


for (let g = 1; g <=3; g++){
    let j = 1;
    while (j <= 2){
        console.log(g + "," + j);
        j++
        
    }
}

var count = 0;
while (count <10)
{
    console.log(count);
    count++
    
}

let text = "hello";
console.log(text.lenght);


let str = "";

for (let l = "" ; l <= 5; l++){
    str += l;
}

console.log(str);
