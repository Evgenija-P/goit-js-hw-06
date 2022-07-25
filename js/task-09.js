// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерации случайного цвета используй функцию getRandomHexColor.

const btnClick = document.querySelector(`.change-color`);
const body = document.querySelector(`body`);
const spanText = document.querySelector(`.color`);

btnClick.addEventListener("click", (element) => {
  const RandomBgColor = `${getRandomHexColor()}`;
  body.style.backgroundColor = `${RandomBgColor}`;
  spanText.textContent = `${RandomBgColor}`;
  return body.style.backgroundColor;
});

function getRandomHexColor() {
  const bgColorRandom = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  console.log(bgColorRandom);
  return bgColorRandom;
}
