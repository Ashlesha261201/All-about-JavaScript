const people = [
    {name: "alice", age:25},
    {name: "bob", age:30},
    {name: "charlie", age:25}
    
];

const uniqueages = people.reduce(
    (ages,person) => (ages.includes(person.age) ? ages : [...ages, person.age]),
    []
);

console.log(uniqueages);


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

