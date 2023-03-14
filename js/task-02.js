const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const ingredient = ingredients.map((el) => {
  let temp = document.createElement("li");
  temp.textContent = el;
  temp.classList.add("item");
  return temp;
});
list.append(...ingredient);
