"use strict";
const buttons = document.querySelectorAll(".btn");
const imgCard = document.querySelector(".img-card");
const customerName = document.querySelector("#customer-name");
const customerText = document.querySelector("#customer-text");
const customers = [];
const names = ["John", "James", "Olga", "Liza", "Mark"];
const texts = ["text1", "text2", "text3", "text4", "text5"];
let count = 0;

function NewCustomer(name, img, text) {
  this.name = name;
  this.img = `../img/customer-${img}.jpg`;
  this.text = text;
}

for (let i = 0; i < 5; i++) {
  customers.push(new NewCustomer(names[i], i, texts[i]));
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("btn-left")) {
        count = count === 0 ? 4 : --count;
    } else {
        count = count === 4 ? 0 : ++count;
    }
    customerName.textContent = customers[count].name;
    customerText.textContent = customers[count].text;
    imgCard.src = customers[count].img;
  });
});
