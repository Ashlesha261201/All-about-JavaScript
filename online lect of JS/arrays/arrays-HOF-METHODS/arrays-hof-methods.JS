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


// ----arrow method-----
// let c = arr.map(item => item * item);
// console.log(c);

// const user = [
//     {
//         firstname: "ankit",
//         lastname: "sharma",
//         age : 35
//     },
//     {
//         firstname: "ashlesha",
//         lastname:"kavthsnkar",
//         age : 23
//     }
// ]

// let name = user.map(function(item , index){
//     return item.firstname;
// })

// console.log(name);

// const arr = [1,2,3,4,5];
// const squredarr = arr.map(num => Math.pow(num,2));
// console.log(squredarr);



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
let arr = [18,20,20,30]

//  let decision = arr.every(function (item, index){
//     console.log("hello");
//     if (item%10 ===0)
//     return true
// })
// console.log(decision);

const adult = arr.every(age => age >= 18 );
console.log(adult);


// --------------reduce ()---------------------------------------

// const arr = [1,2,3,4,5];

// let reduced = arr.reduce(function(item , index){
//     item = item + index;
//     return item;
// }, 0);

// console.log(reduced);


// //to find max value using reduce 
// const output = arr.reduce(function (item , index){
//       if (index > item){
//         item = index;
//       }
//       return item
// }, 0)

// console.log(output);



// const students = [
//     {name:"ankit", rollno:31, marks:78},
//     {name:"ruhi", rollno:15, marks:97},
//     {name:"john", rollno:16, marks:25},
//     {name:"ruth", rollno:7, marks:59},
    
// ];

// // marks < 60 then add 20 
// //marks > 60 then their total marks 

// let array = students.map(students => {
//     if (students.marks < 60){
//         students.marks += 20;
//     }
//     return students
// })

// console.log(array);


// let filteredstudents = array.filter(students => students.marks > 60);

// console.log(filteredstudents);

// let reduce = filteredstudents.reduce(function(item , index){
//           item = item + index.marks;
//           return item
// }, 0)

// console.log(reduce);
