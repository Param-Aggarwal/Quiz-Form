const form = document.querySelector("#quiz-form");
const answers = Array.from(document.querySelectorAll(".answer"));

// console.log(form);
form.addEventListener("submit", e => {
  e.preventDefault();

  const checkedAnswers = answers.filter(answer => answer.checked);
  console.log(checkedAnswers);

  checkedAnswers.forEach(answer => {
    const parent = answer.closest(".question-item");

    if (answer.value === "true") {
      parent.classList.add("correct");
      parent.classList.remove("incorrect");
    } else {
      parent.classList.add("incorrect");
      parent.classList.remove("correct");
    }
  });
});

const clearButton = Array.from(document.querySelectorAll(".clear")); // array of clear buttons
clearButton.forEach(e => {
  const array = Array.from(e.previousElementSibling.querySelectorAll(".answer")); // array of corresponding answers list
  const clearParent = e.closest(".question-item"); // corresponding question element
  e.addEventListener("click", e => {
    array.forEach(e => {
      e.checked = false;
    });
    clearParent.classList.remove("correct");
    clearParent.classList.remove("incorrect");
  });
});
