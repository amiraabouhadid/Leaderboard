import _ from "lodash";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { addScore } from "./modules/addScore";
import { displayScores } from "./modules/displayScores";
import { startBoard } from "./modules/startBoard";
const creatGameURL =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games";

let gameId = startBoard(creatGameURL);

const submitButton = document.getElementById("submit-button");
submitButton.onclick = (e) => {
  addScore(gameId, creatGameURL);
};
const refreshButton = document.getElementById("refresh-button");
refreshButton.onclick = (e) => {
  window.location.reload();
};

displayScores(gameId, creatGameURL);
