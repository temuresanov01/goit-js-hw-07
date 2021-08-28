const inputRef = document.querySelector('#controls input');
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const boxRef = document.querySelector('#boxes');

renderBtnRef.addEventListener('click', () => createBoxes(inputRef.value));
destroyBtnRef.addEventListener('click', destroyBoxes);

function createBoxes(value) {
    let newBoxes = [];
    for (let i = 0; i < value; i += 1) {
        const newBox = document.createElement('div');
        newBox.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
        newBox.style.width = `${30 + i * 10}px`;
        newBox.style.height = `${30 + i * 10}px`;
        newBoxes.push(newBox);
    }
    boxes.append(...newBoxes);
    
    function getRandom(min, max){
  return Math.ceil(Math.random() * (max - min) + min)
}
};

function destroyBoxes() {
    boxes.innerHTML = '';
}

//   метод 2 .................

// const * = document.querySelector('#controls');
// const * = controls.querySelector('input');
// const render = inputEl.nextElementSibling;
// const destroy = controls.lastElementChild;
// const boxes = document.querySelector('#boxes');

// render.addEventListener('click', createBoxes);
// destroy.addEventListener('click', removeBoxes);



