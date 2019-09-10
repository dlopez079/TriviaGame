$(document).ready(function() {
    console.log("JS Linked")

    //Insert Total Trivial Trivia in #banner.
    $("#banner").html("<h1>Total Trivial Trivia!</h1>");

    //establish variabled needed for the javascript
    //Set the time we're counting down to
    var countDownTime = new time("11:13:25").getTime();

    //Update the counte down every 1 second
    var x = setInterval(function() {

    //Get today's time
    var now = getTime();

    //Find the distance between now and the count down date
    var countDownTime - now;

    //time calculations for hours, minutes and seconds
    var hours = Math.floor((distance %(1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//Output the result in the #main with id.
    $("#main").html = hours + minutes + seconds");

S


    //Insert body content onto HTML page. 
    $("#main").html("Time Remaining: " + timeRemaining);



}); //END OF DOCUMENT READY!!!!