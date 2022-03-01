export const getScores = () => {
  let scores;

  if (localStorage.getItem("scores")) {
    scores = JSON.parse(localStorage.getItem("scores"));
  } else {
    localStorage.setItem("scores", "");
    scores = [];
  }
  return scores;
};
