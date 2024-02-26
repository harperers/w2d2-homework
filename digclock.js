
//Create a time data function
function currentTime() {
    //Declare variables
    var d = new Date(); //Get current date
    var hr = d.getHours(); //Get current hours
    var min = d.getMinutes(); //Get current minutes
    var sec = d.getSeconds(); //Get current seconds
    var ampm; //Declare Empty variables to store AM or PM
    var utchr = d.getUTCHours(); //Get current Greenwich Mean Time (GMT)
    var timediff; //To store time difference between GMT hour and Local hour
    var adjTimeDiff; //To store time difference converted to positive number
    var timeZone; //To store the 4 time zones (PT,MT,CT,ET)

    timediff = hr - utchr;
    if (timediff < 0) {
        adjTimeDiff = timediff * -1;
    } else {
        adjTimeDiff = timediff;
    }

    if (adjTimeDiff == 8 || adjTimeDiff == 16) {
        timeZone = "PT";
    } else if (adjTimeDiff == 7 || adjTimeDiff == 17) {
        timeZone = "MT";
    } else if (adjTimeDiff == 6 || adjTimeDiff == 18) {
        timeZone = "CT";
    } else if (adjTimeDiff == 5 || adjTimeDiff == 19) {
        timeZone = "ET";
    }

    //Add 0 to single digits for seconds
    if (sec < 10) {
        sec = "0" + sec;
    }
    //Add 0 to single digits for minutes
    if (min < 10) {
        min = "0" + min;
    }

    //Determine AM or PM string
    if (hr == 12) {
        ampm = "PM"; //Set to PM
    } else if (hr > 12) {
        hr -= 12; //Deduct 12 from hours greater than 12 (military time)
        ampm = "PM"; //Set to PM
    } else {
        ampm = "AM"; //Set to PM
    }

    //Assemble time format to display
    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

    //Display current local time and time zone on HTML elements
    document.getElementById("clock").innerText = time; //adding time

    //Run time data function every 1 second
    setInterval(currentTime, 1000); //setting timer
}

//Initial run of time data function
currentTime();
