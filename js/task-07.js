let fontInput = document.querySelector("#font-size-control");

let textSpan = document.querySelector("text");

fontInput.oninput = function() {
  textSpan.style.fontSize = fontInput.value + "px";
};
