// Copyright (c) 2024 KibaOfficial
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { resetGameStates } from "./constants.js";
import { gameLoop } from "./game.js";

function startGame() {
  resetGameStates();
  const startTime = performance.now();
  gameLoop(startTime);
}

window.onload = () => {
  startGame();
}