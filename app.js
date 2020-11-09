var secondHand = document.getElementById("secondHand");
var minuteHand = document.getElementById("minuteHand");
var hourHand = document.getElementById("hourHand");

setInterval(function(){
    var date = new Date();
    var seconds = date.getSeconds();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    // console.log(hours + (minutes / 100));
    hours = hours + (minutes / 100);
    if(hours > 12) {
        hours = hours - 12;
    }
    secondHand.style.transform = "rotate(" + seconds * 6 + "deg)"
    hourHand.style.transform = "rotate(" + hours * 30 + "deg)"
    minuteHand.style.transform = "rotate(" + minutes * 6 + "deg)"
}, 1000)