var welcomeScreen = document.getElementById("welcome-screen");
var startButton = document.getElementById("start-button");
var goBackButton = document.getElementById("go-back");
var questionScreen = document.getElementById("question-screen");
var highScoreScreen = document.getElementById("highscore-screen");
var finalScoreScreen = document.getElementById("final-screen");
var questionEl = document.getElementById("question-text");
var choice1El = document.getElementById("choice1");
var choice2El = document.getElementById("choice2");
var choice3El = document.getElementById("choice3");
var choice4El = document.getElementById("choice4");
var finalScreenButton = document.getElementById("submit-button");
var timerEl = document.getElementById("timer");
var rightOrWrong = document.getElementById("rightorwrong");
var answerLine = document.getElementById("line");
var clearScoresButton = document.getElementById("clear-scores");
var currentIndex = 0;
var currentScore = 0;
var timeLeft = 75;

var questions = [
  {
    text: "Commonly used data types DO Not Include",
    choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correctAnswer: "3. alerts",
  },
  {
    text: "The condition in an if / else statement is enclosed with ___________.",
    choices: [
      "1. quotes",
      "2. curly brackets",
      "3. parenthesis",
      "4. square brackets",
    ],
    correctAnswer: "2. curly brackets",
  },
  {
    text: "Arrays in JavaScript can be used to store _________.",
    choices: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    correctAnswer: "4. all of the above",
  },
  {
    text: "String values must be enclosed within _________ when being assigned to variables",
    choices: ["1. commas", "2. curly brackets", "3. quotes", "4. paranthesis"],
    correctAnswer: "3. quotes",
  },
];

function startQuiz() {
  welcomeScreen.style.display = "none";
  countdown();
  questionScreen.style.display = "flex";

  displayQuestion();
}

function countdown() {
  var timeInterval = setInterval(function () {
    //display message if the time is greater than 0
    if (timeLeft !== 0) {
      timerEl.textContent = "Time: " + timeLeft;
      timeLeft--;
    }
    //if timeruns out disply my message
    else if (timeLeft === 0) {
      timerEl.textContent = "";
      clearInterval(timeInterval);
    }
  }, 500);
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
  finalScreenButton.addEventListener("click", finalScore);
}

function goNext(event) {
  var correctAnswer = questions[currentIndex].correctAnswer;
  var userAnswer = event.currentTarget.textContent;

  if (correctAnswer === userAnswer) {
    answerLine.style.display = "flex";
    rightOrWrong.textContent = "Correct!";
  } else {
    answerLine.style.display = "flex";
    rightOrWrong.textContent = "Wrong!";
    timeLeft -= 15;
  }
  currentIndex++;

  if (currentIndex === 4) {
    questionScreen.style.display = "none";
    finalScoreScreen.style.display = "flex";
    console.log(currentIndex);
    var finalScore = document.getElementById("final-score");
    finalScore.textContent = "Final Score is " + timeLeft;
    currentScore = timeLeft;
  } else {
    displayQuestion();
  }
}

function finalScore() {
  finalScoreScreen.style.display = "none";
  highScoreScreen.style.display = "flex";
  var userIntials = document.getElementById("initials");
  var highScore = {
    intials: userIntials.value,
    score: currentScore,
  };
  localStorage.setItem("highScore", JSON.stringify(highScore));
  var savedScore = JSON.parse(localStorage.getItem("highScore"));

  var nameScore = document.getElementById("names-score");
  nameScore.textContent = savedScore.intials + "-" + savedScore.score;

  clearScoresButton.addEventListener("click", function () {
    nameScore.textContent = "";
    clearStorage();
  });

  goBackButton.addEventListener("click", function () {
    highScoreScreen.style.display = "none";
    currentIndex = 0;
    timeLeft = 75;
    startQuiz();
  });
}

function clearStorage() {
  localStorage.clear();
}

startButton.addEventListener("click", startQuiz);
