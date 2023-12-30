"use strict";

/* Generate current time and date used in bonus.html*/

/* a command to call the showClock() function display the countdown clock*/
showClock();
/* repeats the showClock() function every second */
setInterval("showClock()", 1000);

function showClock() {
    /* <!-- This fulfills requirement 3.2.6 A)--> */
    var thisDay = new Date();
    var localDate = thisDay.toLocaleDateString(); // this metod returns the text of the current date using local conventions
    var localTime = thisDay.toLocaleTimeString(); // method returns the the text of the current time

    /* Display the current date and time */
   document.getElementById("currentTime").innerHTML = 
   localDate + "<br />" + localTime;
}