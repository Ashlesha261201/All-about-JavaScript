const API = "https://jsonplaceholder.typicode.com/todos"

fetch(API)  //returns a promise
.then((data) => {
   return data.json()
    
})
.then((response) => {
    console.log(response, "response");
    
})
.catch((error) => {
    console.log(data, "catch")
    
})

// fetch("https://jsonplaceholder.typicode.com/todos")

