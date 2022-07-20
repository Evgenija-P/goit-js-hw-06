const ulElement = document.querySelectorAll("li.item");
console.log(`Number of categories:`, ulElement.length);

// const categ = () => {
//   for (let i = 0; i < ulEl.length; i += 1) {
//     const itemText = document.querySelector("h2");
//     console.log(`Category:`, itemText.textContent);

//     const liLiItems = itemText.nextElementSibling;
//     const liCategoriesEl = liLiItems.querySelectorAll("li");
//     console.log(`Elements:`, liCategoriesEl.length);
//   }
// };

const rezCategories = ulElement.forEach((element) => {
  const nameCategories = element.firstElementChild.textContent;
  console.log(`Category:`, nameCategories);

  const allElementsCategories = element.lastElementChild.children.length;
  console.log(`Elements:`, allElementsCategories);
});
