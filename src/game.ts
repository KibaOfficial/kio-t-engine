// game.ts
// Copyright (c) 2024 KibaOfficial
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { DeltaTime } from "./classes/DeltaTime.js";
import { InputManager } from "./classes/InputManager.js";
import { WindowManager } from "./classes/WindowManager.js";
import { getGameInit, getGameRun, setGameTitle } from "./constants.js";
import { initGame, updateFPS } from "./utils.js";
import { drawPauseOverlay } from "./Graphics.js";
import { SceneManager } from "./classes/SceneManager.js";
import { Scene } from "./classes/Scene.js";

// Initialize DeltaTime, InputManager, WindowManager and SceneManager
const deltaTime = new DeltaTime();
const inputManager = new InputManager();
const winManager = new WindowManager();
const sceneManager = new SceneManager();

// Create and add the gameScene to the SceneManager
const gameScene = new Scene("gameScene", window.innerWidth, window.innerHeight);
sceneManager.addScene(gameScene);
sceneManager.switchScene("gameScene");

// Set gametitle
setGameTitle("Kio T Engine");

// Initialize the game loop
export function gameLoop(currentTime: DOMHighResTimeStamp) {
  // Resize the canvas using WindowManager
  winManager.resizeCanvas(gameScene.canvas);

  // Check if the game is running
  if (getGameRun()) {
    if (!getGameInit()) {
      initGame();
    }
    // If the game is paused, show the pause overlay
    if (inputManager.isGamePaused()) {
      drawPauseOverlay(gameScene.ctx);
      requestAnimationFrame(gameLoop);
      return;
    }

    // Update DeltaTime every frame
    deltaTime.update(currentTime);
    const dt = deltaTime.getDelta();

    // Update the FPS display
    updateFPS(dt, gameScene.ctx);

    // Call the update and render methods of the current scene
    // but not needed yet
    // sceneManager.update(dt);
    // sceneManager.render();

    requestAnimationFrame(gameLoop);
  }
}
