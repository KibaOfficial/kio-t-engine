// Copyright (c) 2024 KibaOfficial
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Logger from "../tools/Logger.js";
import { Scene } from "./Scene.js";
import { WindowManager } from "./WindowManager.js";

export class SceneManager {
  private scenes: Map<string, Scene>;
  private activeScenes: Set<Scene>;
  private windowManager: WindowManager;

  constructor(windowManager: WindowManager) {
    this.scenes = new Map();
    this.activeScenes = new Set();
    this.windowManager = windowManager;
  }

  addScene(scene: Scene): void {
    document.body.appendChild(scene.canvas);
    this.scenes.set(scene.id, scene);
  }

  activateScene(sceneId: string): void {
    const scene = this.scenes.get(sceneId);
    if (scene) {
      this.activeScenes.add(scene);
      Logger({ status: "INFO", message: `Activated scene ${sceneId}` });
    } else {
      Logger({ status: "ERROR", message: `Scene ${sceneId} not found.` });
    }
  }

  deactivateScene(sceneId: string): void {
    const scene = this.scenes.get(sceneId);
    if (scene) {
      this.activeScenes.delete(scene);
      Logger({ status: "INFO", message: `Deactivated scene ${sceneId}` });
    } else {
      Logger({ status: "ERROR", message: `Scene ${sceneId} not found.` });
    }
  }

  update(deltaTime: number): void {
    this.activeScenes.forEach((scene) => {
      this.windowManager.resizeCanvas(scene.canvas);
      scene.update(deltaTime);
    });
  }

  render(): void {
    this.activeScenes.forEach((scene) => {
      this.windowManager.resizeCanvas(scene.canvas);
      scene.render();
    });
  }
}
