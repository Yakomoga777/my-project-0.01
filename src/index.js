const buttonEl = document.querySelector('button')
const inputEl = document.querySelector('.form__input')
console.log(inputEl);


buttonEl.addEventListener('click', onButtonClick)
inputEl.addEventListener('click', onInputClick)

function onButtonClick() {
    console.log('buttonClick');
}
function onInputClick() {
    console.log('inputClick');
}


