
const inputRef = document.querySelector('#validation-input');
const SymbolsInputRef = Number(inputRef.getAttribute('data-length'));

// метод 1

const onInputBlur = () =>
    inputRef.value.length === SymbolsInputRef ? inputRef
        .className = 'valid' : inputRef.className = 'invalid';

inputRef.addEventListener('blur', onInputBlur);


//  метод 2

// const inputRef = document.querySelector('input#validation-input');
// const SymbolsInputRef = validationInput.getAttribute('data-length');
// // console.log(Number(SymbolsInputRef));

// const onInputFocus = (event) => {
//     const eventValue = event.currentTarget.value;

//     if (eventValue.length === Number(SymbolsInputRef)) {
//         inputRef.classList.add('valid');
//         inputRef.classList.remove('invalid');
//     } else {
//         inputRef.classList.add('invalid');
//         inputRef.classList.remove('valid');
//     }
// }

// inputRef.addEventListener('focus', onInputFocus);