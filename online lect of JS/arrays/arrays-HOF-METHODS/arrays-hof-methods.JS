// -----------------------------------------------------

// let arr = [10,20,30,40,50]

// --------------foreach()---------------------------------------

// arr.forEach() ---- syntax
//  arr.forEach( function (item , index){} )    complete syntaxt

// let returnedval = arr.forEach( function (item, index){
//     console.log(item, index);
//     console.log(item+item, index*item);
//     return item     // it will not return anything because foreach method does not return anything so therefore it will come as undefined as the return value
    
// })

// console.log(returnedval);

// usage of forEach is looping


// --------------MAP()---------------------------------------
//map() ---> accepts callback fnc. , has 2 arguments item and index, returns new array with same length 

let arr = [10,20,30,40,50]

let returnerd = arr.map ( function (item , index){
    console.log(item*2);
    
})

console.log(arr);
console.log(returnerd);



