let timer = document.querySelector('.timer__time');
const buttons = document.querySelectorAll('.btn-start, .btn-reset');
let currentTimeInSeconds = 1200;
let time = '';

buttons.forEach(button => {
    button.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('btn-start')) {
            startTimer(currentTimeInSeconds);
        }
        if (evt.target.classList.contains('btn-reset')) {
            timer.textContent = '20:00'
            clearInterval(time);
        }
    })
});

function startTimer(sec) {
    time = setInterval(() => {
        timer.textContent = changeSecondsToMinSec(--sec);
    }, 1000)
}


function changeSecondsToMinSec(d) {
    
    d = Number(d);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);
    let mDisplay = m < 10 ? `0${m}:` : `${m}:` ;
    let sDisplay = s < 10 ? `0${s}` : s;
    return mDisplay + sDisplay; 
    
}