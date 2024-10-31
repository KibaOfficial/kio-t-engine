// Copyright (c) 2024 KibaOfficial
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { DeltaTime } from "./classes/DeltaTime.js";
import { InputManager } from "./classes/InputManager.js";
import { WindowManager } from "./classes/WindowManager.js";
import { getGameInit, getGameRun } from "./constants.js";
import { initGame, updateFPS } from "./utils.js";
import { drawPauseOverlay } from "./Graphics.js";
import { SceneManager } from "./classes/SceneManager.js";
import { Scene } from "./classes/Scene.js";

// Initialize DeltaTime, InputManager, WindowManager and SceneManager
const deltaTime = new DeltaTime();
const inputManager = new InputManager();
const winManager = new WindowManager();
const sceneManager = new SceneManager(winManager);

// Create and add the gameScene to the SceneManager with a specific background color
const gameScene = new Scene(
  "gameScene",
  window.innerWidth,
  window.innerHeight,
  "#87CEEB", // Sky Blue
  1 // Lower z-index
);
sceneManager.addScene(gameScene);
sceneManager.activateScene("gameScene");

// Create and add the uiScene to the SceneManager
const uiScene = new Scene(
  "uiScene",
  window.innerWidth,
  window.innerHeight,
  "transparent", // Transparent background
  2 // Higher z-index
);
sceneManager.addScene(uiScene);
sceneManager.activateScene("uiScene");

// Initialize the game loop
export function gameLoop(currentTime: DOMHighResTimeStamp) {
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
    updateFPS(dt, uiScene.ctx);

    // Call the update and render methods of the current scene
    sceneManager.update(dt);
    sceneManager.render();

    requestAnimationFrame(gameLoop);
  }
}
