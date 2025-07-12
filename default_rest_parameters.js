function sum (a,b){
    b = (b == undefined) ? 1: b ;   //one way of writing is this 
    return a + b;
}

let result = sum(2)
console.log(result);


function sum (a = 2,b = 1){
                                        //one way of writing is this 
    return a + b;
}

let result1 = sum()
console.log(result1);


// ---------------spread syntax-----------------------------------


function multiply (a,b,c){
    return a * b * c;
}

const array = [2,3,4]

let mul = multiply (...array);
console.log("Multiplication result ", mul);


let arr = [1,2,3,4];

let obj = {...arr};
console.log(obj);

// ---------------rest parameters-----------------------------------

function sumofallnumber (a,b,...args){
    let sum = 0;

    for (let value of args){
        sum = sum + value;
    }

    return sum;
}

let result2 = sumofallnumber (1,2,3,4,5);
console.log(result2);

