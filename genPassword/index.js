const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't','u', 'v', 'w', 'x', 'y', 'z'];

const numbers = [0,1,2,3,4,5,6,7,8,9];

let generatorText = document.querySelector('.generator__text')

generatorText.textContent = generatePassword(10, letters);

function generatePassword(passwordLength) {
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        password+=letters[Math.floor(Math.random()*letters.length)]
    }
    return password;
}


// range control
let range = document.querySelector('.settings__range');
let numberOfLetters = document.querySelector('.settings__number-letters')

range.addEventListener('input', (event)=>{
    numberOfLetters.value = event.target.value;
    generatorText.textContent = generatePassword(numberOfLetters.value);
})
