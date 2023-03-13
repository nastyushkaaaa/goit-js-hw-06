function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const span = document.querySelector(".color");
let spanText = span.textContent;
const body = document.querySelector("body");

btnChangeColor.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
});
