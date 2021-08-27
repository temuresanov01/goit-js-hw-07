let zoom = document.querySelector("#font-size-control");

let text = document.querySelector("#text");

zoom.oninput = function() {
  text.style.fontSize = zoom.value + 'px';
};