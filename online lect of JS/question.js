// const people = [
//     {name: "alice", age:25},
//     {name: "bob", age:30},
//     {name: "charlie", age:25}
    
// ];

// const uniqueages = people.reduce(
//     (ages,person) => (ages.includes(person.age) ? ages : [...ages, person.age]),
//     []
// );

// console.log(uniqueages);


// const numbers = [1,2,3,4];
// function sum (...args){
//     return args.reduce((acc,num) => acc + num, 0);

// }

// const result = sum(...numbers);
// console.log(result);



const products = [
    {name: "apple", price: 0.5, instock: true},
    {name: "banana", price: 0.25, instock: false},
    {name: "apple", price: 0.75, instock: true}

];

const available = products.filter((product)=> product.instock);
console.log(available);


// const arr = ["apple", "banana", "orange"];
// const firstfruit = arr.shift();
// console.log(arr, firstfruit);


// const numbers = [1,2,3,4,5];
// const [first,second, ...rest] = numbers;
// console.log(first, second, rest);


var x = 5;
(function (){
    var x =10;
    console.log(x);
    
})();
console.log(x);

// const arr = ["apple", "banana", "cherry"];
// for (const fruit of arr){
//     console.log(fruit);
    
// }

function add(a,b){
    return a + b;
}

function mul(a,b){
    return a*b;
}
const result = mul(add(2,3), 4);
console.log(result);

const arr = [1,2,3,4,5];
// const sum = arr.reduce((acc , curr) => acc + curr ** 2, 0);
// console.log(sum);

const sum = arr.filter((num) => num % 2 === 0).map ((num) => num * 2);
console.log(sum);

const people = [
    {name: "alice", age:25},
    {name: "bob", age:30},
    {name: "charlie", age:5}
    
];
const oldestperson = people.reduce((oldest , person) => person.age > oldest.age ? person : oldest);
console.log(oldestperson);


function cretae (){
    let count = 0;
    return function(){
        count += 1;
        return count;
    };
}

const counter1 = cretae();
const counter2 = cretae();

console.log(counter1());
console.log(counter1());
console.log(counter2());

// const numbes = [1,2,3,4,5];
// const [first, ...rest] = numbes;
// console.log(first, rest);


const y = [1,2,3,4,5];
const p = y.reduce((acc,curr) => acc + curr , 10);
console.log(p);


const numbes = [1,2,3,4,5];
const dou = numbes.map((num) => num * 2);
const eve = dou.filter((num) => num % 2 === 0);
console.log(eve);


const str = "hello";
const chars = [...str];
console.log(chars
);


const user = {
    naam: "john doe",
    age:35,
    email: "jdij",
    location: {
        city:"mumbai", state:"maha", country : "IND"
    },
};

console.log(user.naam);
console.log(user["location"]["city"]);


function person(name){
    this.name = name;
}

person.prototype.greet = function(){
    console.log(`hello, my name is ${this.name}`);
    
}
const john = new person("john");
john.greet();


// const obj = {
//     name: "john",
//     sayhello: function(){
//         const fun = function(){
//             let name = "alex";
//             const gun = () => {
//                 console.log(this);
                
//             };
//             gun();
//         };
//         fun();
//     },
// };
// obj.sayhello();

const key = "name";
const obj = {name: "john", age:30};
console.log(obj[key]);
console.log(obj["key"]);


// function outerfunction(){
//     const innerfuct = () => {
//         console.log(this);
        
//     };
//     innerfuct();
// }

// const obj2 = {name: "ash", outerfunction : outerfunction};
// obj.outerfunction(); 


function account(){
    this.balance = 0;
}

account.prototype.deposit = function (amount){
    this.balance += amount;
};
function savingacc (){
    account.call(this);
    this.inetrestrate = 0.05;

}
savingacc.prototype = Object.create(account.prototype);
const savingacc = new Savingacc();
savingacc.deposit(100);
console.log(savingacc.balance);


