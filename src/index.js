const buttonEl = document.querySelector('button');
const textareaEL = document.querySelector('.form__textarea--ask');
// console.log(inputEl);

buttonEl.addEventListener('click', onButtonClick);
textareaEL.addEventListener('click', onInputClick);

let vocabulary = [];

// const newWord = () => {
//   return textareaEL.value;
// };

const addWord = (word) => {
  //1. Зчитаємо слово з поля
  const newWord = textareaEL.value;
  // newWord();

  //2. Додаємо новий масив до головного існуючого
  console.log(vocabulary);
  return vocabulary.push(newWord);
};

function onButtonClick(event) {
  addWord();
}
function onInputClick() {
  console.log('inputClick');
}
