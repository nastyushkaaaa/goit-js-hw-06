function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector("[type='number']");
let amount = 0;
input.addEventListener("change", (event) => {
  amount = Number(event.currentTarget.value);
});
let boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const temp = document.createElement("div");
    temp.style.width = `${20 + 10 * i}px`;
    temp.style.height = `${20 + 10 * i}px`;
    temp.style.backgroundColor = getRandomHexColor();
    boxes.append(temp);
  }
}

function destroyBoxes() {
  while (boxes.firstChild != undefined) {
    boxes.removeChild(boxes.firstChild);
  }
}

createBtn.addEventListener("click", () => {
  createBoxes(amount);
});

destroyBtn.addEventListener("click", (event) => {
  destroyBoxes();
});
