var welcomeScreen = document.getElementById("welcome-screen");
var startButton = document.getElementById("start-button");
var questionScreen = document.getElementById("question-screen");
var highScoreScreen = document.getElementById("highscore-screen");
var questionEl = document.getElementById("question-text");
var choice1El = document.getElementById("choice1");
var choice2El = document.getElementById("choice2");
var choice3El = document.getElementById("choice3");
var choice4El = document.getElementById("choice4");

var currentIndex = 0;

var questions = [
  {
    text: "Commonly used data types DO Not Include",
    choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
  },
  {
    text: "The condition in an if / else statement is enclosed with ___________.",
    choices: [
      "1. quotes",
      "2. curly brackets",
      "3. parenthesis",
      "4. square brackets",
    ],
  },
  {
    text: "Arrays in JavaScript can be used to store _________.",
    choices: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
  },
  {
    text: "String values must be enclosed within _________ when being assigned to variables",
    choices: ["1. commas", "2. curly brackets", "3. quotes", "4. paranthesis"],
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
  choice3El.textContent = questions[currentIndex].choices[2];
  choice4El.textContent = questions[currentIndex].choices[3];

  choice1El.addEventListener("click", goNext);
  choice2El.addEventListener("click", goNext);
  choice3El.addEventListener("click", goNext);
  choice4El.addEventListener("click", goNext);
}

function goNext() {
  currentIndex++;
  displayQuestion();
}

startButton.addEventListener("click", startQuiz);
