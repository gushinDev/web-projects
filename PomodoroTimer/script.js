
let progressCircle = document.querySelector(".progress");
let radius = progressCircle.r.baseVal.value;
//circumference of a circle = 2πr;
let circumference = radius * 2 * Math.PI;
progressCircle.style.strokeDasharray = circumference;
setProgress(0)
//0 to 100


let i = 0; 
let seconds = 25 * 60;
myLoop();

function myLoop() {
  setTimeout(function() {
    
    progressCircle.style.strokeDashoffset = circumference - (i / seconds) * circumference;
    i++;
    if(i === seconds + 1) {
      i = 0;
      seconds = 3;
    }
    if(i < seconds + 1) {
      console.log(i, seconds)
      myLoop();
    }
    
    
  }, 1000)
}


function setProgress(percent) {
  progressCircle.style.strokeDashoffset = circumference - (percent / 100) * circumference;
}

