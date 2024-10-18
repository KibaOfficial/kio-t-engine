// Copyright (c) 2024 KibaOfficial
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Logger from "../tools/Logger.js";
import { Scene } from "./Scene.js";

export class SceneManager {
  private scenes: Map<string, Scene> = new Map();
  private activeScene: Scene | null = null;

  addScene(scene: Scene): void {
    // Append the canvas to the document body
    document.body.appendChild(scene.canvas);

    this.scenes.set(scene.id, scene);
  }

  switchScene(sceneId: string): void {
    if (this.activeScene) {
      document.body.removeChild(this.activeScene.canvas);
    }

    const newScene = this.scenes.get(sceneId)
    if (newScene) {
      this.activeScene = newScene;
      document.body.appendChild(newScene.canvas);
      Logger({ status: "INFO", message: `Switched to scene ${sceneId}`});
    } else {
      Logger({ status: "ERROR", message: `Scene ${sceneId} not found.`});
    }
  }

  update(deltaTime: number): void {
    if (this.activeScene) {
      this.activeScene.update(deltaTime);
    }
  }

  render(): void {
    if (this.activeScene) {
      this.activeScene.render();
    }
  }
}