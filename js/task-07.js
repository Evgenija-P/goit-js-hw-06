// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inpEl = document.querySelector("#font-size-control");
const outputSize = document.querySelector("#text");

outputSize.classList.add(`input-style`);

inpEl.addEventListener("input", (element) => {
  const valInput = element.target.value;
  outputSize.style.fontSize = `${valInput}px`;
  return outputSize.style.fontSize;
});
