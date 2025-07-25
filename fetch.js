 const promobj = fetch('https://dummyjson.com/products/1');
 console.log(promobj);
 
 promobj.then(response => response.json()).then (result => console.log(result))
 