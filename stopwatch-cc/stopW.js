// Grab the necessary elements from the DOM
const timer = document.getElementById("js");
var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

// Function to start the timer
function startTimer() {
    if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}

// Function to stop the timer
function stopTimer() {
    if (stoptime == false) {
        stoptime = true;
    }
}

// Function to update the timer every second
function timerCycle() {
    if (stoptime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);
        sec = sec + 1;
        
        // Display double digits for numbers less than 10
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }
        
        // Format seconds, minutes, and hours with leading zeros if necessary
        if (sec < 10)
            sec = "0" + sec;
        
        if (min < 10)
            min = "0" + min;
        
        if (hr < 10)
            hr = "0" + hr;
       
        timer.innerHTML = hr + ":" + min + ":" + sec;
        setTimeout("timerCycle()", 1000);
    }
}

// Function to reset the timer
function resetTimer() {
    timer.innerHTML = "00:00:00";
    stoptime = true;
    hr = 0;
    min = 0;
    sec = 0;
    // Additional code commented out
    // let text = "hr:Min:Sec";
    // let result = text.fontsize(6);
    // document.getElementById("time").innerHTML = result;
    // document.getElementById("stopwatch").innerHTML = "00:00:00" + result;
    // result = "<div style='font-size:32px','text-align:center'>" + "hr:Min:Sec" + "</div>";
    // +('<br>')+"hr:Min:Sec";
    // document.write=('<br>');
    // document.write ="hr:Min:Sec";
}