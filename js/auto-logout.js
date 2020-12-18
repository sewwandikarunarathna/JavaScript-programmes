// setTimeout(logoutUser, 5000);

// function logoutUser(){
// 	window.location = 'logout2.html';
//}

var timer = document.getElementById("timer");
var duration = 64; //in seconds

setInterval(updateTimer, 1000);

function updateTimer(){
	duration--;
	if (duration < 1) {
		window.location = 'logout2.html';
	}else{
	calculate();
	//timer.innerText = duration;
	}
}

//when mouse is moved, again time comes first
window.addEventListener("mousemove", resetTimer);

function resetTimer(){
	duration = 64;
}


function calculate(){
    duration;
	var hrs = parseInt(duration/3600);
	var mins = parseInt((duration%3600)/60);
	var secs = parseInt(duration%60);

	var remainTime = hrs + "hours " + mins + "minutes " + secs + "seconds ";
	timer.innerText = remainTime;
	}

/*function updateClock(){
	var myDate= duration;
	var myHours = myDate.getHours();
	var myMinutes = myDate.getMinutes();
	var mySeconds = myDate.getSeconds();

	if (myHours < 10) {myHours="0" + myHours;}
	if (myMinutes < 10) {myMinutes="0" + myMinutes;}
	if (mySeconds < 10) {mySeconds="0" + mySeconds;}


	var myClock = myHours + ":" + myMinutes + ":" + mySeconds;

	timer.innerText = myClock;
}*/