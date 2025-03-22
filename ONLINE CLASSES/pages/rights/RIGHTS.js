document.getElementById("page").addEventListener("click", alert("HI"));

let score = 0;
let questionIndex = 0;

function checkAnswer(answer) {
  if (answer === "correct") {
    score++;
  }
  questionIndex++;
  questionIndex === 2 ? showResult() : showNextQuestion();
}

function showNextQuestion() {
  const questions = document.querySelectorAll(".question-container");
  questions[questionIndex - 1].style.display = "none";
  questions[questionIndex].style.display = "block";
}

function showResult() {
  document.getElementById("quizResult").style.display = "block";
  document.getElementById(
    "score"
  ).textContent = `You answered ${score} out of 2 questions correctly.`;
}

function restartQuiz() {
  score = 0;
  questionIndex = 0;
  const questions = document.querySelectorAll(".question-container");
  questions.forEach((question) => (question.style.display = "block"));
  document.getElementById("quizResult").style.display = "none";
}
