const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't','u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseLetters = letters.map(item => item.toUpperCase());
const symbols = '` ~ ! @ # $ % ^ & * ( ) _ - + = { } [ ] \' | : ; " < > , . ? / '.split(' ');
const numbers = [0,1,2,3,4,5,6,7,8,9];
const allSymbols = [...letters, ...symbols, ...numbers, ...upperCaseLetters]
console.log(allSymbols);

let generatorText = document.querySelector('.generator__text')

generatorText.textContent = generatePassword(10, allSymbols);

function generatePassword(passwordLength) {
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        password+=allSymbols[Math.floor(Math.random()*allSymbols.length)]
    }
    return password;
}


// range control
let range = document.querySelector('.settings__range');
let numberOfLetters = document.querySelector('.settings__number-letters')

range.addEventListener('input', (event)=>{
    numberOfLetters.value = event.target.value;
    generatorText.textContent = generatePassword(numberOfLetters.value);
    setDefaultStateCopyButton();
})


//Copy text
let copyBtn = document.querySelector('.btn__copy');

copyBtn.addEventListener('click', (event)=>{
    copyPasswordToClipboard();
    event.target.textContent = 'copied';
    event.target.style.backgroundColor = 'rgb(166, 238, 202)';
})

function copyPasswordToClipboard() {
    let range = document.createRange();
    range.selectNode(document.querySelector(".generator__text"));
    window.getSelection().removeAllRanges();  
    window.getSelection().addRange(range); 
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

function setDefaultStateCopyButton() {    
    copyBtn.textContent = "Copy";
    copyBtn.style.backgroundColor = null;
}

//Update button
let updateButton = document.querySelector('.btn__update');
updateButton.addEventListener('click', (event)=>{
    generatorText.textContent = generatePassword(document.querySelector('#numberLetters').value)
    setDefaultStateCopyButton();
})
