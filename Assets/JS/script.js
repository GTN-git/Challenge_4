// start quiz variable
var startQuiz = document.getElementById("start_quiz");
//timer variables
var timeEl = document.getElementById("time");
var timeLeft = 100;
var timeInterval;
//intro and end page elements
var title = document.getElementById("intro");
var done = document.getElementById("done");
//answer button elements
var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var button3 = document.getElementById("btn3");
var button4 = document.getElementById("btn4");
//question elements
var questionArray = document.getElementById("array");
var questions = [
  {
    q: "What does the DOM stand for?",
    a1: "Data Object Model",
    a2: "Document Object Model",
    a3: "Danger Ocean Modules",
    a4: "Data Object Manipulator",
  },{
    q: "What is a variable?",
    a1: "Named storage for data",
    a2: "An element from the document",
    a3: "A function",
    a4: "A call in Javascript",
  },{
    q: "What is an array?",
    a1: "Multiple variables",
    a2: "A variable used to store multiple values",
    a3: "An index",
    a4: "A for loop",
  },{
    q: "What does a for loop do?",
    a1: "Run through an array",
    a2: "Operate an if statement",
    a3: "Introduce new variables",
    a4: "Execute a block of code a number if times",
  },
];
var questionIndex = 0;
var questionHeader = document.getElementById("header");
var correct = [
  "Document Object Model",
  "Named storage for data",
  "A variable used to store multiple values",
  "Execute a block of code a number if times",
];
var score = 0;
//score page variables
var scorePage = document.getElementsByClassName("scorePage");

// begin quiz
function beginQuiz() {
  countdown();
  question();
}

// start the countdown
function countdown() {

  timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timeEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timeEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      timeEl.textContent = "";
      clearInterval(timeInterval);

    }
  }, 1000);
}

// go to first page of quiz hide the current page and unhide Q1 and array through questions

function question() {
  title.setAttribute("hidden", true);
  questionArray.removeAttribute("hidden");
  questionHeader.textContent = questions[questionIndex].q;
  button1.textContent = questions[questionIndex].a1;
  button2.textContent = questions[questionIndex].a2;
  button3.textContent = questions[questionIndex].a3;
  button4.textContent = questions[questionIndex].a4;
  console.log(questionIndex);
}

//check the answer via the array and move through and deduct time from wrong answer
function checkAnswer(event) {
  if (event.target.textContent === correct[questionIndex]) {
    score++;
    alert("Correct");
    if (questionIndex > questions.length) {
      endGame();
    } else {
      questionIndex++;
      question();
    }
  } else {
    timeLeft = timeLeft - 10;
    alert("Incorrect");
    if (questionIndex > questions.length) {
      endGame();
    } else {
      questionIndex++;
      question();
    }
  }
}

// Run through end game and scoring
function endGame() {
  window.alert("The quiz is finished. Let's store your score");
  questionArray.setAttribute("hidden", true);
  scorePage.removeAttribute("hidden");

}

//select answer, if wrong deduct 10 seconds and flash right or wrong and move to next hide current and show next

// your score is based on time and enter initial save to local storage

//display when you get to high scores page

// click start and event listener
startQuiz.addEventListener("click", beginQuiz);
//event listeners for checking answers
button1.addEventListener("click", checkAnswer);
button2.addEventListener("click", checkAnswer);
button3.addEventListener("click", checkAnswer);
button4.addEventListener("click", checkAnswer);
