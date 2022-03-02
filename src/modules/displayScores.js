export const displayScores = async (gameId, creatGameURL) => {
  const requestURL = creatGameURL + `/${gameId}/scores/`;
  const tableBody = document.getElementById("table-display");
  await fetch(requestURL)
    .then((response) => response.json())
    .then((json) => {
      json.result
        .sort((a, b) => (a.user > b.user ? 1 : -1))
        .map((score, i) => {
          const tableRow = document.createElement("tr");
          tableRow.classList = "w-100";
          const tableData = document.createElement("td");
          tableData.classList = "w-100";
          tableData.innerHTML = `${score.user} : ${score.score}`;
          tableRow.appendChild(tableData);
          tableBody.appendChild(tableRow);
        });
    });
};
