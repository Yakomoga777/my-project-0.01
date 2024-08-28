const buttonEl = document.querySelector('button');
const textareaEL = document.querySelector('.form__textarea--ask');

buttonEl.addEventListener('click', onButtonClick);
// textareaEL.addEventListener('click', onInputClick);
let vocabulary = [];

export function onButtonClick(event) {
  addWord();
  console.table(`vocabulary - ${vocabulary}`);
}

const addWord = () => {
  const newWords = textareaEL.value; // Get new words
  const trimmedString = newWords.trimRight(); // Ignor the last spasekey

  const wordsArray = trimmedString.split(/[.,!?;:()\s]+/); //Change the string to arrey

  return (vocabulary = vocabulary.concat(wordsArray)); // Add new words to the main arrey
};
