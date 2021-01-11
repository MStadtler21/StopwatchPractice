//vars to hold time values
let seconds= 0;
let minutes= 0;
let hours= 0;

//vars to hold display values
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//var for setInterval() function
let interval = null;

//var for stopwatch status
let status = "stopped";

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
if(hours < 10){
    displayHours = "0" + hours.toString();
}

else{
    displayHours = hours;
}

    //Displaying updated time values to users
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}


function startStop(){

    if(status === "stopped"){

        //start the stopwatch by calling the setInterval() function
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";
    }

    else{

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";
    }
}

//Function to reset the stopwatch
function reset(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";
}