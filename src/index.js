import _ from "lodash";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { addScore } from "./modules/addScore";
import { displayScores } from "./modules/displayScores";

const submitButton = document.getElementById("submit-button");
submitButton.onclick = (e) => {
  addScore();
};

displayScores();
