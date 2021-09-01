let zoom = document.querySelector("#font-size-control");

let text = document.querySelector("#text");

zoom.oninput = function() {
  text.style.fontSize = zoom.value + 'px';
};

// Привет! ТАСК_7
// Так плохо это утарело
// zoom.oninput = function() {
// text.style.fontSize = zoom.value + 'px';
// };

// Через addEventListeneк
// zoom.addEventListener('inpit', ()=>{})

// ТАСК . Строка 22 лучше на тернарник переписать
