let items = document.querySelectorAll(".item");
let itemsCounter = 0;

items.forEach(function (item, index) {
  return (itemsCounter += 1);
});

console.log("Number of categories: " + itemsCounter);

items.forEach(function (item, index) {
  console.log("Category: " + item.firstElementChild.textContent);
  console.log("Elements: " + item.lastElementChild.childElementCount);
});
