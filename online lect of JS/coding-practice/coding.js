// map 
 
// --> it helps to transform original array 

// let arr = [1,2,3,4,5]
// //  for (i=0;i<arr.length;i++){
// //     arr [i] = 2 * arr[i]
// //  }
// // console.log(arr);

// console.log(arr.map(num => 2 * num));


// --------------------filter ()-------------------------------------

// from the callback condition it wil filter the array and will return the array which will only have elements that satisfy the condition of call back 

// let array = [1,2,3,4,5]

// for (i=0;i<array.length;i++){       traditional way 
//     if (array[i]% 2 == 0){
//         console.log(array[i]);
        
//     }

// }


// console.log(array.filter( item => item % 2 == 0));


// --------------------reduce ()-------------------------------------

//helps to console the 

// x = 5;
// function outer(){
//     let x = 10;
//     function inner (){
//         console.log(x);
        
//     }
//     inner();
// }
// outer();

// function greet(name){
//     console.log(`hello, ${name}!`);
    
// }
// 
// greet("name");
// greet("bob");9



// let x = 5;
// function increment(num){
//     num += 1;
//     return num
// }

// x = increment(x);


let counter = 0;
function increment(){
    counter += 1;

}

increment();
increment();
increment();
console.log(counter);

