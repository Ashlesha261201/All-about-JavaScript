// ---------------------this is a wet code that writing every code twice
// class Person{
//     constructor(name, price, international){
//            this.naam = name;
//            this.amount = price;
//            this.indian = international;
//     }

//     greeting (){console.log(`hello from ${this.naam}`)
//     }
// }

// class Student{
//     constructor(name, price, international){
//            this.naam = name;
//            this.amount = price;
//            this.indian = international;
//     }

//     greeting (){console.log(`hello from ${this.naam}`)
//     }
// }


// let a = new Student("mcd", 400, true);
// let b = new Person("kfc", 500, true);
// let c = new Person("pappu", 500, false);

// console.log(a);
// console.log(b);
// console.log(c);


//-------------this is dry code  -- using inheritance-------

// class Person{
//     constructor(name, price, international){
//            this.naam = name;
//            this.amount = price;
//            this.indian = international;
//     }

//     greeting (){console.log(`hello from ${this.naam}`)
//     }
// }

// class Student extends Person{
//     constructor(naam, price, international, rollno){
//         super(naam, price, international)
//            this.roll = rollno;
//     }
// }  //inheritence


// let a = new Student("mcd", 400, true, 50);
// let b = new Person("kfc", 500, true);
// let c = new Person("pappu", 500, false);

// console.log(a);
// console.log(b);
// console.log(c);



class obj1{
    constructor (aa,bb,cc){
        this.a = aa;
        this.b = bb;
        this.c = cc;
    }
}

class ojb2 extends obj1 {
    constructor (aa,bb,cc,dd){
        super(aa,bb,cc)
        this.d = dd;
    }
}

let p1 = new obj1(100,200,"sam")
let p2 = new ojb2("lol",200,"Mav",40)

console.log(p1);
console.log(p2);

