document.addEventListener('DOMContentLoaded', function(){


var hourHand = document.getElementById("hour");
var minuteHand = document.getElementById("minute");
var secondHand = document.getElementById("second");

function initClock() {

//To get current time:
var date = new Date();
var hour = date.getHours() % 12; 
var minute = date.getMinutes();
var second = date.getSeconds();

	var hourDeg = (hour * 30) + (0.5 * minute); // every hour, 30 deg - 30 / 60
	var minuteDeg = (minute * 6) + (0.1 * second); // every minute, 6 degrees - 6/60
	var secondDeg = second * 6; // 360 / 60

	hourHand.style.transform = "rotate(" + hourDeg + "deg)";
	minuteHand.style.transform = "rotate(" + minuteDeg + "deg)";
	secondHand.style.transform = "rotate(" + secondDeg + "deg)";


	setTimeout(initClock, 1000);
};

initClock();

});