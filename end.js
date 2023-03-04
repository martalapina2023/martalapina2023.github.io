const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

finalScore.innerText =
  "Congratulations, you answered " +
  mostRecentScore +
  "/7 questions correctly.";
