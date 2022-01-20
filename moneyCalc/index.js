const buttons = document.querySelectorAll('.btn');
const subtitle = document.querySelector('.subtitle');
const input = document.querySelector('input');

subtitle.textContent = localStorage.getItem('myCash')

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    if(btn.classList.contains('btn-success')){
      subtitle.textContent = +subtitle.textContent + +input.value; 
      input.value = '';
      saveChanges(subtitle.textContent)
    }
    else{
      subtitle.textContent = +subtitle.textContent - +input.value; 
      input.value = '';
      saveChanges(subtitle.textContent)
    }
  })
});

function saveChanges(value) {
  localStorage.setItem('myCash', value);
}