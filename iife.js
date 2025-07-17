// self invoking function

(function hello (){
    console.log("hello");
    
})();

(function abc() {
    var a = 10;
})();


var result = (function ( ){
    return 5 +5 ;

})();
console.log(result);
