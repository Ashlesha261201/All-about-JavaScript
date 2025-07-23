

// let obj1 = new Promise(function(resolve, reject){
//        let data = "I will pay you 5000";
//        let error = "hahahhahaha go away";
//     //    resolve(data);
//        reject(error);
       
// })

// console.log(obj1);
// obj1
// .then(( data) => { console.log(data)})
// .catch((error)=> {console.log(error)})
// // .finally(()=> {console.log("i will execute anyways")})


function step1(){
    console.log("please wait i am selecting the image");
    
   return new Promise ( function(resolve, reject){
    setTimeout(function(){
        resolve("image selected")
        
    },4000)
   })
}

function step2(filter){
    console.log("please wait i am applying filter to the image");
    
   return new Promise ( function(resolve, reject){
    setTimeout(function(){
        resolve("filter applied")
        
    }, 2000)
   })
}

function step3(caption){
    console.log("please wait i am adding caption to the image");
    
   return new Promise ( function(resolve, reject){
    setTimeout(function(){
        resolve("caption added")
        
    }, 5000)
   })
}

function step4(uploaded){
    console.log("please wait i am uploading the image");
    
   return new Promise ( function(resolve, reject){
    setTimeout(function(){
        resolve("image uploaded")
        
    }, 3000)
   })
}

 step1()
.then( function (image){
   console.log(image);
   return step2(image)
})
.then( function (filter){
    console.log(filter);
    return step3(filter)
    
})
.then(function(caption){
    console.log(caption);
    return step4(caption)
})

.then(function(uploaded){
    console.log(uploaded);
    
})

