
var scores = document.getElementById("scores");
var back = document.getElementById("back");
var clear = document.getElementById("clear");
var orderedScore = [];
highScorePage();

// Adds the added array of scores to the page in order of score
function highScorePage() {
  for (let i = 0; i < localStorage.length; i++) {
    var initial = localStorage.key(i);
    var score = localStorage.getItem(localStorage.key(i));
    orderedScore.push([initial,score]);

    console.log(initial,score);
  }
  orderedScore.sort(function (a, b) {
    return b[1] - a[1];
 });

 for (let i = 0; i < orderedScore.length; i++) {
   
  var playerInitial = document.createElement("li");
  playerInitial.textContent=orderedScore[i][0]+ " " + orderedScore[i][1];
  scores.append(playerInitial);
 }
  console.log(orderedScore);
  }

// allows go back button to return to quiz
function goBack() {
  window.location.href = "../Challenge_4/index.html";
}

//button to clear high scores
function clearHighScore(event) {
  event.preventDefault();
  localStorage.clear();
  scores.innerHTML = '';
}



back.addEventListener("click", goBack);
clear.addEventListener("click", clearHighScore);