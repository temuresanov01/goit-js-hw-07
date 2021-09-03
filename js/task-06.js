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