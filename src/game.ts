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
import { Vector2 } from "./classes/Vector2.js";

const deltaTime = new DeltaTime();
const inputManager = new InputManager();
const winManager = new WindowManager();
const sceneManager = new SceneManager(winManager);

const gameScene = new Scene(
  "gameScene",
  window.innerWidth,
  window.innerHeight,
  "#87CEEB",
  1
);
sceneManager.addScene(gameScene);
sceneManager.activateScene("gameScene");

const uiScene = new Scene(
  "uiScene",
  window.innerWidth,
  window.innerHeight,
  "transparent",
  2
);
sceneManager.addScene(uiScene);
sceneManager.activateScene("uiScene");

export function gameLoop(currentTime: DOMHighResTimeStamp) {
  // Check if the game is running
  if (getGameRun()) {
    if (!getGameInit()) {
      initGame();
    }

    if (inputManager.isGamePaused()) {
      drawPauseOverlay(gameScene.ctx);
      requestAnimationFrame(gameLoop);
      return;
    }

    // Update DeltaTime every frame
    deltaTime.update(currentTime);
    const dt = deltaTime.getDelta();

    // Ensure dt is greater than 0 to avoid infinity FPS
    if (dt > 0) {
      uiScene.clear();
      updateFPS(dt, uiScene.ctx);

      // Call the update and render methods of the current scene
      sceneManager.update(dt);
      sceneManager.render();
    }
    requestAnimationFrame(gameLoop);
  }
}
