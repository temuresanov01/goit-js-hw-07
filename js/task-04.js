const clickButton = {
    sub: document.querySelector("[data-action = increment]"),
    add: document.querySelector("[data-action = decrement]"),
    span: document.querySelector("#value"),
    wrap: document.querySelector("#counter"),
};
let counterValue = 0;

const increment = () => {
  counterValue += 1;
  document.getElementById('value').textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  document.getElementById('value').textContent = counterValue;
};
clickButton.sub.addEventListener('click', increment);
clickButton.add.addEventListener('click', decrement);