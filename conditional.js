// use to excuete a block of a code if condition is true - if
// use to exceute a block of code if condition is false - else
// use to basically check any new condiiton - else if 
//switch statement 

// whether a number is positive or not 

let num = -5;

if (num >0) {
    console.log("Number is positive ")
    
}

else {
    console.log("Number is negative")
    
}

// Print grade of students marks> 90 -> garde A, , MARKS >80 AND MARKS<= 90 --> B 
// MARKS > 70 AND MARKS <= 80 --> C AND BELOW THIS --> FAIL

let marks = 70;
let grade;
if (marks >= 90){
    grade = "A";
}
else if (marks >= 80 && marks < 90){
    grade = "B";
}
else if (marks >= 70 && marks < 80){
    grade = "C";
}

else {
    grade = "Fail";
}
 console.log("Grade of student is :", grade);

