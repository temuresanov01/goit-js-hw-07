             // метод 1

const inputRef = document.querySelector('#validation-input');
const SymbolsInputRef = Number(inputRef.getAttribute('data-length'));

const onInputBlur = () =>
    inputRef.value.length === SymbolsInputRef ? inputRef
        .className = 'valid' : inputRef.className = 'invalid';

inputRef.addEventListener('blur', onInputBlur);


            //  метод 2 

// const inputRef = document.querySelector('#validation-input');
// const SymbolsInputRef = Number(inputRef.getAttribute('data-length'));

// console.log(Number(SymbolsInputRef));

// const onInputBlur = () => {
    
//     if (inputRef.value.length === SymbolsInputRef) {
//         inputRef.className = 'valid'
//     } else {
//         inputRef.className = 'invalid'
//     }
// }

// inputRef.addEventListener('blur', onInputBlur);

//  метод 3

// const inputChange = document.querySelector('#validation-input');
// const dataLength = Number(inputChange.getAttribute('data-length'));

// const blurInputArea = () => {
//     if (dataLength === inputChange.value.length) {
//         inputChange.classList = 'valid'
//     } else {
//         inputChange.classList = 'invalid'
//     }
// }
// inputChange.addEventListener('blur', blurInputArea);

// метод 4

// const inputChange = document.querySelector('#validation-input');
// const dataLength = Number(inputChange.getAttribute('data-length'));
// inputChange.addEventListener('blur', blurInputArea);

// function blurInputArea() {
//     if (dataLength === inputChange.value.length) {
//         inputChange.classList.remove = ('invalid')
//         inputChange.classList = ('valid')
//     } else {
//          inputChange.classList.remove = ('valid')
//         inputChange.classList = ('invalid')
//     }
// }




