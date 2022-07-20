// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const textInp = document.querySelector("#validation-input");
const inpLength = document.querySelector(`input[data-length]`);

textInp.addEventListener("blur", () => {
  const textInpLength = textInp.value.length;
  const textInpLengthData = Number(inpLength.dataset.length);
  textInpLength >= textInpLengthData
    ? textInp.classList.add(`valid`)
    : textInp.classList.add(`invalid`);

  console.log(textInpLength, textInpLengthData);
  return textInp;
});
