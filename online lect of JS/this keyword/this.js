// 1. direct functional calling ---> ALWAYS POINTS TO THE WINDOW OBJECT

// function samarth (){
//     console.log(this);
    
// }
// samarth();

// -------------------------

// 2.Object  calling ---> point to the object inside which the function whith this keyword is present 

// let obj = {
//     a: 10,
//     b:20,
//     fun: function(){
//         console.log(this);
        
//     }

// }

// obj.fun();

// -------------------

// let obj = {
//     a: 10,
//     b:20,
//     fn: function(){
//         console.log(this);    //output willbe window , because we are calling a function i.e ans() there fn is using direct functional calling and hence answer is window  
        
//     }
// }

// let ans = obj.fn;
// ans();

// -------------------

// let obj2 = {
//     a: 10,
//     b:20,
//     fn: function(){
//         console.log(this);    //output will be obj2, because here function is getting call using object and hence tihis keyword is getting exceuted using object calling type
        
//     }
// }

// obj2.fn();

// -------------------------

// let obj2 = {
//     a: 100,
//     b:200,
//     fn: function(){
//         console.log(this, "1");      //obj2 
//         function sam(){
//           console.log(this, "2");   //window 
        
//     }
//        sam() 
//     }
// }

// -------------------------


// obj2.fn();

// 3. Constructor calling ---> points to the newly created object

// function sam(){
//     this.a = "samarth"
//     this.b = "Vohra"
// }

// let p1 = new sam();
// let p2 = new sam();

// -------------------------

// 4. Arrow function calling ---> depends on the parent's this , here obj is the parent 

// -------------------------


// let obj = {
//     a:100,
//     fn: ()=>{
//         console.log(this);    //window 
//         function abc(){
//             console.log(this)   //window
//         }
//         abc()
        
//     }
// }
// obj.fn();

// -------------------------


// let obj = {
//     a:100,
//     fn: ()=>{
//         console.log(this);      //window
//         const abc=()=>{
//             console.log(this)   // window
//         }
//         abc()
        
//     }
// }
// obj.fn();

// -------------------------


// let obj = {
//     a:100,
//     fn:function(){
//         console.log(this);     //obj
//         const abc=()=>{
//             console.log(this)   //obj
//         }
//         abc()
        
//     }
// }
// obj.fn();

// 5. Indirect calling ---> has call , apply and bind 

let obj1 = { 
    a: 10 , 
    fn: function(x,y){
        
        console.log(this.a, x, y);

     }
}

let obj2 = {
    a: 50,
}

obj1.fn();
obj1.fn.call(obj2, 100, 200);  //1st argument as the new this keyword where the arguments can be passes by commas 
obj1.fn.apply(obj2, [1000, 2000]); // same as that of call but we have to pass the arrugemnets as arrays 
let newfn = obj1.fn.bind(obj2, 100, 200);   //role is to create a copy of the function 
newfn();









