
let progressCircle = document.querySelector(".progress");
let radius = progressCircle.r.baseVal.value;
//circumference of a circle = 2πr;
let circumference = radius * 2 * Math.PI;
progressCircle.style.strokeDasharray = circumference;
setProgress(0)
//0 to 100


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
    }
    
    
  }, 1000)
}


function setProgress(percent) {
  progressCircle.style.strokeDashoffset = circumference - (percent / 100) * circumference;
}

