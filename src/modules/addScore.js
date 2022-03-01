import { getScores } from "./getScores";

export const addScore = () => {
  let scores = getScores();
  const name = document.getElementById("name-input").value;
  const score = document.getElementById("score-input").value;
  scores.push({ name: name, score: score });
  localStorage.setItem("scores", JSON.stringify(scores));
  window.location.reload();
};
