//higher order function 


//----------------this eg is not an HOF----------------------------------
// function a (x){
//   console.log("i am hof");
  
//     console.log(x);

    
// }

// function b(){

// }

// a (10);

//----------higher order fucntion----------------------------------------

// function a (fn){
//   console.log("i am hof");
  
//     // console.log(x);
//     fn()

    
// }

// function b(){
//     console.log("i am b");
    
// }

// a (b);

// -------------------eg 2 : HOF----------------------------------------------------

// function a() {
//     console.log("i am a");
//     function b (){
//         console.log("i am b");
        
//     }
//     return b;
// }

// a();

// ----------------------------------------

function a(fn) {
    console.log(fn)
    return true
        
    }
function b(){
    console.log("i am b ");
    
}


a();

// here the function which is being called i.e b , it is called a callback function.







