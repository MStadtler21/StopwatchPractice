//vars to hold time values
let seconds= 0;
let minutes= 0;
let hours= 0;

//vars to hold display values
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//stopwatch functions
function stopWatch(){

    seconds++;

    //logic for incrementing next value
    if( seconds / 60 === 1 ) {
        seconds = 0;
        minutes++;

            if(minutes / 60 ===1){
                minutes = 0;
                hours++;
            }
    }

    //adds leading 0 to value if there is only one digit
if(seconds < 10){
    displaySeconds = "0" + seconds.toString();
}

else{
    displaySeconds = seconds;
}

if(minutes < 10){
    displayMinutes = "0" + minutes.toString();
}
if(hours <10){
    displayHours = "0" + hours.toString();
}

else{
    displayHours = hours;
}

    //Displaying updated time values to users
    document.getElementById("display").innerHTML = hours + ":" + minutes + ":" + seconds;

}

window.setInterval(stopWatch, 1000);