
// function sam (){

// }
// console.log(sam());     //undefined
 
// -------------------------------------------------------

// function sam (){

// }
// console.log( new sam());     //object

// -------------------------------------------------------

async function sam (){

}
console.log(sam());             //promise -- undefined
 
// -------------------------------------------------------


// async function sam2 (){
//     return 100
// }
// console.log(sam2());             //promise -- 100

// -------------------------------------------------------


// async function sam2 (){
//     return new Promise((resolve,reject)=>{ resolve("balle balle")})
// }
// console.log(sam2());    

// -------------------------------------------------------

let luck = 1;

async function sam2(resolve, reject) {
    if (luck > 5){
        return new Promise ((resolve,reject)=> { resolve("balle balle")})
    } 
    else {
        return new Promise((resolve, reject) => { resolve("better luck next time")
        })
    }
}
console.log(sam2());









