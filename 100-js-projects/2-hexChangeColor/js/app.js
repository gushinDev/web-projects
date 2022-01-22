const hexValue = document.querySelector("#hex-value");
const btn = document.querySelector(".btn");
const hexLetter = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

btn.addEventListener("click", () => {
  let randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  hexValue.textContent = randomColor;
});

function getRandomColor() {
  let hexString = "";
  for (let i = 0; i < 6; i++) {
    hexString += hexLetter[Math.floor(Math.random() * hexLetter.length)];
  }
  return `#${hexString}`;
}
