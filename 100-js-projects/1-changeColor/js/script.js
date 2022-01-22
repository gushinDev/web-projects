const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
  let colors = [];
  for (let i = 0; i < 3; i++) {
    colors.push(Math.floor(Math.random() * 256));
  }
  return `rgb(${colors.join(",")})`;
}
