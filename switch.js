let day;
let msg;

let dayNumber = 5;

switch(dayNumber){
    case 0:
        day = "sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;

    case 3:
        day = "wednesday";
        break;

    case 4:
        day = "thrusday";
        break;

    case 5:
        day = "Friday";
        break;

    case 6 :
        day = "saturday";
        break;

    default:
        msg = "incorrect number";
}

if ( msg){
    console.log("message:", msg);    
}
else {
    console.log("Day of the week is:", day);

}

