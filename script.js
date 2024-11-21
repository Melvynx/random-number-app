const randomNumberEl = document.querySelector("#random-number");
const resultEl = document.querySelector("#result");
const min = document.querySelector("#min");
const max = document.querySelector("#max");

randomNumberEl.addEventListener("click", () => {
  resultEl.textContent = Math.floor(
    getRandomNumber(Number(min.value), Number(max.value) + 1)
  );
});

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
