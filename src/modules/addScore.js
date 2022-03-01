export const addScore = async (gameId, creatGameURL) => {
  const requestURL = creatGameURL + `/${gameId}/scores/`;

  const name = document.getElementById("name-input").value;
  const score = document.getElementById("score-input").value;
  const loadingText = document.getElementById("loading");
  loadingText.innerHTML = "Adding score to Leaderboard...please wait";
  await fetch(requestURL, {
    method: "POST",
    body: JSON.stringify({ user: name, score: score }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
  loadingText.innerHTML = "Score added to Leaderboard!";
  setTimeout(window.location.reload(), 5000);
};
