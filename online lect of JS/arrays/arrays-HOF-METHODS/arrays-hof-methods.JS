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

// let arr = [10,20,30,40,50]

// let returnerd = arr.map ( function (item , index){
//     console.log(item*2);
    
// })

// console.log(arr);
// console.log(returnerd);

// --------------practical ---------------------------------------

// let arr = [10,20,30,40]

// arr.forEach(function (item, index){       --- foreach
//     console.log(item + item);
    
// })


// let arr = [10,20,30,40];
// let newarr = arr.map(function (item , index ){
//     return item*item
// }) 

// console.log(arr);
// console.log(newarr);


// --------------filter ()---------------------------------------

// let arr = [10,20,26,30]

// arr.filter(function (item , index){
//      if(item % 10 === 0) {return true}
// })

// console.log(arr);
// console.log(arr.filter(function (item , index){
//      if(item % 10 === 0) {return true}
// })
// );

// --------------find ()---------------------------------------
// let arr = [10,20,26,30]

// let ele = 30
// let found = arr.find(function (item, index ){
//     if (item === ele) {return true}
// })

// console.log(arr);
// console.log(found);

// --------------some ()---------------------------------------
// let arr = [10,20,26,30]

// let decision = arr.some(function (item , index){
//     if( item %10 === 0){return true}
//     })

// console.log(decision);

// --------------every ()---------------------------------------
let arr = [10,20,20,30]

 let decision = arr.every(function (item, index){
    console.log("hello");
    if (item%10 ===0)
    return true
})
console.log(decision);








