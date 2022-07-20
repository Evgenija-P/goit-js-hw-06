// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulItem = document.querySelector("ul");

const makeLiItems = (ingredient) => {
  for (let i = 0; i < ingredients.length; i += 1) {
    const makeLi = document.createElement("li");
    makeLi.textContent = ingredient;
    makeLi.classList.add(`item`);

    return makeLi;
  }
};

const elements = ingredients.map(makeLiItems);
ulItem.append(...elements);
console.log(ulItem);
