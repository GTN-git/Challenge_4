
var scores = document.getElementById("scores");
var back = document.getElementById("back");
var clear = document.getElementById("clear");

highScorePage();

function highScorePage() {
    var highScores = localStorage.getItem("Initials");
    highScores = JSON.parse(highScores);
    scores.textContent=highScores.initials + highScores.score;
    console.log(highScores);
    console.log(typeof highScores)
  }

function goBack() {
  window.location.href = "../Challenge_4/index.html";
}

function clearHighScore(event) {
  event.preventDefault();
  localStorage.clear();
  scores.innerHTML = '';
}



back.addEventListener("click", goBack);
clear.addEventListener("click", clearHighScore);