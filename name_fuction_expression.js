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
