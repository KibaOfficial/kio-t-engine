// Copyright (c) 2024 KibaOfficial
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Logger from "../tools/Logger.js";

export class Scene {
  id: string;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  backgroundColor: string;

  constructor(
    id: string,
    width: number,
    height: number,
    backgroundColor: string = "black",
    zIndex: number = 1
  ) {
    this.id = id;
    this.canvas = document.createElement("canvas");
    this.ctx = this.createContext(this.canvas);
    this.canvas.id = id;
    this.canvas.width = width;
    this.canvas.height = height;
    this.canvas.style.position = "absolute"; // Ensure the canvas is positioned absolutely
    this.canvas.style.top = "0";
    this.canvas.style.left = "0";
    this.canvas.style.zIndex = zIndex.toString(); // Set the z-index
    this.backgroundColor = backgroundColor;
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
    // Implement your update logic here
    // Example: Update positions of objects in the scene
    // this.objects.forEach(object => object.update(deltaTime));
  }

  render(): void {
    // Fill the canvas with the background color
    this.ctx.fillStyle = this.backgroundColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Render other scene elements here
    // Example: this.objects.forEach(object => object.render(this.ctx));
  }

  clear(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
