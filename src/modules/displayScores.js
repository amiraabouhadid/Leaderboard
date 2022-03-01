import { getScores } from "./getScores";

export const displayScores = () => {
  let scores = getScores();
  const tableBody = document.getElementById("table-display");
  scores.map((score, i) => {
    const tableRow = document.createElement("tr");
    const tableData = document.createElement("td");
    tableData.innerHTML = `${score.name} : ${score.score}`;
    tableRow.appendChild(tableData);
    tableBody.appendChild(tableRow);
  });
};
