const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const ingredient = ingredients.forEach((el) => {
  const temp = document.createElement("li");
  temp.textContent = el;
  temp.classList.add("item");
  list.append(temp);
});
