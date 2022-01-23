const filterButtons = document.querySelectorAll(".filter-btn");
const input = document.querySelector("#search-item");
const items = document.querySelectorAll(".store-item");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    if (btn.dataset.filter === "all") {
      items.forEach((item) => {
        item.classList.remove("visually-hidden");
      });
    } else {
      items.forEach((item) => {
        if (!item.classList.contains(`${btn.dataset.filter}`)) {
          item.classList.add("visually-hidden");
        } else {
          item.classList.remove("visually-hidden");
        }
      });
    }
  });
});

input.addEventListener("input", () => {
  items.forEach((item) => {
    if (item.classList.value.indexOf(input.value) === -1) {
      item.classList.add("visually-hidden");
    } else {
      item.classList.remove("visually-hidden");
    }
  });
});
