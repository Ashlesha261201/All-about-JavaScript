// -----------------constructor function -----------------

function Person (naam , umar, kaam) {
     this.naam = naam ;
     this.age = umar;
     this.work = kaam;
     this.greet = function (){
        console.log("welcome toconstructor");
        
     }


}

let P11 = new Person("ashlesha", 3 , "sleep");
let P22 = new Person("sam", 45, "teach");
let P33 = new Person("ac", 1, "cool");
let P44 = new Person("chair", 6 , "sit");

console.log(P11);
console.log(P22);
console.log(P33);
console.log(P44);

// -----------------same task with class as above-----------------

class Person2{
    constructor(naam , umar, kaam) {
     this.naam = naam ;
     this.age = umar;
     this.work = kaam;

    }
    greeting (){ console.log("welcome to classes");
    }
}

let P1 = new Person2("ashlesha", 3 , "sleep");
let P2 = new Person2("sam", 45, "teach");
let P3 = new Person2("ac", 1, "cool");
let P4 = new Person2("chair", 6 , "sit");

console.log(P1);
console.log(P2);
console.log(P3);
console.log(P4);