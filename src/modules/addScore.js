export const addScore = async (gameId, creatGameURL) => {
  const requestURL = creatGameURL + `/${gameId}/scores/`;

  const name = document.getElementById("name-input").value;
  const score = document.getElementById("score-input").value;
  console.log("sending post request");
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
  console.log("post request done, score is added");

  window.location.reload();
};
