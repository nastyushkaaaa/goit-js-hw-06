let counterValue = 0;
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const spanValue = document.querySelector("#value");

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  spanValue.textContent = counterValue;
});

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  spanValue.textContent = counterValue;
});
