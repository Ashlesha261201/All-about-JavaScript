let obj = {
    name : "ashlesha",
    age : 20,
    colour: "balck",
    ismarried: false
}
console.log(obj["age"]);



let arr = [10,20,30,40,50];
console.log(arr[2]);   //this is called the array way 

console.log(typeof(obj.ismarried));
console.log(obj.colour);


let room = {
    ischair: true,                  //properties
    bags : 2,                       //properties
    ac : "gpdrej",                  //properties
    bed : true  ,                    //properties
    canlightblink : function(){     //method  -- they are fun. inside an object
        console.log("yes");
    }
}


console.log(room.ischair);
room.canlightblink();
