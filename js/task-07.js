// let zoom = document.querySelector("#font-size-control");

// let text = document.querySelector("#text");

// zoom.oninput = function() {
//   text.style.fontSize = zoom.value + 'px';
// };

// 2 метод через (addEventListener)

let zoom = document.querySelector("#font-size-control");

let text = document.querySelector("#text");

zoom.addEventListener('input', elem => {
    elem.preventDefault()
  text.style.fontSize = `${zoom.value}px`;
  
// показывает на сколько стоит ползунок
  
  console.log(zoom.value);

// показывает на сколько изменился размер шрифта в px
  
    console.log(text.style.fontSize);
}) 
