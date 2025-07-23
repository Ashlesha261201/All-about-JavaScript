//fucntion expression 

// var a = function abc (){

// }

//named function expresion 

var ab = function abc (){
    console.log("abc is a function");
    console.log(abc);
    
}

(ab);
// abc()

var x = 10; 
function outer (){
    var y = 5;
    function inner(){
        var z = 2;
        console.log(x + y+ z);
        
    }
    inner();
}

outer();


// var result = (function() {
//     return 5 + 5 ;
// })();
// console.log(result);


// const x = 10;
// x = 15;
// console.log(x);

// function dem0(){
//     if (true){
//         var x = 10;
//     }
//     console.log(x);
    
// }
// dem0();

function outer(x){
    return function inner(y){
        console.log(x + y);
        
    }
}

var myinner = outer(5); 
myinner(3);


// const arr = [3,1,4,2];
// arr.sort();
// console.log(arr);


const fruits = ["apple", "ashlesha", "animal"];
let sorted = fruits.toSorted();
// console.log(sorted);
console.log(fruits);


fruits.reverse();
console.log(fruits);


const num = [12,114,113];
num.sort();
console.log(num);

num.sort(function(a,b){
    return a -b 
})


const arr = [1,2,3,4,5];
let sum =0;
for (let i = 0; i<arr.length; i ++){
    sum += arr[i];
}
console.log(sum);



