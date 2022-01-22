const counter = document.querySelector("#counter");
const counterButtons = document.querySelectorAll(".btn");

counterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let count = +counter.textContent;
    counter.textContent = button.classList.contains("nextBtn") ? count + 1 : count - 1; 
    changeCounterColor(counter.textContent)
  });
});

function changeCounterColor(count) {
  if (count > 0) {
    counter.style.color = "green";
  } else if (count < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "#333"
  }
}
