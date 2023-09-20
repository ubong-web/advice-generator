"use strict";

const containerEl = document.querySelector(".container");
console.log(containerEl);
const infoEl = document.querySelector("#info");
console.log(infoEl);
const buttonEl = document.querySelector(".dice-container");
const adviceUrl = "https://api.adviceslip.com/advice";

buttonEl.addEventListener("click", () => {
  fetch(adviceUrl)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".id-number").textContent = `${data.slip.id}`;
      document.querySelector(".advice").textContent = `${data.slip.advice}`;
    });
});
