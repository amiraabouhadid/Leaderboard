export const displayScores = async (gameId, creatGameURL) => {
  const requestURL = creatGameURL + `/${gameId}/scores/`;
  const tableBody = document.getElementById("table-display");
  const loadingMessage = document.getElementById("scores-loading");
  loadingMessage.innerHTML = "Please wait while the scores are being fetched";
  await fetch(requestURL)
    .then((response) => response.json())
    .then((json) => {
      json.result
        .sort((a, b) => (a.user > b.user ? 1 : -1))
        .map((score, i) => {
          const tableRow = document.createElement("tr");
          const tableData = document.createElement("td");

          tableData.innerHTML = `${score.user} : ${score.score}`;
          tableRow.appendChild(tableData);
          tableBody.appendChild(tableRow);
        });
    });
  loadingMessage.innerHTML = "";
};
