"use strict";
// const questionButton = document.querySelector(".questionButton");
const questions = document.querySelectorAll(".question");
// const answer = document.querySelector(".answer");

questions.forEach((question) => {
  question.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
    const questionButton = this.querySelector(".questionButton");

    questionButton.src = questionButton.src.includes("plus")
      ? `assets/images/icon-minus.svg`
      : `assets/images/icon-plus.svg`;
  });
});
