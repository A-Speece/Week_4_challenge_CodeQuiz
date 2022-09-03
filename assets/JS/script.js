var welcomeScreen = document.getElementById("welcome-screen");
var startButton = document.getElementById("start-button");
var questionScreen = document.getElementById("question-screen");
var questionEl = document.getElementById("question-text");
var choice1El = document.getElementById("choice1");
var choice2El = document.getElementById("choice2");
var choice3El = document.getElementById("choice3");
var choice4El = document.getElementById("choice4");

var currentIndex = 0;

var questions = [
  {
    text: "This is question1",
    choices: [1, 2, 3, 4],
  },
  {
    text: "This is question2",
    choices: ["5", "6", "7", "8"],
  },
];

function startQuiz() {
  welcomeScreen.style.display = "none";
  questionScreen.style.display = "flex";
  displayQuestion();
}

function displayQuestion() {
  questionEl.textContent = questions[currentIndex].text;
  choice1El.textContent = questions[currentIndex].choices[0];
  choice2El.textContent = questions[currentIndex].choices[1];

  choice1El.addEventListener("click", goNext);
  choice2El.addEventListener("click", goNext);
}

function goNext() {
  currentIndex++;
  displayQuestion();
}

startButton.addEventListener("click", startQuiz);
