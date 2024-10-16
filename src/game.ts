// Copyright (c) 2024 KibaOfficial
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { DeltaTime } from "./classes/DeltaTime.js";
import { InputManager } from "./classes/InputManager.js";
import { WindowManager } from "./classes/WindowManager.js";
import {
  GameCanvas,
  getGameInit,
  getGameRun,
  setGameInit,
} from "./constants.js";
import Logger from "./tools/Logger.js";
import { initCanvas, updateFPS } from "./utils.js";
import { drawPauseOverlay } from "./Graphics.js";

// Initialize DeltaTime, InputManager, and WindowManager
const deltaTime = new DeltaTime();
const inputManager = new InputManager();
const winManager = new WindowManager();

// Initialize Canvas element and context
let { game, gameCtx }: GameCanvas = { game: null, gameCtx: null };

export function gameLoop(currentTime: DOMHighResTimeStamp) {
  // Check if game was initialized
  if (!getGameInit()) {
    const canvasData = initCanvas();
    game = canvasData.game;
    gameCtx = canvasData.gameCtx;

    if (!game || !gameCtx) {
      Logger({ status: "ERROR", message: "Game initialization failed" });
      setGameInit(false);
      throw new Error("Game initialization failed");
    }

    setGameInit(true);
  }

  // Resize the canvas using WindowManager
  winManager.resizeCanvas(game!)

  // Check if game is running
  if (getGameRun()) {
    // If the game is paused, show the pause overlay
    if (inputManager.isGamePaused()) {
      if (gameCtx) {
        drawPauseOverlay(gameCtx); // Draw the pause overlay on the canvas
      }
      requestAnimationFrame(gameLoop); // Continue looping
      return; // Skip game updates while paused
    }

    // Update DeltaTime every frame
    deltaTime.update(currentTime);
    const dt = deltaTime.getDelta();

    // Update the FPS display
    updateFPS(dt, gameCtx!);

    requestAnimationFrame(gameLoop);
  }
}
