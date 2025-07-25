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


// const user = {
//     naam: "john doe",
//     age:35,
//     email: "jdij",
//     location: {
//         city:"mumbai", state:"maha", country : "IND"
//     },
// };

// console.log(user.naam);
// console.log(user["location"]["city"]);

// setTimeout(() => 
//     console.log(1),0)
//     console.log(2);
//     new Promise ((res) => {
//         console.log(3);
//         res();
//     }).then(() => console.log(4)
//     );
//     console.log(5);
    
//     function printnum (arr){
//         arr.map((data) => console.log(data)
//         );
//     }

//     function fun(arr){
//         setTimeout(() => {
//             printnum(arr)
//         }, 1000);
//     }
// fun([1,2,3,4,5])

// const mypromise = new Promise ((resolve,reject) => {
//     resolve("s");
//     reject("r")
// });
// mypromise
// .then((resutl) => console.log(resutl)
// )
// .catch((error) => console.log(error)
// )

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("hello");
//     }, 1000);
// });
// promise.then(
//     (value) => console.log("resol", value),
//     (reasoon) => console.log("reje", reasoon)
    
// );

// console.log("app");
// setTimeout(() => {
//     console.log("banana");
    
// }, 0);
// Promise.resolve().then(()=> console.log("cherry")
// )
// console.log("date");

// function greeet( mesaage){
//     return new Promise ((res, rej)=> {
//         if (mesaage === "hi") res(mesaage);
//         else rej("hmm")
//     });
// }

// const result = greeet("hello")
// .then((data) => {
//     console.log(data);
    
// })
// .catch((data) => {
//     console.log(data);
    
// });

// let a = true;
// setTimeout(() => {
//     a = false;
// }, 2000)

// while (a){
//     console.log(" ---- inside while ---");
    
}