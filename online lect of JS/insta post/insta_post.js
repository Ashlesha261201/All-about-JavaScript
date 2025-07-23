// tsk 1 - select the image  --- 4s
//task 2 - add filter  to img --- 2s
// task 3 - add caption to task 2 ----5s
// task 4 upload task 3 image --- 3s


function step1(fn){
        console.log("please wait im selecting image");

    setTimeout(() => {
        // console.log("image selected");
        fn("image selected")
    }, 4000);
}

function step2(image, fn){
    console.log(`please wait im aadding filter to ${image}`);
    
    setTimeout(() =>{
        console.log("filter added");
        fn("filtered image")
    }, 2000 )
 }

function step3(filter, fn){
    console.log(`please wait im aadding caption to ${filter}`);
    
    setTimeout(() =>{
        console.log("caption added");
        fn("captioned imaged")
    }, 5000 )
 }

 function step4(caption){
    console.log(`finally uploading the  ${caption}`);
    
    setTimeout(() =>{
        console.log("image uploaded");
    }, 3000 )
 }



 // callback hell -that is callback nesting -- also known as pyramid of doom
step1(function (image){ 
    console.log(image)
      step2(image, function (filter){
        console.log(filter);
          step3(filter, function(caption){
             console.log(caption);
              step4(caption)
             
        })
    });

})

