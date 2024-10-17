// Copyright (c) 2024 KibaOfficial
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Logger from "../tools/Logger.js";

export class Scene {
  id: string;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(id: string, width: number, height: number) {
    this.id = id;
    this.canvas = document.createElement("canvas");
    this.ctx = this.createContext(this.canvas);
    this.canvas.id = id;
    this.canvas.width = width;
    this.canvas.height = height;
  }

  private createContext(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
    const context = canvas.getContext("2d");
    if (!context) {
      Logger({
        status: "ERROR",
        message: `Could not create canvas context for scene ${this.id}`,
      });
      throw new Error(`Could not create canvas context for scene ${this.id}`);
    }
    return context;
  }

  update(deltaTime: number): void {
    Logger({ status: "WARN", message: "Scene.update() not implemented yet."});
  }

  render(): void {
    Logger({ status: "WARN", message: "Scene.render() not implemented yet."});
  }
}
