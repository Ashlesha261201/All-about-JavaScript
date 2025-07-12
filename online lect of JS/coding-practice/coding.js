// map 
 
// --> it helps to transform original array 

let arr = [1,2,3,4,5]
//  for (i=0;i<arr.length;i++){
//     arr [i] = 2 * arr[i]
//  }
// console.log(arr);

console.log(arr.map(num => 2 * num));


// --------------------filter ()-------------------------------------

// from the callback condition it wil filter the array and will return the array which will only have elements that satisfy the condition of call back 

let array = [1,2,3,4,5]

// for (i=0;i<array.length;i++){       traditional way 
//     if (array[i]% 2 == 0){
//         console.log(array[i]);
        
//     }

// }


console.log(array.filter( item => item % 2 == 0));


// --------------------reduce ()-------------------------------------

//helps to console the 

let 