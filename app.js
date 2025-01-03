const calc = document.querySelector(".calculation");
const answer = document.querySelector(".answer");
const constainer = document.querySelector(".calc-buttons");
const btns = document.querySelectorAll(".button");

calc.textContent = "";
answer.textContent = "";

let curNum = "";
let ans;

const calculation = function (e) {
  if (e.target.classList.contains("button")) {
    if (e.target.classList.contains("equal")) {
      try {
        answer.textContent = eval(calc.textContent);
      } catch (err) {
        answer.textContent = "Error!";
      }
    } else if (e.target.classList.contains("c")) {
      answer.textContent = "";
      calc.textContent = "";
    } else {
      calc.textContent += e.target.dataset.text;
    }
  }
};

constainer.addEventListener("click", calculation);
