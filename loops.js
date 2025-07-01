// For loop - syntax

// for(statement1; statement2 ; statement3){
     //execute your code 
// }

// -----------------------------
//  for (let i = 0; i <=100; i++){
//      console.log(i);
     
//  }


 //for -in 

 const user = {Harry: 56, Akash: 67, shree: 97};

 for ( key in user) {
    console.log(user[key]);
    
 }


 // for of loop

 const fruits = ['guava' , 'apple' , 'mango'];

 for (let fruit of fruits ) {
    console.log(fruit);
    
 }


//  //while loop -- syntax

//  while(condition) {
//     //exceute code
//  }


// print values from 1 to 10 

let value = 1;
while (value <= 10){
    console.log(value);
    value++;
    
}


//do while loops -- syntax

// do {
//     //execute your code 
// }

// while(condition);


let num = 1;
do {
    console.log(num);
    num++
    
} while (num < 5);