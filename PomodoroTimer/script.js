
let progressCircle = document.querySelector(".progress");
let radius = progressCircle.r.baseVal.value;
//circumference of a circle = 2πr;
let circumference = radius * 2 * Math.PI;
progressCircle.style.strokeDasharray = circumference;
setProgress(0)
//0 to 100
let track = document.querySelector('.track-time');
let startedTime = 1500;

let i = 0; 
let startSeconds = 60;
let seconds = startSeconds;

myLoop();

function myLoop() {
  setTimeout(function() {
    
    progressCircle.style.strokeDashoffset = circumference - (i / seconds) * circumference;
    i++;
    if(i === seconds + 1) {
      i = 1;
      seconds = startSeconds;
    }
    if(i < seconds + 1) {
      myLoop();
      track.textContent = secondsToMinSec(startedTime--);
    }
    
    
  }, 1000)
}


function setProgress(percent) {
  progressCircle.style.strokeDashoffset = circumference - (percent / 100) * circumference;
}


function secondsToMinSec(d) {
  d = Number(d);
  var m = Math.floor(d % 3600 / 60);
  var s = Math.floor(d % 3600 % 60);



  var mDisplay = m < 10 ? `0${m}:` : `${m}:` ;
  var sDisplay = s < 10 ? `0${s}` : s;
  return mDisplay + sDisplay; 
}