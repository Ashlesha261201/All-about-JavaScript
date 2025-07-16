
function rmeote(){

} 
console.log(rmeote);
console.log( new rmeote());

// ----------------------------

// function remote(){
//     this.naam = "ashlesha";
//     this.age = 24;
// }

// let o1= new remote();
// let o2= new remote();
// console.log(o1);
// console.log(o2);

// ----------------------------


// function remote(username, userage){
//     this.naam = username;
//     this.age = userage;
// }

// let o1= new remote( "ashlesha", 23);
// let o2= new remote("patrick", 55);
// console.log(o1);
// console.log(o2);


// ----------------------------

function remote(username, userage){
    this.naam = username;
    this.age = userage;
    this.greet = function(){
        console.log("welcome to samarth classes");
        
    }
}

let o1= new remote( "ashlesha", 23);
let o2= new remote("patrick", 55);
let o3= new remote("kashish", 85);
let o4= new remote("pruth", 65);


console.log(o1);
console.log(o2);
console.log(o3);
console.log(o4);









