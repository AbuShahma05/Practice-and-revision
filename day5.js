let counter = 0;

const counterDisplay = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

incrementBtn.addEventListener("click", function () {
  counter++;
  counterDisplay.textContent = counter;
});

decrementBtn.addEventListener("click", function () {
  counter--;
  counterDisplay.textContent = counter;
});

resetBtn.addEventListener("click", function () {
  counter = 0;
  counterDisplay.textContent = counter;
});
